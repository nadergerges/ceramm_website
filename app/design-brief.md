# CERAMM design brief

Product: CERAMM imports ceramic floor tiles (residential and commercial
flooring) from Italy, Spain, France, and the Middle East.

Design read: For homeowners, interior designers, architects, and contractors
choosing imported tile floors; the register is the quiet confidence of a
gallery warmed by fired earth.

Concept spine: THE KILN JOURNEY. The site performs the geological life of a
floor tile: scrolling excavates clay, presses it, fires it, and glazes it,
then opens into the tile collections and the four coasts they come from. Spine
family: journey/waypoints (the waypoints are Italy, Spain, France, the Middle
East).

Delivery tier: cinema (Lenis + GSAP micro-motion around the scroll-scrub journey).

## Locked palette
- Ground: porcelain `#F5F4F0`
- Ground tint: kaolin `#ECEAE3`
- Ink: fired umber `#201D1A` (warm off-black)
- Muted ink: `#6E675E`
- Hairline: `#D9D5CC`
- Accent (exactly one): cobalt oxide `#24409A`
Defense: porcelain plus ink plus one cobalt accent is the material truth of the
product: kaolin body, cobalt oxide glaze, the one pigment shared by Iznik,
Manises, and Faenza ware. Terracotta appears only inside photography, never as
a UI token. This avoids the banned beige plus brass artisan default and the
dark plus ember kiln cliche.

## Locked type
Cabinet Grotesk (display, weights 500/700/800) + Inter Tight (body 400/500) +
JetBrains Mono (provenance data strips only). Sans pairing from the recipe
tables; no serif. Self-hosted woff2 in /public/fonts.

Corner language: all sharp, page wide.

Animation mode: animated-website
(default applied: user unreachable at intake, noted in chat)

Journey shape: single-shot
One continuous ~15s studio film, generated in one call, encoded into four
sequential segment clips so each chapter owns its copy block. Seams are exact
consecutive frames of the same take.

Journey (4 chapters over one film):
1. EARTH (0.00 to 0.28). Title: "Every floor begins as earth". Body: clay of
   four coasts. Tags: Kaolin, Terracotta, Stoneware.
2. FORM (0.28 to 0.56). Title: "Pressed, cut, and drawn by hand".
3. FIRE (0.56 to 0.78). Title: "Fired until earth turns to stone". Tag: 1260 C.
4. GLAZE (0.78 to 1.00). Title: "Finished in cobalt, tin, and ash".
   Actions: "View the collection" anchor CTA.
No chapter kickers (eyebrow budget stays at 2 page wide).

World grammar: macro studio product film, seamless porcelain white cove
backdrop, soft north daylight from upper left, one centered square clay tile,
slow continuous transformation (raw clay slab, pressed tile, kiln glow, cobalt
glaze flowing across the face), locked exposure, no cuts, no on-screen text.

Camera architecture: single continuous push-in with a slight orbit; start state
(raw clay slab) differs from end state (finished glazed floor tile).

Mobile framing: subject centered inside the center-safe third; lighter 720p
mobile encodes.

Delivery budget: desktop clips <= 32 MiB total, mobile clips <= 16 MiB total.

How the journey enacts the spine: the visitor literally fires the vessel by
scrolling; the finished piece hands off to the collection below.

## Section plan (no consecutive family repeats; 6 content sections, 5 families)
1. Journey: scroll-scrub film, 4 chapters (family: cinematic scrub).
2. Collections: asymmetric off-grid editorial grid, 4 tile lines with index
   digits: Stoneware, Terracotta, Patterned, Commercial (family: editorial
   grid). Eyebrow: "Collections".
3. Origins: full-width hairline-divided rows, one per coast, hover image crop
   (family: row list).
4. Provenance: asymmetric split, mono spec table with generated icons, tall
   workshop photo, oversized cobalt numeral 1260 as structure (family: split).
   Eyebrow: "Provenance".
5. Glaze macro: full-bleed image band, one line of copy (family: image band).
   Second-read moment: macro crop carrying the accent color.
6. Visit and trade: kaolin banner panel with two bespoke CTAs plus footer
   (family: banner).
Eyebrow budget: ceil(6/3) = 2. Used: Collections, Provenance.

## Combinatorial pick (boards)
- Theme paradigm: Pristine Light (porcelain paper, warm ink)
- Background character: solid with soft ambient depth, tactile material macros
- Typography character: expressive display grotesk over rational body
- Hero architecture: massive image-first (the film), restrained text
- Section system: gallery-led cadence with Swiss discipline
- Signature components: off-grid editorial grid, vertical rhythm lines,
  layered image crop frames, oversized numeral as structure
- Narrative spine: journey/waypoints
- Second-read moment: macro crop carrying the brand color (section 5)
- Composition anchors: chapters alternate left/right over film; S2 top-left
  lead; S3 full-width list; S4 asymmetric split; S5 image-as-canvas bottom
  left; S6 centered statement (the only centered section).

## Asset plan
- Film: single-shot 15s, MiniMax H3 2K, storyboard as image reference; encoded
  to 4 desktop + 4 mobile segments with exact first-frame posters.
- Storyboard: one 16:9 six-keyframe grid (design source for the film).
- Boards: five section boards (S2 to S6).
- Section plates: kaolin paper grain; clay strata macro band.
- Content imagery: 4 collection images (stoneware, terracotta tomettes,
  patterned, commercial slabs), 4 origin images (Sassuolo stoneware,
  Castellón azulejos, Salernes tomettes, Iznik fritware), 1 cobalt glaze
  macro, 1 tile workshop vertical.
- Icon set: one sheet, 8 glyphs, 2px ink stroke (strata, wheel, kiln, glaze
  drop, ship, stamp, tile, thermometer), sliced with background removed.
- Brand mark: potter's stamp (amphora in a thin double circle) in cobalt;
  favicon and head kit derived from it. Wordmark set in HTML type.
- OG and launch cover per the cover pipeline; head kit complete.

## CTA inventory (bespoke chrome, one label per intent)
- "View the collection" (journey ch. 4): text link whose arrow travels along a
  drawn glaze meander path on hover (offset-path).
- Collection tiles: whole-tile press, image grade shift, index digit slides.
- Origin rows: whole-row hover, kaolin tint flood plus image crop reveal.
- "Plan a visit" (S6 primary): maker's stamp; :active physically imprints
  (scale press plus texture shift).
- "Request the catalog" (S6 secondary): glaze swatch chip that flips like a
  material sample.
- Nav links: moving hairline underline.
Rationed trio (drawing underline, hover flood-fill, framed block): none used.

## Anti-convergence ledger
First build in this chat. Palette family: porcelain plus cobalt (none prior).
Type: Cabinet Grotesk (none prior). Hero: scroll-scrub journey. Garments and
corner language as above.

## Copy rules honored
No em or en dashes anywhere visible. One label per CTA intent. Invented
product facts are plausible catalog data (firing range, lead time, workshop
count); no performance or social-proof stats. Contact email and hours are
provisional until the owner supplies real details.
