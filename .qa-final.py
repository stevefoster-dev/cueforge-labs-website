"""Final local acceptance sweep for the CueForge product dossier candidate."""
import hashlib
import os
import re
import sys
import time
import urllib.request
from urllib.parse import urlparse, unquote

BASE = 'http://127.0.0.1:8141/'
ROUTES = ['software-circuit.html', 'cuepatch.html', 'cueroll.html',
          'cuemaker.html', 'cuescale.html', 'cueswitcher.html', 'cuecheck.html',
          'cuenotch.html', 'business-solutions.html', 'front-desk-ai.html',
          'invoicepack.html']
DOSSIERS = [r for r in ROUTES if r != 'software-circuit.html']
# business-solutions.html is a suite showroom, not a single-product dossier, so
# the "three substantial interface views" rule is applied to the product and
# app pages and the suite page gets its own preview check instead.
PRODUCT_PAGES = [r for r in DOSSIERS if r != 'business-solutions.html']

FD = 'images/app-screenshots/front-desk-ai/'
IP = 'images/app-screenshots/invoicepack/'
# Release authority for the two Business Solutions app routes. Source files and
# crop boxes live in the provenance manifest.
PUBLISHED_SHA = {
    FD + 'structured-call-outcome.webp': '9706d3e473895d0f462388f14ef43a24347c5d1fea80d0756700d7114d76b131',
    FD + 'owner-action-desk.webp': '7f421ed998e8a7dac3f145cd7b2ef81195f478523ebd5f7818421731eb1269ed',
    FD + 'connected-customer-record.webp': 'aaf118a28f7ac2a6ff8961b254573fd36576fe636d0ea713b27246ec2a6e3280',
    FD + 'jobs-pipeline.webp': 'e9c9cfb36ce96c0c785817cb4ee1ffa912bd4fb66d37553092c74fac2993bd0d',
    FD + 'structured-inbox-mobile.webp': '475fd7f003878d4cf40163e209b85107466dad0156fd46b7ff83d1e91b5b199d',
    IP + 'accepted-facts-to-draft.webp': 'eeb98a96f760f7bfbcd47b5bbc6dbc30c92200a0918b7548d7f0d72eb4b5aee5',
    IP + 'invoice-preview-detail.webp': '9773e84c0b11812a4251993c14c6ebd889ff87a53517b2176eef1588ff395084',
    IP + 'rate-change-and-preview.webp': '440b9368042e2fb86e5429ade5558a6b2353de31a8e8c9bbcd9ea78b5dbe9db4',
    IP + 'work-packet-exported.webp': '354dfc36071908032363e5040ca57eaaab9e5eba043aa0ada80b3b9237d29f5b',
    IP + 'local-vault-mobile.webp': '6f03deada707a56b5753732f70cc64bb25a993327e1541c1226585fd3e0e27e3',
}
CSW = 'images/app-screenshots/cueswitcher/'
CNO = 'images/app-screenshots/cuenotch/'
# The eight currently published governed workflow captures. Hashes are local
# release authority; the older accepted CueNotch Live Sheet remains separately
# provenance-pinned.
NEW_CAPTURES = [
    CSW + 'recorded-cue-timeline.webp', CSW + 'signal-path-reference.webp',
    CSW + 'lens-calculator.webp', CSW + 'shot-types-reference.webp',
    CSW + 'camera-plot-builder.webp',
    CNO + 'operator-sheet-fx-detail.webp', CNO + 'director-sheet-quad-routing.webp',
    CNO + 'crew-docs-hub.webp',
]
# CueSwitcher surfaces withdrawn from this dossier by the recovery contracts.
CUESWITCHER_WITHDRAWN = ['pip-layout-designer.webp', 'safe-area-guides.webp']
# Accepted evidence-surface position maps. Order is document order and every
# path/hash pair is enforced below.
REELS = {
    'cueswitcher.html': [
        (CSW + 'recorded-cue-timeline.webp',
         'fad62b8ec9f73d88ca19a3342fd2fed6a08adddbfda0f0769fc6a567653b0c43'),
        (CSW + 'signal-path-reference.webp',
         'b4a5dda598318f1d2b15127e9ca206e09431b14e743f0bb7876dc9cd88b719b4'),
        (CSW + 'lens-calculator.webp',
         '8873f862bddeef95a0e1f95a87a20405140b28ba7f56d78a94ddcf7519c74f2f'),
        (CSW + 'shot-types-reference.webp',
         '73fd81df59f98ffe3eb7bd6319e266e1ff84b5ccf6f2a83d174bd7bb6b8f8139'),
        (CSW + 'camera-plot-builder.webp',
         '3942f5795c1db04ade67e7090490efdec3a72ff66d7c7dae574b8856213ed2bc'),
    ],
    'cuenotch.html': [
        (CNO + 'director-sheet-quad-routing.webp',
         '1dfffeca847cfd561bf0fd5c5201c1ac01915e9698bd369dccc0ad82505965a4'),
        (CNO + 'operator-sheet-fx-detail.webp',
         '3a6dd5c9cf6be46d98917006e5fa6ac55f2c3bd11cd784ed788fa1c8dd958afb'),
        (CNO + 'crew-docs-hub.webp',
         '13009a78231236cacb52f501d0855cc39c6b68c014b20f25866244fc1bca9ce2'),
        (CNO + 'live-sheet-dmx-map.webp',
         'd86af84714b475f411d0423a418576a3abf1d46ed757eb2dc42512e0f2afc2a6'),
    ],
}
REEL_SHA = {path: sha for reel in REELS.values() for path, sha in reel}
# CueNotch captures rejected in public-safety review. Escaped-markup defect,
# sticky-overlap flag, and unnecessary internal parameter exposure respectively.
CUENOTCH_REJECTED = ['set-list', 'operator-sheet-overview', 'layer-snapshot']
ASSETS = ['css/product-dossier.css', 'js/product-dossier.js', 'images/cueforge-anvil.svg',
          'images/products/cuenotch.svg', 'images/products/cuescale.svg',
          'images/products/invoicepack.png', 'images/products/pocketcounsel-mark.png',
          'images/mockups/cuepatch-screenshot.jpg', 'sitemap.xml'] \
         + sorted(PUBLISHED_SHA) + sorted(REEL_SHA)
