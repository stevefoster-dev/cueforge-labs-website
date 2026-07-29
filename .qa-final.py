"""Final local acceptance sweep for the CueForge product dossier candidate."""
import hashlib
import os
import re
import sys
import time
import urllib.request
from urllib.parse import urlparse, unquote

BASE = 'http://127.0.0.1:8141/'
ROUTES = ['software-circuit.html', 'cuepatch.html', 'cuepack.html', 'cueroll.html',
          'cuemaker.html', 'cuescale.html', 'cueswitcher.html', 'cuecheck.html',
          'cuenotch.html', 'business-solutions.html']
ASSETS = ['css/product-dossier.css', 'js/product-dossier.js', 'images/cueforge-anvil.svg',
          'images/products/cuenotch.svg', 'images/mockups/cuepatch-screenshot.jpg', 'sitemap.xml']
CUEPATCH_SHA = '9bb44a1b3726b17b911f34aedaa5d7026dee1e397f9dad003d062e7d338890da'
REMOVED = ['CueCapture', 'CueMapper', 'CueGrid', 'CueHealth', 'CueVault', 'CueRider', 'CueGrade']
APPROVED_AMOUNTS = sorted(['$199/year', '$149', '$299', '$0.40', '$249'])

fails = []


def check(label, ok, detail=''):
    print(('PASS  ' if ok else 'FAIL  ') + label + (('  -- ' + detail) if detail else ''))
    if not ok:
        fails.append(label)


time.sleep(1.2)

# 1 -- every required route and shared asset returns HTTP 200
for path in ROUTES + ASSETS:
    try:
        with urllib.request.urlopen(BASE + path, timeout=10) as r:
            code = r.status
            r.read()
    except Exception as e:
        code = getattr(e, 'code', 'ERR')
    check('HTTP 200  ' + path, code == 200, 'got ' + str(code))

# 2 -- CueGrade must not be reachable
try:
    urllib.request.urlopen(BASE + 'cuegrade.html', timeout=10)
    check('CueGrade route absent', False, 'cuegrade.html returned 200')
except Exception as e:
    check('CueGrade route absent', getattr(e, 'code', None) == 404, 'status ' + str(getattr(e, 'code', 'ERR')))

# 3 -- CuePatch chosen screenshot is byte-identical
actual = hashlib.sha256(open('images/mockups/cuepatch-screenshot.jpg', 'rb').read()).hexdigest()
check('CuePatch screenshot sha256 unchanged', actual == CUEPATCH_SHA, actual)

# 4 -- every local link and asset reference resolves
missing = []
badanchor = []
for r in ROUTES:
    s = open(r, encoding='utf-8').read()
    ids = set(re.findall(r'\bid="([^"]+)"', s))
    for ref in re.findall(r'(?:href|src)="([^"]+)"', s):
        if ref.startswith(('mailto:', 'http://', 'https://', 'data:', 'tel:')) or '${' in ref:
            continue
        if ref.startswith('#'):
            if ref[1:] not in ids:
                badanchor.append((r, ref))
            continue
        u = urlparse(ref)
        p = unquote(u.path)
        if not p:
            continue
        if not os.path.exists(p):
            missing.append((r, ref))
        elif u.fragment and p.endswith('.html'):
            if ('id="' + u.fragment + '"') not in open(p, encoding='utf-8').read():
                badanchor.append((r, ref))
sc = open('software-circuit.html', encoding='utf-8').read()
for img in re.findall(r"image:\s*'([^']+)'", sc):
    if not os.path.exists(img):
        missing.append(('software-circuit[data]', img))
for url in re.findall(r"url:\s*'([^']+)'", sc):
    if not url.startswith('mailto:') and not os.path.exists(urlparse(url).path):
        missing.append(('software-circuit[data]', url))
check('all local links/assets resolve', not missing, str(missing))
check('all in-page anchors resolve', not badanchor, str(badanchor))

# 5 -- removed products stay removed everywhere on the required routes
found_removed = []
for r in ROUTES:
    s = open(r, encoding='utf-8').read()
    for name in REMOVED:
        if re.search(r'\b' + name + r'\b', s, re.I):
            found_removed.append((r, name))
check('no removed product reintroduced', not found_removed, str(found_removed))

# 6 -- only approved prices appear
amounts = set()
for r in ROUTES:
    s = open(r, encoding='utf-8').read()
    amounts.update(re.findall(r'\$ ?[0-9,]+(?:\.[0-9]+)?(?:/year|/month)?', s))
check('only approved amounts published', sorted(amounts) == APPROVED_AMOUNTS,
      'found ' + str(sorted(amounts)))

# 7 -- retired tier language is gone
stale = []
for r in ROUTES:
    s = open(r, encoding='utf-8').read()
    for pat in ['Production Suite', 'Join the Beta', 'Coming Soon', 'machine activation']:
        if re.search(pat, s, re.I):
            stale.append((r, pat))
check('no stale suite tier / beta / coming-soon copy', not stale, str(stale))

# 8 -- no private or machine-specific data in published assets
leaks = []
LEAK = [r'/Users/[A-Za-z]', r'\b(?:\d{1,3}\.){3}\d{1,3}\b', r'hooks\.slack\.com',
        r'supabase\.co', r'\.hermes/', r'\bsk-[A-Za-z0-9]{6}']
for r in ROUTES + ['css/product-dossier.css', 'js/product-dossier.js']:
    s = open(r, encoding='utf-8').read()
    for pat in LEAK:
        if re.search(pat, s):
            leaks.append((r, pat))
check('no private paths/addresses/credentials in site assets', not leaks, str(leaks))

# 9 -- shared system is used rather than copied per page
for r in ROUTES:
    if r == 'software-circuit.html':
        continue
    s = open(r, encoding='utf-8').read()
    inline_css = len(re.findall(r'<style', s))
    check('shared system used, no page-local framework  ' + r,
          inline_css == 0 and 'css/product-dossier.css' in s and 'js/product-dossier.js' in s)

# 10 -- every product route offers a stable return to the Circuit
for r in ROUTES:
    if r == 'software-circuit.html':
        continue
    s = open(r, encoding='utf-8').read()
    check('return-to-Circuit link  ' + r, 'href="software-circuit.html"' in s)

# 11 -- circuit index carries the eight approved products in order
order = re.findall(r"name:\s*'(Cue[A-Za-z]+)'", sc)
expected = ['CuePatch', 'CuePack', 'CueRoll', 'CueMaker', 'CueScale',
            'CueSwitcher', 'CueCheck', 'CueNotch']
check('circuit lists the 8 approved products in order', order == expected, str(order))
check('business solutions card routes to its page',
      'href="business-solutions.html"' in sc)

print('')
print('ACCEPTANCE: ' + ('FAILURES -> ' + str(fails) if fails else 'ALL CHECKS PASSED'))
sys.exit(1 if fails else 0)
