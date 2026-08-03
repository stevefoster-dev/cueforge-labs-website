#!/usr/bin/env python3
"""Build and verify the padded PocketCounsel mark.

Per Steve's optical correction:
  * new 132x128 canvas filled with exact #172836
  * the untouched 124x124 source pasted at (6,2)
  * CSS object-fit: cover crops 2px from each horizontal edge in the 128px
    circle, producing an exact 2px rendered nudge to the right
  * no resize, resample, sharpen or recolour of the source
  * pixel identity proven by extracting (6,2)-(130,126) from the derivative

Pure standard library: no Pillow, no external tooling. Run with `--verify`
to check an existing derivative without rewriting it.
"""
import hashlib
import struct
import sys
import zlib

SRC = 'images/products/pocketcounsel.png'
OUT = 'images/products/pocketcounsel-mark.png'
FIELD = (0x17, 0x28, 0x36, 0xFF)          # #172836, opaque
PAD_X = 6
PAD_Y = 2
OUT_W = 132
OUT_H = 128

CHANNELS = {0: 1, 2: 3, 3: 1, 4: 2, 6: 4}


def read_chunks(data):
    assert data[:8] == b'\x89PNG\r\n\x1a\n', 'not a PNG'
    pos, chunks = 8, []
    while pos < len(data):
        (length,) = struct.unpack('>I', data[pos:pos + 4])
        kind = data[pos + 4:pos + 8]
        body = data[pos + 8:pos + 8 + length]
        chunks.append((kind, body))
        pos += 12 + length
    return chunks


def paeth(a, b, c):
    p = a + b - c
    pa, pb, pc = abs(p - a), abs(p - b), abs(p - c)
    if pa <= pb and pa <= pc:
        return a
    return b if pb <= pc else c


def decode(path):
    """Return (width, height, rows) where each row is a list of RGBA tuples."""
    chunks = read_chunks(open(path, 'rb').read())
    header = dict(chunks)[b'IHDR']
    w, h, depth, colour, comp, filt, interlace = struct.unpack('>IIBBBBB', header)
    assert depth == 8, 'only 8-bit PNGs are handled; got depth %d' % depth
    assert interlace == 0, 'interlaced PNGs are not handled'
    assert colour in CHANNELS, 'unsupported colour type %d' % colour

    palette = trns = None
    idat = b''
    for kind, body in chunks:
        if kind == b'PLTE':
            palette = [tuple(body[i:i + 3]) for i in range(0, len(body), 3)]
        elif kind == b'tRNS':
            trns = body
        elif kind == b'IDAT':
            idat += body

    nch = CHANNELS[colour]
    raw = zlib.decompress(idat)
    stride = w * nch
    prev = bytearray(stride)
    out, pos = [], 0
    for _ in range(h):
        ftype = raw[pos]
        pos += 1
        line = bytearray(raw[pos:pos + stride])
        pos += stride
        for i in range(stride):
            a = line[i - nch] if i >= nch else 0
            b = prev[i]
            c = prev[i - nch] if i >= nch else 0
            x = line[i]
            if ftype == 1:
                line[i] = (x + a) & 0xFF
            elif ftype == 2:
                line[i] = (x + b) & 0xFF
            elif ftype == 3:
                line[i] = (x + ((a + b) >> 1)) & 0xFF
            elif ftype == 4:
                line[i] = (x + paeth(a, b, c)) & 0xFF
        prev = line

        row = []
        for x in range(w):
            px = line[x * nch:(x + 1) * nch]
            if colour == 0:
                row.append((px[0], px[0], px[0], 255))
            elif colour == 4:
                row.append((px[0], px[0], px[0], px[1]))
            elif colour == 2:
                row.append((px[0], px[1], px[2], 255))
            elif colour == 6:
                row.append((px[0], px[1], px[2], px[3]))
            else:  # palette
                idx = px[0]
                r, g, b = palette[idx]
                alpha = trns[idx] if trns and idx < len(trns) else 255
                row.append((r, g, b, alpha))
        out.append(row)
    return w, h, out, colour


