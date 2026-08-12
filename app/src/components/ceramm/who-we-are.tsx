/**
 * Who we are: the import house behind the tiles. Manifesto plus a three
 * frame strip of the working life (showroom, grading, the quay).
 */
export function WhoWeAre() {
  return (
    <section id="about" className="cm-section" aria-labelledby="about-title">
      <div className="cm-about">
        <h2
          id="about-title"
          className="cm-display cm-reveal"
          style={{ fontSize: "clamp(2.4rem, 5.5vw, 4.2rem)" }}
        >
          Tile people, four coasts deep
        </h2>
        <div className="cm-about-copy">
          <p className="cm-body-copy">
            CERAMM is an import house run by people who choose tile the slow
            way: at the factory, in person. Spring is for Sassuolo and
            Castellón, autumn for Iznik and Salernes, and the months between
            are spent on quays and in kiln yards.
          </p>
          <p className="cm-body-copy">
            What comes home is what we would lay in our own houses. Every
            batch carries its maker's name, and every pallet is opened,
            graded, and approved by our own hands before it reaches yours.
          </p>
        </div>
        <ul className="cm-about-strip" role="list">
          <li>
            <img
              src="/assets/about/showroom.jpg"
              alt="The CERAMM showroom: full size room sets and racks of tile samples"
              loading="lazy"
            />
            <span className="cm-mono-note">The showroom</span>
          </li>
          <li>
            <img
              src="/assets/about/grading.jpg"
              alt="Hands fanning ceramic tile samples over a workbench"
              loading="lazy"
            />
            <span className="cm-mono-note">Grading day</span>
          </li>
          <li>
            <img
              src="/assets/about/quay.jpg"
              alt="Crates of tile packed in straw on a Mediterranean quay"
              loading="lazy"
            />
            <span className="cm-mono-note">The quay</span>
          </li>
        </ul>
      </div>
    </section>
  );
}
