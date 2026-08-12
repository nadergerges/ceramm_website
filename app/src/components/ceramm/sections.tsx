/**
 * CERAMM content sections after the kiln journey.
 * Layout families and copy are locked in app/design-brief.md; the reference
 * boards in refs/ are the visual source of truth.
 */

const COLLECTIONS = [
  {
    desc: "Amphorae, urns, and studio vases from family potteries.",
    digit: "01",
    image: "/assets/collections/vessels.jpg",
    name: "Vessels",
    shape: "cm-tile-tall",
  },
  {
    desc: "Majolica plates, serving bowls, and hand painted platters.",
    digit: "02",
    image: "/assets/collections/dinnerware.jpg",
    name: "Dinnerware",
    shape: "cm-tile-wide",
  },
  {
    desc: "Zellige, azulejos, and terracotta for walls and floors.",
    digit: "03",
    image: "/assets/collections/tiles.jpg",
    name: "Tile",
    shape: "cm-tile-square",
  },
  {
    desc: "Basins, planters, and garden ceramics at scale.",
    digit: "04",
    image: "/assets/collections/architectural.jpg",
    name: "Architectural",
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
        Four ways to live with fired earth
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
    clay: "Red earthenware",
    craft: "Majolica and terracotta",
    image: "/assets/origins/italy.jpg",
    index: "I",
    name: "Italy",
    places: "Faenza · Deruta · Grottaglie",
  },
  {
    clay: "Tin glazed earthenware",
    craft: "Lusterware and azulejos",
    image: "/assets/origins/spain.jpg",
    index: "II",
    name: "Spain",
    places: "Manises · Talavera de la Reina",
  },
  {
    clay: "Kaolin porcelain and faience",
    craft: "Faience and porcelain",
    image: "/assets/origins/france.jpg",
    index: "III",
    name: "France",
    places: "Provence · Limoges",
  },
  {
    clay: "Quartz fritware",
    craft: "Fritware and cobalt ware",
    image: "/assets/origins/middle-east.jpg",
    index: "IV",
    name: "Middle East",
    places: "Iznik · Hebron",
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
  { icon: "/assets/icons/icon-wheel.png", key: "Family workshops", value: "38" },
  { icon: "/assets/icons/icon-ship.png", key: "Import regions", value: "4" },
  { icon: "/assets/icons/icon-thermometer.png", key: "Firing range", value: "960 to 1300 C" },
  { icon: "/assets/icons/icon-kiln.png", key: "Lead time", value: "6 to 10 weeks" },
  { icon: "/assets/icons/icon-stamp.png", key: "Every piece", value: "Maker marked" },
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
            CERAMM works directly with family workshops, not exporters. Every
            shipment is documented from quarry to container, and every piece
            arrives with its maker's name.
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
            alt="Unfired clay vessels drying on wooden racks in a workshop"
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
          Cobalt oxide. The one pigment every coast we buy from shares.
        </p>
        <p className="cm-band-caption">Glaze detail · Iznik fritware</p>
      </div>
    </section>
  );
}

export function Visit() {
  return (
    <section id="visit" className="cm-section" aria-labelledby="visit-title">
      <div className="cm-visit-panel cm-grain">
        <h2 id="visit-title" className="cm-display cm-reveal" style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.6rem)" }}>
          See the collection in person
        </h2>
        <p className="cm-body-copy" style={{ margin: "0 auto" }}>
          The CERAMM showroom is open Tuesday through Saturday. Trade clients
          can request the current import catalog by email.
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
