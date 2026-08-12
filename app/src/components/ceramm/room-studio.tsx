import { useState, type CSSProperties } from "react";

import { useCeramm } from "./ceramm-store";
import { ROOMS, TILES } from "./tiles-data";

const SIZES = [
  { factor: 0.7, id: "s", name: "Small" },
  { factor: 1, id: "m", name: "Standard" },
  { factor: 1.5, id: "l", name: "Large" },
];

const GROUTS = [
  { id: "bone", name: "Bone grout" },
  { id: "umber", name: "Umber grout" },
];

type SceneVars = CSSProperties & Record<"--horizon" | "--tilt" | "--tile-size", string>;

/**
 * Room studio: pick a room tab, and the chosen tile from the library is
 * laid as a live perspective floor beneath the room. The room photographs
 * were generated with chroma-key floors and cut out, so the floor plane
 * underneath is real CSS: retile it, resize it, regrout it.
 */
export function RoomStudio() {
  const { tile, roomId, setRoomId, selectTile } = useCeramm();
  const [sizeId, setSizeId] = useState("m");
  const [groutId, setGroutId] = useState("bone");

  const room = ROOMS.find((r) => r.id === roomId) ?? ROOMS[0];
  const size = SIZES.find((s) => s.id === sizeId) ?? SIZES[1];
  const tilePx = Math.round(tile.baseSize * size.factor);

  const sceneVars: SceneVars = {
    "--horizon": `${room.horizon}%`,
    "--tile-size": `${tilePx}px`,
    "--tilt": `${room.tilt}deg`,
  };

  return (
    <section id="studio" className="cm-section" aria-labelledby="studio-title">
      <h2
        id="studio-title"
        className="cm-display cm-reveal"
        style={{ fontSize: "clamp(2.4rem, 5.5vw, 4.2rem)" }}
      >
        See it on your floor
      </h2>
      <p className="cm-body-copy" style={{ marginTop: "1rem" }}>
        {tile.name} is on the floor below. Change the room, the tile, the
        format, or the grout; the floor is laid live.
      </p>

      <div className="cm-studio">
        <div className="cm-room-tabs" role="tablist" aria-label="Room">
          {ROOMS.map((r) => (
            <button
              key={r.id}
              type="button"
              role="tab"
              id={`room-tab-${r.id}`}
              aria-selected={r.id === roomId}
              aria-controls="studio-scene"
              tabIndex={r.id === roomId ? 0 : -1}
              className={`cm-room-tab${r.id === roomId ? " is-active" : ""}`}
              onClick={() => setRoomId(r.id)}
              onKeyDown={(event) => {
                if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
                event.preventDefault();
                const index = ROOMS.findIndex((x) => x.id === roomId);
                const next =
                  ROOMS[(index + (event.key === "ArrowRight" ? 1 : ROOMS.length - 1)) % ROOMS.length];
                setRoomId(next.id);
                document.getElementById(`room-tab-${next.id}`)?.focus();
              }}
            >
              {r.name}
            </button>
          ))}
        </div>

        <div
          id="studio-scene"
          role="tabpanel"
          aria-labelledby={`room-tab-${room.id}`}
          className="cm-scene"
          style={sceneVars}
        >
          <div
            className={`cm-scene-floor${tile.selfTiled ? " is-self-tiled" : ""} grout-${groutId}`}
            style={{ backgroundImage: `url(${tile.texture})` }}
          />
          <div className="cm-scene-light" aria-hidden="true" />
          <div className="cm-scene-haze" aria-hidden="true" />
          <img className="cm-scene-room" src={room.overlay} alt={`${room.name} with ${tile.name} laid on the floor`} />
        </div>

        <div className="cm-studio-controls">
          <fieldset className="cm-control-group">
            <legend className="cm-bento-cell-label">Tile</legend>
            <div className="cm-chip-row">
              {TILES.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  title={t.name}
                  aria-label={t.name}
                  aria-pressed={t.id === tile.id}
                  className={`cm-chip${t.id === tile.id ? " is-active" : ""}`}
                  onClick={() => selectTile(t.id)}
                >
                  <img src={t.texture} alt="" loading="lazy" />
                </button>
              ))}
            </div>
          </fieldset>

          <fieldset className="cm-control-group">
            <legend className="cm-bento-cell-label">Format</legend>
            <div className="cm-seg" role="group">
              {SIZES.map((s) => (
                <button
                  key={s.id}
                  type="button"
                  aria-pressed={s.id === sizeId}
                  className={`cm-seg-btn${s.id === sizeId ? " is-active" : ""}`}
                  onClick={() => setSizeId(s.id)}
                >
                  {s.name}
                </button>
              ))}
            </div>
          </fieldset>

          <fieldset className="cm-control-group">
            <legend className="cm-bento-cell-label">Grout</legend>
            <div className="cm-seg" role="group">
              {GROUTS.map((g) => (
                <button
                  key={g.id}
                  type="button"
                  aria-pressed={g.id === groutId}
                  className={`cm-seg-btn${g.id === groutId ? " is-active" : ""}`}
                  onClick={() => setGroutId(g.id)}
                >
                  {g.name}
                </button>
              ))}
            </div>
          </fieldset>

          <p className="cm-mono-note cm-studio-note">
            {tile.name} · {tile.format} · {tile.finish} · shown in the {room.name.toLowerCase()}
          </p>
        </div>
      </div>
    </section>
  );
}
