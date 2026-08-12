import { useEffect, useRef, useState } from "react";

/** CERAMM site chrome: fixed nav (desktop links + mobile sheet), scroll spy,
 * thumb-zone action bar, and footer. */

const NAV_LINKS = [
  { href: "#collection", id: "collection", label: "Collection" },
  { href: "#tiles", id: "tiles", label: "Tiles" },
  { href: "#origins", id: "origins", label: "Origins" },
  { href: "#studio", id: "studio", label: "Studio" },
  { href: "#visit", id: "visit", label: "Visit" },
];

export function CerammNav() {
  const [current, setCurrent] = useState<string | null>(null);
  const sheetRef = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    const sections = NAV_LINKS.map((l) => document.getElementById(l.id)).filter(
      (el): el is HTMLElement => el !== null,
    );
    if (sections.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) setCurrent(visible[0].target.id);
      },
      { rootMargin: "-30% 0px -55% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const closeSheet = () => {
    if (sheetRef.current) sheetRef.current.open = false;
  };

  return (
    <header className="cm-nav">
      <a className="cm-skip" href="#main">
        Skip to content
      </a>
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
            <a
              key={link.href}
              href={link.href}
              className="cm-nav-link"
              aria-current={current === link.id ? "true" : undefined}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <details className="cm-nav-mobile" ref={sheetRef}>
          <summary aria-label="Menu">
            <span />
            <span />
            <span />
          </summary>
          <nav className="cm-nav-sheet" aria-label="Site">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} onClick={closeSheet}>
                {link.label}
              </a>
            ))}
            <a href="mailto:hello@ceramm.com?subject=Showroom%20visit" onClick={closeSheet}>
              Plan a visit
            </a>
          </nav>
        </details>
      </div>
    </header>
  );
}

/** Thumb-zone actions on small screens: the library and the visit CTA. */
export function CerammMobileBar() {
  return (
    <nav className="cm-mobile-bar" aria-label="Quick actions">
      <a href="#tiles">Tile library</a>
      <a href="#studio">Room studio</a>
      <a href="mailto:hello@ceramm.com?subject=Showroom%20visit">Plan a visit</a>
    </nav>
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
