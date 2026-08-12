---
target: CERAMM live site (app/src/routes/index.tsx)
total_score: 17
max_score: 36
na_heuristics: 7
p0_count: 3
p1_count: 1
timestamp: 2026-08-12T22-13-19Z
slug: app-src-routes-index-tsx
---
# CERAMM critique (pre-fix snapshot)

Method: dual-agent (A: design review sub-agent · B: detector sub-agent)

| # | Heuristic | Score | Key issue |
|---|-----------|-------|-----------|
| 1 | Visibility of status | 1 | No scroll progress, no active-nav state |
| 2 | Match to real world | 3 | PEI/firing specs unglossed |
| 3 | User control and freedom | 1 | Long scrub with no skip; double scroll-smoothing |
| 4 | Consistency and standards | 2 | Hover states on non-interactive elements; no mobile nav |
| 5 | Error prevention | 2 | mailto-only contact |
| 6 | Recognition over recall | 2 | Nav vanishes under 768px |
| 7 | Flexibility and efficiency | n/a | marketing surface |
| 8 | Aesthetic and minimalist | 4 | genuinely excellent |
| 9 | Error recovery | 1 | mailto dead end, no copyable contact |
| 10 | Help and documentation | 1 | No lead-time/sample path |
| Total | | 17/36 | Poor-to-acceptable |

Detector: 0 findings on components; 2 false positives (Inter Tight @font-face
matched the generic-Inter rule). Browser overlay unavailable (blocked network).

P0: no mobile nav; "Plan a visit" unactionable; offer never stated in viewport 1.
P1: primary CTA had no focus indication.
P2: false affordances on collection tiles and origin rows; alt duplication.

All P0/P1/P2 items addressed in the v2 build (mobile sheet + thumb bar, contact
facts, offer line in chapter one, focus rings, tiles now open the library, map
replaces hover-only rows).