CUEPATCH_SHA = '9bb44a1b3726b17b911f34aedaa5d7026dee1e397f9dad003d062e7d338890da'
POCKETCOUNSEL_SRC_SHA = '4cd3e5eb91aae88907cde785eda059f932322cf031b562d1d84ae2792fdc5c67'
POCKETCOUNSEL_MARK_SHA = '644f87bf693775c3228ee9fdf8b276c745b69d2a03ed2f6dd187d1e24564bfd6'
CUENOTCH_SIGNAL_NOTCH_SHA = 'd7f9ea276014e108c40ffc652c834fa731273c79e835ded0d820fb2998182241'
CUESCALE_SINGLE_SPINE_SHA = '557b7e2bfd1b198378f1ba16af78e433fd24528583b0301d630d2c05d2c404a7'
INVOICEPACK_FORGE_MINT_64_SHA = '46234990fac626ba3830a992cb2bd3b44e00fc3662b1fd12458d9887443b1e36'
REMOVED = ['CueCapture', 'CueMapper', 'CueGrid', 'CueHealth', 'CueVault', 'CueRider', 'CueGrade']
APPROVED_AMOUNTS = sorted(['$199/year', '$149', '$299', '$0.40', '$249'])

fails = []


def check(label, ok, detail=''):
    print(('PASS  ' if ok else 'FAIL  ') + label + (('  -- ' + detail) if detail else ''))
    if not ok:
        fails.append(label)


def read(path):
    return open(path, encoding='utf-8').read()


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

# 2 -- withdrawn and internal routes must not be reachable
for gone in ('cuepack.html', 'cuegrade.html', 'sales-portal.html'):
    try:
        urllib.request.urlopen(BASE + gone, timeout=10)
        check('route absent  ' + gone, False, 'returned 200')
    except Exception as e:
        check('route absent  ' + gone, getattr(e, 'code', None) == 404,
              'status ' + str(getattr(e, 'code', 'ERR')))

