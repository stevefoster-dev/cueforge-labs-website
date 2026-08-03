#!/usr/bin/env python3
"""Report dimensions, byte size and SHA-256 for every published website image.

Local verification helper for the dossier candidate. Reads only; writes nothing.
"""
import hashlib
import os
import struct
import sys


def dims(path):
    with open(path, 'rb') as fh:
        d = fh.read()
    if d[:8] == b'\x89PNG\r\n\x1a\n':
        return struct.unpack('>II', d[16:24])
    if d[:2] == b'\xff\xd8':
        i = 2
        while i < len(d) - 1:
            if d[i] != 0xFF:
                i += 1
                continue
            m = d[i + 1]
            if m in (0xC0, 0xC1, 0xC2, 0xC3, 0xC5, 0xC6, 0xC7, 0xC9, 0xCA, 0xCB):
                h = struct.unpack('>H', d[i + 5:i + 7])[0]
                w = struct.unpack('>H', d[i + 7:i + 9])[0]
                return (w, h)
            if m in (0xD8, 0xD9) or 0xD0 <= m <= 0xD7:
                i += 2
                continue
            i += 2 + struct.unpack('>H', d[i + 2:i + 4])[0]
        return None
    if d[:4] == b'RIFF' and d[8:12] == b'WEBP':
        c = d[12:16]
        if c == b'VP8X':
            return (int.from_bytes(d[24:27], 'little') + 1,
                    int.from_bytes(d[27:30], 'little') + 1)
        if c == b'VP8 ':
            return (struct.unpack('<H', d[26:28])[0] & 0x3FFF,
                    struct.unpack('<H', d[28:30])[0] & 0x3FFF)
        if c == b'VP8L':
            b = int.from_bytes(d[21:25], 'little')
            return ((b & 0x3FFF) + 1, ((b >> 14) & 0x3FFF) + 1)
    return None


roots = sys.argv[1:] or ['images']
for root in roots:
    if os.path.isfile(root):
        files = [root]
    else:
        files = []
        for dp, _dn, fn in os.walk(root):
            files += [os.path.join(dp, f) for f in sorted(fn)]
    for p in sorted(files):
        if not p.lower().endswith(('.png', '.jpg', '.jpeg', '.webp')):
            continue
        raw = open(p, 'rb').read()
        wh = dims(p)
        print('%-64s %-12s %8d  %s' % (
            p, '%sx%s' % wh if wh else '?', len(raw),
            hashlib.sha256(raw).hexdigest()))
