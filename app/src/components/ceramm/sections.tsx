/**
 * CERAMM content sections after the kiln journey.
 * CERAMM imports ceramic floor tiles for residential and commercial spaces.
 * Layout families and copy are locked in app/design-brief.md; the reference
 * boards in refs/ are the visual source of truth.
 */

const COLLECTIONS = [
  {
    desc: "Large format porcelain stoneware for kitchens, baths, and high traffic rooms.",
    digit: "01",
    image: "/assets/collections/stoneware.jpg",
    name: "Stoneware",
    shape: "cm-tile-tall",
  },
  {
    desc: "Tomettes and cotto floors, warm underfoot and ageless.",
    digit: "02",
    image: "/assets/collections/terracotta.jpg",
    name: "Terracotta",
    shape: "cm-tile-wide",
  },
  {
    desc: "Azulejos, Iznik motifs, and hand painted field tiles.",
    digit: "03",
    image: "/assets/collections/patterned.jpg",
    name: "Patterned",
    shape: "cm-tile-square",
  },
  {
    desc: "Technical slabs graded for shops, lobbies, and terraces.",
    digit: "04",
    image: "/assets/collections/commercial.jpg",
    name: "Commercial",
    shape: "cm-tile-square",
  },
];

export function Collections() {
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
            <div className={`cm-tile-media ${item.shape}`}>
              <img src={item.image} alt={`${item.name}: ${item.desc}`} loading="lazy" />
            </div>
            <div className="cm-tile-row">
              <h3 className="cm-tile-name">{item.name}</h3>
              <span className="cm-tile-digit">
                <span>{item.digit}</span>
              </span>
            </div>
            <p className="cm-tile-desc">{item.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

const ORIGINS = [
  {
    clay: "Red and white body stoneware",
    craft: "Porcelain stoneware and cotto",
    image: "/assets/origins/italy.jpg",
    index: "I",
    name: "Italy",
    places: "Sassuolo · Impruneta · Faenza",
  },
  {
    clay: "Tin glazed earthenware",
    craft: "Azulejos and porcelain tile",
    image: "/assets/origins/spain.jpg",
    index: "II",
    name: "Spain",
    places: "Castellón · Onda · Manises",
  },
  {
    clay: "Red terracotta",
    craft: "Tomettes and terre cuite",
    image: "/assets/origins/france.jpg",
    index: "III",
    name: "France",
    places: "Salernes · Provence",
  },
  {
    clay: "Quartz fritware",
    craft: "Fritware and cobalt tile",
    image: "/assets/origins/middle-east.jpg",
    index: "IV",
    name: "Middle East",
    places: "Iznik · Jerusalem",
  },
];

export function Origins() {
  return (
    <section id="origins" className="cm-section" aria-labelledby="origins-title">
      <h2
        id="origins-title"
        className="cm-display cm-reveal"
        style={{ fontSize: "clamp(2.4rem, 5.5vw, 4.2rem)" }}
      >
        Sourced from four coasts
      </h2>
      <ul className="cm-rows" role="list">
        {ORIGINS.map((origin) => (
          <li key={origin.name} className="cm-row">
            <p className="cm-row-name">
              <span className="cm-row-index">{origin.index}</span>
              {origin.name}
            </p>
            <div className="cm-row-meta">
              <p className="cm-row-places">{origin.places}</p>
              <p className="cm-row-craft">
                {origin.craft}. {origin.clay}.
              </p>
            </div>
            <div className="cm-row-crop">
              <img src={origin.image} alt={`${origin.craft} from ${origin.name}`} loading="lazy" />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

const SPECS = [
  { icon: "/assets/icons/icon-kiln.png", key: "Partner factories", value: "38" },
  { icon: "/assets/icons/icon-ship.png", key: "Import regions", value: "4" },
  { icon: "/assets/icons/icon-thermometer.png", key: "Firing range", value: "1050 to 1300 C" },
  { icon: "/assets/icons/icon-tile.png", key: "Wear rating", value: "Up to PEI V" },
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
        <h2 id="visit-title" className="cm-display cm-reveal" style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.6rem)" }}>
          Walk on it before you choose it
        </h2>
        <p className="cm-body-copy" style={{ margin: "0 auto" }}>
          The CERAMM showroom lays each collection into full size room sets,
          for homes and commercial projects alike. Open Tuesday through
          Saturday. Architects and contractors can request the trade catalog
          by email.
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
      </div>
    </section>
  );
}