# 3 -- CuePatch chosen screenshot is byte-identical
actual = hashlib.sha256(open('images/mockups/cuepatch-screenshot.jpg', 'rb').read()).hexdigest()
check('CuePatch screenshot sha256 unchanged', actual == CUEPATCH_SHA, actual)

# 3b -- exact selected website identities plus the untouched PocketCounsel
#       source inside its 2px-right optical-nudge derivative.
cuenotch_sha = hashlib.sha256(open('images/products/cuenotch.svg', 'rb').read()).hexdigest()
check('CueNotch uses exact Signal Notch master SVG',
      cuenotch_sha == CUENOTCH_SIGNAL_NOTCH_SHA, cuenotch_sha)
cuescale_sha = hashlib.sha256(open('images/products/cuescale.svg', 'rb').read()).hexdigest()
check('CueScale uses exact Single Spine master SVG',
      cuescale_sha == CUESCALE_SINGLE_SPINE_SHA, cuescale_sha)
invoicepack_sha = hashlib.sha256(open('images/products/invoicepack.png', 'rb').read()).hexdigest()
check('InvoicePack uses exact approved Forge Mint 64px ladder asset',
      invoicepack_sha == INVOICEPACK_FORGE_MINT_64_SHA, invoicepack_sha)
src_sha = hashlib.sha256(open('images/products/pocketcounsel.png', 'rb').read()).hexdigest()
check('PocketCounsel source mark unchanged', src_sha == POCKETCOUNSEL_SRC_SHA, src_sha)
try:
    import struct
    d = open('images/products/pocketcounsel-mark.png', 'rb').read()
    w, h = struct.unpack('>II', d[16:24])
    check('PocketCounsel optical derivative is 132x128', (w, h) == (132, 128), '%dx%d' % (w, h))
    mark_sha = hashlib.sha256(d).hexdigest()
    check('PocketCounsel derivative sha256 is the accepted build',
          mark_sha == POCKETCOUNSEL_MARK_SHA, mark_sha)
except Exception as e:
    check('PocketCounsel optical derivative is 132x128', False, str(e))

# 3c -- the ten Business Solutions app captures are the exact published frames
for path, want in sorted(PUBLISHED_SHA.items()):
    try:
        got = hashlib.sha256(open(path, 'rb').read()).hexdigest()
    except Exception as e:
        got = 'ERR ' + str(e)
    check('published capture sha256  ' + path, got == want, got)

# 3d -- all twelve newly accepted workflow captures are present on disk and
#       carry a release-authority hash
for path in NEW_CAPTURES:
    check('new workflow capture present  ' + path,
          os.path.exists(path) and path in REEL_SHA)
check('exactly eight governed workflow captures required', len(NEW_CAPTURES) == 8,
      '%d listed' % len(NEW_CAPTURES))

# 3d2 -- every published capture is the exact accepted frame
for path, want in sorted(REEL_SHA.items()):
    try:
        got = hashlib.sha256(open(path, 'rb').read()).hexdigest()
    except Exception as e:
        got = 'ERR ' + str(e)
    check('workflow capture sha256  ' + path, got == want, got)

# 3e -- each rebuilt dossier presents exactly its accepted evidence-surface
#       position map, in document order: every accepted capture referenced once,
#       no other app capture, and no duplicate src anywhere in the page.
for route, reel in sorted(REELS.items()):
    s = read(route)
    srcs = re.findall(r'<img[^>]*\ssrc="([^"]+)"', s)
    shots = [x for x in srcs if x.startswith('images/app-screenshots/')]
    want = [p for p, _ in reel]
    check('evidence positions match the accepted map in order  ' + route,
          shots == want, 'referenced ' + str(shots))
    for p in want:
        check('accepted capture referenced once  ' + p, shots.count(p) == 1,
              'count %d' % shots.count(p))
    dupes = sorted({x for x in srcs if srcs.count(x) > 1})
    check('no duplicate image src in the dossier  ' + route, not dupes, str(dupes))
    # Diversity is assessed across the whole dossier surface -- every position
    # must be a distinct captured state, not one state re-cropped.
    check('every evidence position is a distinct state  %s' % route,
          len(set(shots)) == len(reel) and len(shots) == len(reel),
          '%d positions, %d distinct' % (len(shots), len(set(shots))))
    check('dossier presents at least four evidence positions  ' + route,
          len(shots) >= 4, '%d positions' % len(shots))