def encode(rows, path):
    h = len(rows)
    w = len(rows[0])
    raw = bytearray()
    for row in rows:
        raw.append(0)                      # filter type 0: None
        for px in row:
            raw += bytes(px)
    body = zlib.compress(bytes(raw), 9)

    def chunk(kind, data):
        return (struct.pack('>I', len(data)) + kind + data
                + struct.pack('>I', zlib.crc32(kind + data) & 0xFFFFFFFF))

    png = (b'\x89PNG\r\n\x1a\n'
           + chunk(b'IHDR', struct.pack('>IIBBBBB', w, h, 8, 6, 0, 0, 0))
           + chunk(b'IDAT', body)
           + chunk(b'IEND', b''))
    open(path, 'wb').write(png)
    return png


def sha(path):
    return hashlib.sha256(open(path, 'rb').read()).hexdigest()


def main():
    verify_only = '--verify' in sys.argv

    sw, sh, src, scolour = decode(SRC)
    print('source      %s  %dx%d  colour-type %d  sha256 %s'
          % (SRC, sw, sh, scolour, sha(SRC)))
    assert (sw, sh) == (124, 124), 'source is not 124x124'

    if not verify_only:
        canvas = [[FIELD] * OUT_W for _ in range(OUT_H)]
        for y in range(sh):
            for x in range(sw):
                canvas[y + PAD_Y][x + PAD_X] = src[y][x]
        encode(canvas, OUT)

    dw, dh, der, dcolour = decode(OUT)
    print('derivative  %s  %dx%d  colour-type %d  sha256 %s'
          % (OUT, dw, dh, dcolour, sha(OUT)))

    ok = True

    if (dw, dh) != (OUT_W, OUT_H):
        print('FAIL  derivative is %dx%d, expected %dx%d' % (dw, dh, OUT_W, OUT_H))
        ok = False

    # 1 -- the extracted centre must equal the source pixel for pixel.
    diffs = 0
    first = None
    for y in range(sh):
        for x in range(sw):
            if der[y + PAD_Y][x + PAD_X] != src[y][x]:
                diffs += 1
                if first is None:
                    first = (x, y, src[y][x], der[y + PAD_Y][x + PAD_X])
    if diffs:
        print('FAIL  %d differing pixels in the extracted 124x124 centre; first %s'
              % (diffs, first))
        ok = False
    else:
        print('PASS  extracted (6,2)-(130,126) is pixel-identical to the 124x124 source')

    # The same claim as a hash over the extracted region's raw RGBA bytes.
    def region_hash(rows, ox, oy):
        h = hashlib.sha256()
        for y in range(124):
            for x in range(124):
                h.update(bytes(rows[y + oy][x + ox]))
        return h.hexdigest()

    src_hash = region_hash(src, 0, 0)
    der_hash = region_hash(der, PAD_X, PAD_Y)
    print('source RGBA sha256      %s' % src_hash)
    print('extracted RGBA sha256   %s' % der_hash)
    if src_hash != der_hash:
        print('FAIL  extracted-region RGBA hash does not match the source')
        ok = False

    # 2 -- the blue field must reach all four edges of the circle bounding box.
    edges = []
    edges += [der[0][x] for x in range(OUT_W)]
    edges += [der[OUT_H - 1][x] for x in range(OUT_W)]
    edges += [der[y][0] for y in range(OUT_H)]
    edges += [der[y][OUT_W - 1] for y in range(OUT_H)]
    bad = [p for p in edges if p != FIELD]
    if bad:
        print('FAIL  %d edge pixels are not exactly #172836; e.g. %s' % (len(bad), bad[0]))
        ok = False
    else:
        print('PASS  all four edges are exactly #172836 (23, 40, 54, 255)')

    # 3 -- the whole asymmetric field outside the untouched source.
    ring_bad = 0
    for y in range(OUT_H):
        for x in range(OUT_W):
            inside = PAD_X <= x < PAD_X + sw and PAD_Y <= y < PAD_Y + sh
            if not inside and der[y][x] != FIELD:
                ring_bad += 1
    if ring_bad:
        print('FAIL  %d pixels in the optical padding field are not #172836' % ring_bad)
        ok = False
    else:
        print('PASS  the entire optical padding field is exactly #172836')

    print('')
    print('POCKETCOUNSEL: ' + ('OK' if ok else 'FAILED'))
    return 0 if ok else 1


if __name__ == '__main__':
    sys.exit(main())
