import { createFileRoute } from "@tanstack/react-router";

import { ScrollScrub } from "@/components/scroll-scrub/scroll-scrub";
import { CerammProvider } from "@/components/ceramm/ceramm-store";
import { CerammMotion } from "@/components/ceramm/motion";
import { CerammFooter, CerammMobileBar, CerammNav } from "@/components/ceramm/nav";
import { OriginsMap } from "@/components/ceramm/origins-map";
import { RoomStudio } from "@/components/ceramm/room-studio";
import { Collections, GlazeBand, Provenance, Visit } from "@/components/ceramm/sections";
import { TileExplorer } from "@/components/ceramm/tile-explorer";
import { scrollScrubScenes, scrollScrubTheme } from "@/scroll-scrub-scenes";

const SITE_NAME = "CERAMM";
const SITE_DESCRIPTION =
  "Ceramic floor tiles imported from Italy, Spain, France, and the Middle East, for homes and commercial spaces.";

export const Route = createFileRoute("/")({
  head: () => ({
    links: [
      { href: "/apple-touch-icon.png", rel: "apple-touch-icon", sizes: "180x180" },
      { href: "/favicon-32.png", rel: "icon", sizes: "32x32", type: "image/png" },
      { href: "/favicon-16.png", rel: "icon", sizes: "16x16", type: "image/png" },
      { href: "/site.webmanifest", rel: "manifest" },
      { href: "https://ceramm.higgsfield.app/", rel: "canonical" },
    ],
    meta: [
      { content: scrollScrubTheme.background, name: "theme-color" },
      { content: "https://ceramm.higgsfield.app/", property: "og:url" },
    ],
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
// Interactive systems (tile library, origins chart, room studio) share one
// selection through CerammProvider.
function Index() {
  return (
    <CerammProvider>
      <div className="cm-page" id="top">
        <CerammNav />
        <main id="main">
          <h1 className="cm-sr-only">
            CERAMM: ceramic floor tiles imported from Italy, Spain, France, and
            the Middle East
          </h1>
          <ScrollScrub scenes={scrollScrubScenes} theme={scrollScrubTheme} />
          <Collections />
          <TileExplorer />
          <OriginsMap />
          <Provenance />
          <GlazeBand />
          <RoomStudio />
          <Visit />
        </main>
        <CerammFooter />
        <CerammMobileBar />
        <CerammMotion />
      </div>
    </CerammProvider>
  );
}