# 3e2 -- withdrawn CueSwitcher captures are gone from active routes entirely
check('withdrawn CueSwitcher captures absent from the dossier',
      not [name for name in CUESWITCHER_WITHDRAWN
           if name in read('cueswitcher.html')])
check('withdrawn CueSwitcher captures absent from every route',
      not [(r, name) for r in ROUTES for name in CUESWITCHER_WITHDRAWN
           if name in read(r)])

# 3f -- no CueNotch capture rejected in public-safety review may be published
notch_leaks = []
notch_srcs = re.findall(r'<img[^>]*\ssrc="([^"]+)"', read('cuenotch.html'))
for name in CUENOTCH_REJECTED:
    notch_leaks += [('cuenotch.html', s) for s in notch_srcs if name in s]
    if os.path.exists(CNO + name + '.webp'):
        notch_leaks.append(('repo', CNO + name + '.webp'))
check('no rejected CueNotch capture published', not notch_leaks, str(notch_leaks))
# The exact rejected source filenames may never appear anywhere on the site.
CUENOTCH_REJECTED_FILES = ['03-set-list.png', '01b-operator-sheet-overview.png',
                           '04-layer-snapshot.png']
named_leaks = [(r, f) for r in ROUTES for f in CUENOTCH_REJECTED_FILES if f in read(r)]
named_leaks += [('repo', CNO + f) for f in CUENOTCH_REJECTED_FILES
                if os.path.exists(CNO + f)]
check('rejected CueNotch source filenames absent', not named_leaks, str(named_leaks))

# 4 -- every local link and asset reference resolves
missing = []
badanchor = []
for r in ROUTES:
    s = read(r)
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
            if ('id="' + u.fragment + '"') not in read(p):
                badanchor.append((r, ref))
sc = read('software-circuit.html')
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
    s = read(r)
    for name in REMOVED:
        if re.search(r'\b' + name + r'\b', s, re.I):
            found_removed.append((r, name))
check('no removed product reintroduced', not found_removed, str(found_removed))

# 6 -- only approved prices appear
amounts = set()
for r in ROUTES:
    amounts.update(re.findall(r'\$ ?[0-9,]+(?:\.[0-9]+)?(?:/year|/month)?', read(r)))
check('only approved amounts published', sorted(amounts) == APPROVED_AMOUNTS,
      'found ' + str(sorted(amounts)))

# 7 -- retired tier language, forbidden commercial wording and internal
#      surfaces stay off every published route
stale = []
# `\$0(?![.\d])` so the approved $0.40/minute overage is not caught by the
# zero-price ban.
BANNED = ['Production Suite', 'Join the Beta', 'Coming Soon', 'machine activation',
          'Sales Portal', 'Payroll Pilot', 'SheetBridge',
          r'\bfree\b', r'\btrial\b', r'\$0(?![.\d])', r'\bdemos?\b']
for r in ROUTES:
    s = read(r)
    for pat in BANNED:
        if re.search(pat, s, re.I):
            stale.append((r, pat))
check('no stale tier / free / trial / demo / internal-surface copy', not stale, str(stale))

# 8 -- no private or machine-specific data in published assets
leaks = []
LEAK = [r'/Users/[A-Za-z]', r'\b(?:\d{1,3}\.){3}\d{1,3}\b', r'hooks\.slack\.com',
        r'supabase\.co', r'\.hermes/', r'\bsk-[A-Za-z0-9]{6}', r'/clawd/', r'\bworktrees?/']
for r in ROUTES + ['css/product-dossier.css', 'js/product-dossier.js', 'sitemap.xml']:
    s = read(r)
    for pat in LEAK:
        if re.search(pat, s):
            leaks.append((r, pat))
check('no private paths/addresses/credentials in site assets', not leaks, str(leaks))

# 9 -- shared system is used rather than copied per page
for r in DOSSIERS:
    s = read(r)
    check('shared system used, no page-local framework  ' + r,
          len(re.findall(r'<style', s)) == 0
          and 'css/product-dossier.css' in s and 'js/product-dossier.js' in s)

