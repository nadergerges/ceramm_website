import { createFileRoute } from "@tanstack/react-router";

import { ScrollScrub } from "@/components/scroll-scrub/scroll-scrub";
import { CerammMotion } from "@/components/ceramm/motion";
import { CerammFooter, CerammNav } from "@/components/ceramm/nav";
import {
  Collections,
  GlazeBand,
  Origins,
  Provenance,
  Visit,
} from "@/components/ceramm/sections";
import { scrollScrubScenes, scrollScrubTheme } from "@/scroll-scrub-scenes";

const SITE_NAME = "CERAMM";
const SITE_DESCRIPTION =
  "Imported ceramics from Italy, Spain, France, and the Middle East, chosen at the kiln door.";

export const Route = createFileRoute("/")({
  head: () => ({
    links: [
      { href: "/apple-touch-icon.png", rel: "apple-touch-icon", sizes: "180x180" },
      { href: "/favicon-32.png", rel: "icon", sizes: "32x32", type: "image/png" },
      { href: "/favicon-16.png", rel: "icon", sizes: "16x16", type: "image/png" },
      { href: "/site.webmanifest", rel: "manifest" },
    ],
    meta: [{ content: scrollScrubTheme.background, name: "theme-color" }],
    scripts: [
      {
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          description: SITE_DESCRIPTION,
          email: "hello@ceramm.com",
          logo: "/assets/brand/ceramm-mark.png",
          name: SITE_NAME,
        }),
        type: "application/ld+json",
      },
    ],
  }),
  component: Index,
});

// The whole page IS the kiln journey: the scrub controller owns media time,
// while every chapter and section stays server-rendered in semantic flow.
function Index() {
  return (
    <div className="cm-page" id="top">
      <CerammNav />
      <main>
        <ScrollScrub scenes={scrollScrubScenes} theme={scrollScrubTheme} />
        <Collections />
        <Origins />
        <Provenance />
        <GlazeBand />
        <Visit />
      </main>
      <CerammFooter />
      <CerammMotion />
    </div>
  );
}
