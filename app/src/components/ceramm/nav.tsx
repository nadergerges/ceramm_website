/** CERAMM site chrome: fixed nav + footer (see app/design-brief.md). */

const NAV_LINKS = [
  { href: "#collection", label: "Collection" },
  { href: "#origins", label: "Origins" },
  { href: "#provenance", label: "Provenance" },
  { href: "#visit", label: "Visit" },
];

export function CerammNav() {
  return (
    <header className="cm-nav">
      <div className="cm-nav-inner">
        <a href="#top" className="cm-brand" aria-label="CERAMM, back to top">
          <img
            src="/assets/brand/ceramm-mark.png"
            alt=""
            className="cm-brand-mark"
            width={28}
            height={28}
          />
          <span className="cm-wordmark">CERAMM</span>
        </a>
        <nav className="cm-nav-links" aria-label="Site">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="cm-nav-link">
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export function CerammFooter() {
  return (
    <footer className="cm-footer">
      <div className="cm-footer-inner">
        <div>
          <span className="cm-wordmark">CERAMM</span>
          <p className="cm-mono-note">Imported ceramic floors, chosen at the kiln door.</p>
        </div>
        <p className="cm-footer-regions">Italy · Spain · France · Middle East</p>
        <p className="cm-mono-note">
          <a href="mailto:hello@ceramm.com">hello@ceramm.com</a>
          <span aria-hidden="true"> · </span>
          <span>2026 CERAMM</span>
        </p>
      </div>
    </footer>
  );
}
