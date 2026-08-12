/**
 * Scene data for the scroll-scrub journey — THE file you fill in per build.
 *
 * Single-shot journey: one continuous 15s film encoded into four sequential
 * segment clips (exact consecutive frames of the same take, so every seam is
 * frame-perfect). Each segment carries one chapter of the kiln journey.
 *
 * Every `poster` is the exact first frame of the encoded clip beside it.
 * Keep this array a module constant: changing its identity on every render
 * intentionally rebuilds the media controller.
 */
import { createElement } from "react";

import type {
  ScrollScrubScene,
  ScrollScrubTheme,
} from "@/components/scroll-scrub/scroll-scrub";

/** CERAMM brand tokens (see app/design-brief.md, locked palette). */
export const scrollScrubTheme: ScrollScrubTheme = {
  accent: "#24409A",
  background: "#F5F4F0",
  ink: "#201D1A",
  muted: "#6E675E",
};

/** Journey chapter 4 hands off to the collection below. */
const viewCollectionCta = createElement(
  "a",
  { className: "cm-journey-cta", href: "#collection" },
  createElement("span", { className: "cm-journey-cta-label" }, "View the collection"),
  createElement("span", { "aria-hidden": true, className: "cm-journey-cta-arrow" }),
);

export const scrollScrubScenes: ScrollScrubScene[] = [
  {
    align: "left",
    body: "CERAMM imports ceramic floor tiles from four coasts. Each begins as earth: kaolin, terracotta, and stoneware clay.",
    clip: "/assets/world/scene-01.mp4",
    id: "earth",
    label: "Earth",
    linger: 0.2,
    mobileClip: "/assets/world/scene-01-mobile.mp4",
    mobilePoster: "/assets/world/scene-01-mobile-poster.png",
    poster: "/assets/world/scene-01-poster.png",
    scroll: 1.5,
    tags: ["Kaolin", "Terracotta", "Stoneware"],
    title: "Every floor begins as earth",
  },
  {
    align: "right",
    body: "Pressed in Sassuolo, glazed in Castellón, molded in Salernes, painted in Iznik.",
    clip: "/assets/world/scene-02.mp4",
    id: "form",
    label: "Form",
    mobileClip: "/assets/world/scene-02-mobile.mp4",
    mobilePoster: "/assets/world/scene-02-mobile-poster.png",
    poster: "/assets/world/scene-02-poster.png",
    scroll: 1.4,
    title: "Pressed, cut, and drawn by hand",
  },
  {
    align: "left",
    body: "At 1260 degrees the tile vitrifies. A floor that will outlive the house.",
    clip: "/assets/world/scene-03.mp4",
    id: "fire",
    label: "Fire",
    mobileClip: "/assets/world/scene-03-mobile.mp4",
    mobilePoster: "/assets/world/scene-03-mobile-poster.png",
    poster: "/assets/world/scene-03-poster.png",
    scroll: 1.3,
    tags: ["1260 C"],
    title: "Fired until earth turns to stone",
  },
  {
    actions: viewCollectionCta,
    align: "right",
    body: "Glazes ground from the same minerals as the clay beneath them. This is where CERAMM begins.",
    clip: "/assets/world/scene-04.mp4",
    id: "glaze",
    label: "Glaze",
    linger: 0.25,
    mobileClip: "/assets/world/scene-04-mobile.mp4",
    mobilePoster: "/assets/world/scene-04-mobile-poster.png",
    poster: "/assets/world/scene-04-poster.png",
    scroll: 1.5,
    title: "Finished in cobalt, tin, and ash",
  },
];