# 10 -- every dossier route offers a stable return to the Circuit
for r in DOSSIERS:
    check('return-to-Circuit link  ' + r, 'href="software-circuit.html"' in read(r))

# 11 -- circuit index carries the seven currently published products in order
order = re.findall(r"name:\s*'(Cue[A-Za-z]+)'", sc)
expected = ['CuePatch', 'CueRoll', 'CueMaker', 'CueScale',
            'CueSwitcher', 'CueCheck', 'CueNotch']
check('circuit lists the 7 published products in order', order == expected, str(order))
public_copy = '\n'.join(read(r) for r in ROUTES) + '\n' + read('products.html') + '\n' + read('sitemap.xml')
check('CuePack absent from public pages and sitemap',
      'CuePack' not in public_copy and 'cuepack' not in public_copy)
check('business solutions card routes to its page',
      'href="business-solutions.html"' in sc)

# ------------------------------------------------ reacceptance invariants --

# 12 -- the PocketCounsel mark carries no transform or object-position offset
pc_block = re.search(r'\.venture-image img \{[^}]*\}', sc)
check('venture mark CSS declares transform: none',
      bool(pc_block) and 'transform: none' in pc_block.group(0)
      and 'object-position: center' in pc_block.group(0),
      pc_block.group(0) if pc_block else 'rule not found')
check('no PocketCounsel-specific scale/offset rule remains',
      not re.search(r'\.venture-card\.independent[^{]*img[^{]*\{[^}]*(?:transform|object-position)', sc))
check('PocketCounsel uses the optical-nudge derivative',
      'images/products/pocketcounsel-mark.png' in sc
      and not re.search(r'src="images/products/pocketcounsel\.png"', sc))

# 13 -- typography floor: no weight 300, no core nav label under 14px
css = read('css/product-dossier.css')
check('no font-weight 300 in the shared system', 'font-weight: 300' not in css)
check('no font-weight 300 on the circuit page',
      not re.search(r'font-weight:\s*300', sc))
deck = re.search(r'\.deck-label \{[^}]*\}', css)
check('chapter labels are at least 14px and weight 700',
      bool(deck) and '0.875rem' in deck.group(0) and 'font-weight: 700' in deck.group(0),
      deck.group(0) if deck else 'rule not found')
check('chapter controls are at least 46px tall',
      bool(re.search(r'\.deck-chapter \{[^}]*min-height:\s*4[689]px', css))
      or bool(re.search(r'\.deck-chapter \{[^}]*min-height:\s*5\dpx', css)))
check('deck active state is not underline-only',
      '.deck-chapter[aria-current="true"]::before' in css
      and '.deck-chapter[aria-current="true"]::after' in css
      and 'background: var(--accent-soft)' in css)

# 14 -- every dossier uses the chapter deck rather than the retired sub-tabs
for r in DOSSIERS:
    s = read(r)
    check('chapter deck present  ' + r,
          'class="deck"' in s and 'deck-chapter' in s
          and 'dossier-subnav' not in s and 'subnav-links' not in s)

# 15 -- every product/app dossier exposes at least three substantial interface views
for r in PRODUCT_PAGES:
    s = read(r)
    plates = len(re.findall(r'class="plate-stage"', s))
    lenses = len(re.findall(r'class="lens-frame"', s))
    views = plates + lenses
    check('at least three interface views  ' + r, views >= 3,
          '%d views (%d full plates, %d cropped windows)' % (views, plates, lenses))

# 16 -- repeated crops of one source are disclosed honestly
for r in DOSSIERS:
    s = read(r)
    crops = len(re.findall(r'class="lens-frame"', s))
    if crops:
        check('crops disclosed as details of the accepted view  ' + r,
              'Interface detail from the accepted view' in s)

# 17 -- every interface image carries usable alt text. Decorative marks are
#       alt="" aria-hidden and are correctly skipped.
thin_alt = []
for r in DOSSIERS:
    for alt in re.findall(r'<img[^>]*\salt="([^"]*)"[^>]*>', read(r)):
        if alt and '${' not in alt and len(alt) < 40:
            thin_alt.append((r, alt))
check('interface images carry descriptive alt text', not thin_alt, str(thin_alt))

