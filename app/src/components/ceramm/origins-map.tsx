import { useState } from "react";

import { useCeramm } from "./ceramm-store";
import { REGIONS, TILES, type RegionId } from "./tiles-data";

/**
 * Origins chart: a deliberately abstracted Mediterranean, drawn like a
 * shipping chart. Ports are real buttons layered over the SVG; choosing one
 * highlights its landmass, draws its route, and fills the region panel with
 * places, crafts, and the tiles CERAMM imports from that coast.
 */
export function OriginsMap() {
  const [regionId, setRegionId] = useState<RegionId>("italy");
  const { selectTileAnd } = useCeramm();
  const region = REGIONS.find((r) => r.id === regionId) ?? REGIONS[0];
  const regionTiles = TILES.filter((t) => t.origin === regionId);

  return (
    <section id="origins" className="cm-section" aria-labelledby="origins-title">
      <h2
        id="origins-title"
        className="cm-display cm-reveal"
        style={{ fontSize: "clamp(2.4rem, 5.5vw, 4.2rem)" }}
      >
        Sourced from four coasts
      </h2>
      <p className="cm-body-copy" style={{ marginTop: "1rem" }}>
        Pick a port of origin. Every route ends at the same dock.
      </p>

      <div className="cm-origins">
        <div className="cm-chart" data-region={regionId}>
          <svg viewBox="0 0 1000 560" aria-hidden="true" focusable="false" preserveAspectRatio="xMidYMid meet">
            <defs>
              <pattern id="cm-sea-dots" width="26" height="26" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1.1" className="cm-sea-dot" />
              </pattern>
            </defs>
            <rect x="0" y="0" width="1000" height="560" className="cm-sea" />
            <rect x="0" y="0" width="1000" height="560" fill="url(#cm-sea-dots)" />

            {/* Iberia */}
            <path
              className={`cm-land${regionId === "spain" ? " is-active" : ""}`}
              d="M40 250 L120 218 L205 226 L238 268 L228 316 L172 352 L92 358 L38 312 Z"
            />
            {/* Southern France */}
            <path
              className={`cm-land${regionId === "france" ? " is-active" : ""}`}
              d="M212 118 L342 104 L376 158 L340 206 L286 224 L232 212 L206 168 Z"
            />
            {/* Italy + Sicily */}
            <path
              className={`cm-land${regionId === "italy" ? " is-active" : ""}`}
              d="M408 148 L462 158 L484 196 L522 240 L562 300 L586 344 L560 362 L520 330 L478 272 L440 224 L410 186 Z"
            />
            <path
              className={`cm-land${regionId === "italy" ? " is-active" : ""}`}
              d="M508 386 L556 378 L544 416 L500 414 Z"
            />
            {/* Anatolia + Levant */}
            <path
              className={`cm-land${regionId === "middle-east" ? " is-active" : ""}`}
              d="M642 172 L872 160 L918 214 L900 268 L846 288 L862 356 L880 420 L836 428 L818 340 L790 292 L716 274 L652 236 Z"
            />
            {/* North Africa rim */}
            <path className="cm-land cm-land-muted" d="M60 442 L940 452 L940 560 L60 560 Z" />

            {/* Routes: each port to the CERAMM dock */}
            <path className={`cm-route${regionId === "spain" ? " is-active" : ""}`} d="M225 288 Q 330 420 470 462" />
            <path className={`cm-route${regionId === "france" ? " is-active" : ""}`} d="M300 196 Q 360 360 470 462" />
            <path className={`cm-route${regionId === "italy" ? " is-active" : ""}`} d="M470 214 Q 450 340 472 458" />
            <path className={`cm-route${regionId === "middle-east" ? " is-active" : ""}`} d="M772 244 Q 640 400 478 462" />

            {/* The dock */}
            <g className="cm-dock" transform="translate(472, 462)">
              <circle r="7" className="cm-dock-core" />
              <circle r="14" className="cm-dock-ring" />
            </g>
          </svg>

          {REGIONS.map((r) => (
            <button
              key={r.id}
              type="button"
              className={`cm-port${r.id === regionId ? " is-active" : ""}`}
              style={{ left: `${r.x}%`, top: `${r.y}%` }}
              aria-pressed={r.id === regionId}
              onClick={() => setRegionId(r.id)}
            >
              <span className="cm-port-dot" aria-hidden="true" />
              <span className="cm-port-name">{r.name}</span>
            </button>
          ))}
          <p className="cm-chart-caption cm-mono-note">Chart is schematic · routes shown to the CERAMM dock</p>
        </div>

        <aside className="cm-region-panel" aria-live="polite">
          <p className="cm-region-kicker">{region.places}</p>
          <h3 className="cm-display" style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)" }}>
            {region.name}
          </h3>
          <p className="cm-region-craft">
            {region.craft}. {region.clay}.
          </p>
          <div className="cm-region-photo">
            <img src={region.image} alt={`${region.craft} from ${region.name}`} loading="lazy" />
          </div>
          <p className="cm-bento-cell-label">Imported from this coast</p>
          <ul className="cm-region-tiles" role="list">
            {regionTiles.map((t) => (
              <li key={t.id}>
                <button type="button" className="cm-region-tile" onClick={() => selectTileAnd(t.id, "tiles")}>
                  <img src={t.texture} alt="" loading="lazy" />
                  <span>{t.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}
