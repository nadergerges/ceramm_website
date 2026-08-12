/**
 * CERAMM content sections. CERAMM imports ceramic floor tiles for
 * residential and commercial spaces. Collections now open the tile library;
 * the origins section lives in origins-map.tsx.
 */
import { useCeramm } from "./ceramm-store";

const COLLECTIONS = [
  {
    desc: "Large format porcelain stoneware for kitchens, baths, and high traffic rooms.",
    digit: "01",
    image: "/assets/collections/stoneware.jpg",
    name: "Stoneware",
    shape: "cm-tile-tall",
    tileId: "calacatta-slab",
  },
  {
    desc: "Tomettes and cotto floors, warm underfoot and ageless.",
    digit: "02",
    image: "/assets/collections/terracotta.jpg",
    name: "Terracotta",
    shape: "cm-tile-wide",
    tileId: "tomette-hex",
  },
  {
    desc: "Azulejos, Iznik motifs, and hand painted field tiles.",
    digit: "03",
    image: "/assets/collections/patterned.jpg",
    name: "Patterned",
    shape: "cm-tile-square",
    tileId: "azul-manises",
  },
  {
    desc: "Technical slabs graded for shops, lobbies, and terraces.",
    digit: "04",
    image: "/assets/collections/commercial.jpg",
    name: "Commercial",
    shape: "cm-tile-square",
    tileId: "greige-stone",
  },
];

export function Collections() {
  const { selectTileAnd } = useCeramm();
  return (
    <section id="collection" className="cm-section" aria-labelledby="collection-title">
      <p className="cm-eyebrow">Collections</p>
      <h2
        id="collection-title"
        className="cm-display cm-reveal"
        style={{ fontSize: "clamp(2.4rem, 5.5vw, 4.2rem)", marginTop: "1rem" }}
      >
        Four ways to floor with fired earth
      </h2>
      <div className="cm-tiles">
        {COLLECTIONS.map((item) => (
          <article key={item.digit} className="cm-tile">
            <button
              type="button"
              className="cm-tile-link"
              onClick={() => selectTileAnd(item.tileId, "tiles")}
            >
              <div className={`cm-tile-media ${item.shape}`}>
                <img src={item.image} alt="" loading="lazy" />
              </div>
              <div className="cm-tile-row">
                <h3 className="cm-tile-name">{item.name}</h3>
                <span className="cm-tile-digit">
                  <span>{item.digit}</span>
                </span>
              </div>
              <p className="cm-tile-desc">{item.desc}</p>
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}

const SPECS = [
  { icon: "/assets/icons/icon-kiln.png", key: "Partner factories", value: "38" },
  { icon: "/assets/icons/icon-ship.png", key: "Import regions", value: "4" },
  { icon: "/assets/icons/icon-thermometer.png", key: "Firing range", value: "1050 to 1300 C" },
  { icon: "/assets/icons/icon-tile.png", key: "Wear rating", value: "PEI V, heavy traffic" },
  { icon: "/assets/icons/icon-stamp.png", key: "Every batch", value: "Factory marked" },
];

export function Provenance() {
  return (
    <section id="provenance" className="cm-section" aria-labelledby="provenance-title">
      <div className="cm-provenance">
        <span className="cm-numeral" aria-hidden="true">
          1260
        </span>
        <div>
          <p className="cm-eyebrow">Provenance</p>
          <h2
            id="provenance-title"
            className="cm-display cm-reveal"
            style={{ fontSize: "clamp(2.4rem, 5vw, 3.8rem)", marginTop: "1rem" }}
          >
            We buy at the kiln door
          </h2>
          <p className="cm-body-copy" style={{ marginTop: "1.5rem" }}>
            CERAMM buys directly from family factories, not exporters. Every
            batch is documented from quarry to container and arrives graded,
            sorted, and marked with its maker's name.
          </p>
          <dl className="cm-spec">
            {SPECS.map((spec) => (
              <div key={spec.key} className="cm-spec-row">
                <img src={spec.icon} alt="" loading="lazy" />
                <dt className="cm-spec-key">{spec.key}</dt>
                <dd className="cm-spec-value">{spec.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="cm-provenance-photo">
          <img
            className="cm-settle"
            src="/assets/plates/workshop.jpg"
            alt="Freshly pressed clay floor tiles drying on wooden racks in a workshop"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

export function GlazeBand() {
  return (
    <section aria-label="Glaze detail" className="cm-band">
      <img
        className="cm-settle"
        src="/assets/plates/glaze-macro.jpg"
        alt="Macro detail of glossy cobalt blue ceramic glaze with fine crackle"
        loading="lazy"
      />
      <div className="cm-band-copy">
        <p className="cm-band-line">
          Cobalt oxide. The one pigment every coast we import from shares.
        </p>
        <p className="cm-band-caption">Glaze detail · Iznik floor tile</p>
      </div>
    </section>
  );
}

export function Visit() {
  return (
    <section id="visit" className="cm-section" aria-labelledby="visit-title">
      <div className="cm-visit-panel cm-grain">
        <h2
          id="visit-title"
          className="cm-display cm-reveal"
          style={{ fontSize: "clamp(2.6rem, 6vw, 4.6rem)" }}
        >
          Walk on it before you choose it
        </h2>
        <p className="cm-body-copy" style={{ margin: "0 auto" }}>
          The CERAMM showroom lays each collection into full size room sets,
          for homes and commercial projects alike.
        </p>
        <div className="cm-visit-ctas">
          <a className="cm-stamp" href="mailto:hello@ceramm.com?subject=Showroom%20visit">
            Plan a visit
          </a>
          <a
            className="cm-swatch"
            href="mailto:hello@ceramm.com?subject=Trade%20catalog"
            aria-label="Request the catalog by email"
          >
            <span className="cm-swatch-core">
              <span className="cm-swatch-face cm-swatch-front">
                <span className="cm-swatch-hole" aria-hidden="true" />
                Request the catalog
              </span>
              <span className="cm-swatch-face cm-swatch-back">Sent by email as PDF</span>
            </span>
          </a>
        </div>
        <dl className="cm-visit-facts">
          <div>
            <dt>Email</dt>
            <dd>
              <a href="mailto:hello@ceramm.com">hello@ceramm.com</a>
            </dd>
          </div>
          <div>
            <dt>Showroom hours</dt>
            <dd>Tuesday to Saturday, 10:00 to 18:00</dd>
          </div>
          <div>
            <dt>Trade catalog</dt>
            <dd>Sent by email as PDF, with prices and lead times</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
