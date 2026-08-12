import { useCeramm } from "./ceramm-store";
import { REGIONS, TILES } from "./tiles-data";

/**
 * Tile library: a swatch rail of every tile CERAMM imports. Choosing a
 * swatch fills the bento box with that tile's texture, body type, specs,
 * and recommended rooms, and hands off to the room studio.
 */
export function TileExplorer() {
  const { tile, selectTile, selectTileAnd } = useCeramm();

  return (
    <section id="tiles" className="cm-section" aria-labelledby="tiles-title">
      <p className="cm-eyebrow">Tile library</p>
      <h2
        id="tiles-title"
        className="cm-display cm-reveal"
        style={{ fontSize: "clamp(2.4rem, 5.5vw, 4.2rem)", marginTop: "1rem" }}
      >
        Twelve floors, four coasts
      </h2>
      <p className="cm-body-copy" style={{ marginTop: "1rem" }}>
        Every tile below is in the current import program. Choose one to read
        its body, glaze, and where it belongs.
      </p>

      <div className="cm-swatch-rail" role="group" aria-label="Choose a tile">
        {TILES.map((t) => (
          <button
            key={t.id}
            aria-pressed={t.id === tile.id}
            className={`cm-swatch-btn${t.id === tile.id ? " is-active" : ""}`}
            onClick={() => selectTile(t.id)}
            type="button"
          >
            <img src={t.texture} alt="" loading="lazy" />
            <span className="cm-swatch-name">{t.name}</span>
          </button>
        ))}
      </div>

      <div className="cm-bento" aria-live="polite">
        <figure className="cm-bento-texture">
          <img src={tile.texture} alt={`${tile.name} tile surface, ${tile.finish.toLowerCase()} finish`} loading="lazy" />
          <figcaption className="cm-mono-note">{tile.format}</figcaption>
        </figure>

        <div className="cm-bento-title">
          <h3 className="cm-display" style={{ fontSize: "clamp(1.6rem, 2.6vw, 2.4rem)" }}>
            {tile.name}
          </h3>
          <p className="cm-bento-type">{tile.type}</p>
          <p className="cm-body-copy" style={{ marginTop: "0.5rem" }}>
            {tile.blurb}
          </p>
        </div>

        <dl className="cm-bento-specs">
          <div>
            <dt>Origin</dt>
            <dd>
              {tile.originPlace}, {REGIONS.find((r) => r.id === tile.origin)?.name}
            </dd>
          </div>
          <div>
            <dt>Finish</dt>
            <dd>{tile.finish}</dd>
          </div>
          <div>
            <dt>Format</dt>
            <dd>{tile.format}</dd>
          </div>
          <div>
            <dt>Slip rating</dt>
            <dd>{tile.slip}</dd>
          </div>
        </dl>

        <div className="cm-bento-rooms">
          <p className="cm-bento-cell-label">Belongs in</p>
          <ul role="list">
            {tile.rooms.map((room) => (
              <li key={room}>{room}</li>
            ))}
          </ul>
        </div>

        <div className="cm-bento-cta">
          <p className="cm-bento-cell-label">On your floor</p>
          <button
            type="button"
            className="cm-lay-btn"
            onClick={() => selectTileAnd(tile.id, "studio")}
          >
            <span>Lay it in a room</span>
            <span className="cm-lay-btn-tile" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
