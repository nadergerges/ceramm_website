# CERAMM generated asset manifest

Every visual on the site was generated with Higgsfield models during the build.
Binary files live in the deployed site repo under `app/public/`; this manifest
records what each asset is and the model that produced it.

| Asset (deployed path) | Content | Model |
|---|---|---|
| `assets/world/scene-01..04.mp4` (+ mobile + posters) | The kiln-journey film: one continuous 15s take of a clay slab pressed into a tile, fired, and glazed in cobalt, sliced into four chapter segments | MiniMax H3, 2K, storyboard-referenced |
| `assets/collections/stoneware.jpg` | Large-format porcelain stoneware stack | Nano Banana Pro |
| `assets/collections/terracotta.jpg` | Hexagonal tomette floor in raking light | Nano Banana Pro |
| `assets/collections/patterned.jpg` | Cobalt azulejo/Iznik patterned floor, overhead | Nano Banana Pro |
| `assets/collections/commercial.jpg` | Pale large-format slab lobby floor | Nano Banana Pro |
| `assets/origins/italy.jpg` | Sassuolo stoneware samples | Nano Banana Pro |
| `assets/origins/spain.jpg` | Castellón azulejos | Nano Banana Pro |
| `assets/origins/france.jpg` | Salernes tomette stack | Nano Banana Pro |
| `assets/origins/middle-east.jpg` | Iznik fritware tiles | Nano Banana Pro |
| `assets/plates/glaze-macro.jpg` | Cobalt glaze crackle macro (S5 band + swatch CTA) | Nano Banana Pro |
| `assets/plates/kaolin-grain.jpg` | Kaolin plaster grain (visit panel ground) | Nano Banana Pro |
| `assets/plates/workshop.jpg` | Tile workshop drying racks | Nano Banana Pro |
| `assets/icons/icon-{kiln,ship,thermometer,tile,stamp}.png` | Custom 2px-stroke icon set, sliced from one generated sheet | Nano Banana Pro |
| `assets/brand/ceramm-mark.png` | Maker's-stamp brand mark (tile in double circle, cobalt) | Nano Banana Pro |
| `favicon*, apple-touch-icon, icon-192/512(+maskable)` | Head kit derived from the brand mark | derived |
| OG image + marketplace cover (CDN URLs in `app/src/app-meta.json`) | Launch cover: tile still life + CERAMM type lockup | GPT Image 2 + compose pipeline |

| `assets/tiles/*.jpg` (12) | Tile library textures: calacatta slab, greige stone, cotto, azulejo, checker, luster, tomette hex, provence blanc, Iznik, Jerusalem cobalt, Damascus star, Hebron celadon | Nano Banana Pro |
| `assets/rooms/{kitchen,living,bath,terrace}.webp` | Room studio scenes generated with chroma-key floors, keyed to alpha so the CSS tile floor shows through | Nano Banana Pro + Pillow key |

Design boards (working artifacts, not shipped): six 16:9 reference boards and
one film storyboard, Nano Banana Pro, kept in the deployed repo's `refs/`
history only.