# 18 -- the Business Solutions suite makes Client Hub the visible core and
#       only links apps that have a real dedicated page
bs = read('business-solutions.html')
check('Client Hub presented as the connective core',
      'hub-core' in bs and 'Client Hub' in bs and 'hub-feeds' in bs)
check('Business Solutions presents the approved InvoicePack identity',
      bs.count('src="images/products/invoicepack.png"') >= 2)
check('Client Hub carries no standalone price',
      'not currently offered as a standalone' in bs)
for target in re.findall(r'class="app-enter" href="([^"]+)"', bs):
    check('app selector links a real page  ' + target, os.path.exists(target))
check('Quote Tracker has no dedicated page link',
      not os.path.exists('quote-tracker.html') and 'quote-tracker.html' not in bs)
check('Front Desk is not presented as the suite identity or a prerequisite',
      'It is optional' in bs and 'does not require it' in bs)
# The two linked apps show real accepted captures; the unlinked apps keep
# explanatory diagrams because no public-safe evidence has been accepted.
previews = re.findall(r'<div class="app-preview"[^>]*>\s*<img src="([^"]+)"', bs)
check('suite previews use accepted app captures',
      len(previews) == 2 and all(p in PUBLISHED_SHA for p in previews), str(previews))
check('Client Hub and Quote Tracker keep diagram previews',
      len(re.findall(r'class="app-preview is-diagram"', bs)) == 2)
check('suite previews disclose their synthetic boundary',
      'fictional-data product capture' in bs.lower()
      and 'synthetic local-vault runtime evidence' in bs.lower())

# 19 -- the two Business Solutions app routes hold their claim boundaries
if os.path.exists('front-desk-ai.html'):
    fd = read('front-desk-ai.html')
    check('Front Desk states guided managed setup',
          'guided managed setup' in fd.lower())
    check('Front Desk claims no self-serve signup',
          re.search(r'not a self-serv', fd, re.I) is not None)
    check('Front Desk captions disclose fictional data',
          'Fictional-data product capture' in fd)
    check('Front Desk makes no accepted live-provider claim',
          not re.search(r'\b(twilio|vapi)\b', fd, re.I))
    check('Front Desk publishes the exact approved plan amounts',
          all(a in fd for a in ('$149', '$299', '$249', '$0.40'))
          and '300 minutes' in fd and '800 minutes' in fd)
    check('Front Desk states it never commits the owner',
          'never commits you to work' in fd)
    check('Front Desk uses all five accepted captures',
          all(('src="' + p + '"') in fd for p in PUBLISHED_SHA if p.startswith(FD)))
if os.path.exists('invoicepack.html'):
    ip_page = read('invoicepack.html')
    check('InvoicePack dossier uses the approved product identity',
          'src="images/products/invoicepack.png"' in ip_page and
          'src="images/products/business-solutions.png"' not in ip_page)
    check('InvoicePack states local-first private validation',
          'private validation' in ip_page.lower() and 'local-first' in ip_page.lower())
    check('InvoicePack publishes no price or distribution CTA',
          not re.search(r'\$', ip_page) and not re.search(r'\bdownload\b', ip_page, re.I))
    check('InvoicePack discloses that its views are crops of the runtime evidence',
          'cropped' in ip_page.lower()
          and 'synthetic local-vault runtime evidence' in ip_page.lower())
    check('InvoicePack claims no completed Client Hub handoff',
          'not built and accepted yet' in ip_page)
    check('InvoicePack claims no signed distribution or native Windows build',
          'no signed or notarised build claim' in ip_page
          and 'no native Windows build is claimed' in ip_page)
    check('InvoicePack uses all five accepted captures',
          all(('src="' + p + '"') in ip_page for p in PUBLISHED_SHA if p.startswith(IP)))

# 20 -- sitemap covers exactly the active public routes and excludes CueGrade
smap = read('sitemap.xml')
for r in ROUTES:
    check('sitemap lists  ' + r, '/' + r in smap)
check('sitemap excludes CueGrade', 'cuegrade' not in smap.lower())

print('')
print('ACCEPTANCE: ' + ('FAILURES -> ' + str(fails) if fails else 'ALL CHECKS PASSED'))
sys.exit(1 if fails else 0)
