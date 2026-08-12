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
    body: "CERAMM imports ceramic tile from four coasts. Floors first: terracotta, stoneware, and pattern underfoot.",
    clip: "/assets/world/scene-01.mp4",
    id: "floors",
    label: "Floors",
    linger: 0.2,
    mobileClip: "/assets/world/scene-01-mobile.mp4",
    mobilePoster: "/assets/world/scene-01-mobile-poster.png",
    poster: "/assets/world/scene-01-poster.png",
    scroll: 1.5,
    tags: ["Living", "Kitchen"],
    title: "Floors that hold the room",
  },
  {
    align: "right",
    body: "Zellige, azulejos, and Iznik panels, glazed to catch the light sideways.",
    clip: "/assets/world/scene-02.mp4",
    id: "walls",
    label: "Walls",
    mobileClip: "/assets/world/scene-02-mobile.mp4",
    mobilePoster: "/assets/world/scene-02-mobile-poster.png",
    poster: "/assets/world/scene-02-poster.png",
    scroll: 1.4,
    tags: ["Kitchen", "Bath"],
    title: "The same earth climbs the walls",
  },
  {
    align: "left",
    body: "Frost proof and slip rated, glazed the color of the water itself.",
    clip: "/assets/world/scene-03.mp4",
    id: "pool",
    label: "Poolside",
    mobileClip: "/assets/world/scene-03-mobile.mp4",
    mobilePoster: "/assets/world/scene-03-mobile-poster.png",
    poster: "/assets/world/scene-03-poster.png",
    scroll: 1.3,
    tags: ["R11", "Frost proof"],
    title: "Cool underfoot, poolside",
  },
  {
    actions: viewCollectionCta,
    align: "right",
    body: "Large format porcelain for lobbies, shops, and offices. Rated for the crowd, chosen at the kiln door.",
    clip: "/assets/world/scene-04.mp4",
    id: "work",
    label: "At work",
    linger: 0.25,
    mobileClip: "/assets/world/scene-04-mobile.mp4",
    mobilePoster: "/assets/world/scene-04-mobile-poster.png",
    poster: "/assets/world/scene-04-poster.png",
    scroll: 1.5,
    title: "Graded for the crowd",
  },
];
