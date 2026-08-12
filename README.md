# CERAMM — marketing website

**Live site:** https://ceramm.higgsfield.app

CERAMM imports ceramic floor tiles for residential and commercial spaces from
Italy, Spain, France, and the Middle East. This branch carries the source of
the CERAMM marketing site: an animated "kiln journey" website where the
visitor's scroll plays a generated film of a floor tile being pressed, fired,
and glazed, followed by the tile collections, origins, provenance, and
showroom sections.

## Where it runs

The site is built and deployed on the Higgsfield website platform (React 19 +
TanStack Start, server-rendered on a Cloudflare Worker). The deployable repo
there is scaffolded from Higgsfield's `scroll-scrub` template; the files in
this branch are the CERAMM-specific source authored on top of that template.

## Layout (mirrors the deployed app/ tree)

| Path | Purpose |
|---|---|
| `app/design-brief.md` | The locked design brief: concept spine, palette, type, journey chapters, section plan, CTA inventory. |
| `app/src/scroll-scrub-scenes.ts` | Brand tokens + the four journey chapters (Earth, Form, Fire, Glaze) wired to the encoded film segments. |
| `app/src/routes/index.tsx` | The page: nav, scroll-scrub journey, content sections, footer, head kit. |
| `app/src/components/ceramm/` | Nav/footer, the five content sections, and the Lenis + GSAP motion rig. |
| `app/src/ceramm-append.css` | The CERAMM token + component layer. In the deployed repo this content is appended to `app/src/styles.css` after the template imports. |
| `app/public/site.webmanifest` | PWA/head kit manifest. |
| `app/src/app-meta.json` | OG title/description/cover wiring read by the platform at build time. |

Binary assets (the generated film segments, posters, photography, icon set,
brand mark, favicons, and the launch cover) are generated with Higgsfield
models and live in the deployed repo's `app/public/` tree; their generation
sources are listed in `ASSETS.md`.

## Brand summary

- Concept spine: the kiln journey, from raw clay to cobalt glaze.
- Palette: porcelain `#F5F4F0`, kaolin `#ECE9E3`, fired-umber ink `#201D1A`,
  hairline `#D9D5CC`, one accent: cobalt oxide `#24409A`.
- Type: Cabinet Grotesk (display) + Inter Tight (body) + JetBrains Mono (data).
