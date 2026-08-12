/**
 * CERAMM tile catalog: the interactive library behind the explorer bento,
 * the origins map, and the room studio. Catalog data is plausible product
 * fact (formats, finishes, ratings), not marketing claims.
 */

export type RegionId = "italy" | "spain" | "france" | "middle-east";

export interface TileDef {
  id: string;
  name: string;
  /** Ceramic body / product type. */
  type: string;
  origin: RegionId;
  originPlace: string;
  finish: string;
  format: string;
  slip: string;
  /** Rooms this tile is recommended for. */
  rooms: string[];
  blurb: string;
  texture: string;
  /** Rendered tile size in the room studio, px at M. */
  baseSize: number;
  /** Texture already contains multiple tiles + grout; hide the grout overlay. */
  selfTiled?: boolean;
}

export const TILES: TileDef[] = [
  {
    id: "calacatta-slab",
    name: "Calacatta Slab",
    type: "Glazed porcelain stoneware",
    origin: "italy",
    originPlace: "Sassuolo",
    finish: "Polished",
    format: "120 x 120 cm",
    slip: "R9",
    rooms: ["Living room", "Kitchen"],
    blurb: "A marble look without the marble upkeep, fired to full vitrification.",
    texture: "/assets/tiles/calacatta-slab.jpg",
    baseSize: 260,
  },
  {
    id: "greige-stone",
    name: "Greige Stone",
    type: "Porcelain stoneware",
    origin: "italy",
    originPlace: "Sassuolo",
    finish: "Matte",
    format: "60 x 60 cm",
    slip: "R10",
    rooms: ["Kitchen", "Living room", "Terrace"],
    blurb: "The quiet workhorse: stone-look porcelain graded for heavy traffic.",
    texture: "/assets/tiles/greige-stone.jpg",
    baseSize: 170,
  },
  {
    id: "cotto-toscano",
    name: "Cotto Toscano",
    type: "Terracotta cotto",
    origin: "italy",
    originPlace: "Impruneta",
    finish: "Waxed",
    format: "30 x 30 cm",
    slip: "R11",
    rooms: ["Living room", "Terrace"],
    blurb: "Tuscan cotto with the patina already a century deep.",
    texture: "/assets/tiles/cotto-toscano.jpg",
    baseSize: 120,
  },
  {
    id: "azul-manises",
    name: "Azul Manises",
    type: "Glazed azulejo",
    origin: "spain",
    originPlace: "Manises",
    finish: "Gloss",
    format: "20 x 20 cm",
    slip: "R9",
    rooms: ["Bathroom", "Kitchen"],
    blurb: "Hand painted Valencian pattern, laid as a floor that reads like a rug.",
    texture: "/assets/tiles/azul-manises.jpg",
    baseSize: 96,
  },
  {
    id: "onda-checker",
    name: "Onda Checker",
    type: "Glazed ceramic",
    origin: "spain",
    originPlace: "Onda",
    finish: "Gloss",
    format: "20 x 20 cm",
    slip: "R9",
    rooms: ["Kitchen", "Bathroom"],
    blurb: "Bone and cobalt checkerboard, the oldest floor trick that still works.",
    texture: "/assets/tiles/onda-checker.jpg",
    baseSize: 200,
    selfTiled: true,
  },
  {
    id: "luster-ivory",
    name: "Luster Ivory",
    type: "Tin glazed lusterware",
    origin: "spain",
    originPlace: "Manises",
    finish: "Luster",
    format: "15 x 15 cm",
    slip: "R9",
    rooms: ["Bathroom"],
    blurb: "A copper sheen that moves with the daylight, for floors seen up close.",
    texture: "/assets/tiles/luster-ivory.jpg",
    baseSize: 84,
  },
  {
    id: "tomette-hex",
    name: "Tomette Hex",
    type: "Terracotta tomette",
    origin: "france",
    originPlace: "Salernes",
    finish: "Waxed",
    format: "16 cm hex",
    slip: "R10",
    rooms: ["Kitchen", "Living room"],
    blurb: "The hexagonal Provencal floor, warm underfoot for two hundred years.",
    texture: "/assets/tiles/tomette-hex.jpg",
    baseSize: 190,
    selfTiled: true,
  },
  {
    id: "provence-blanc",
    name: "Provence Blanc",
    type: "Enameled terre cuite",
    origin: "france",
    originPlace: "Salernes",
    finish: "Soft gloss",
    format: "30 x 30 cm",
    slip: "R9",
    rooms: ["Bathroom", "Living room"],
    blurb: "White enamel over red clay, with the gentle waver only hands leave.",
    texture: "/assets/tiles/provence-blanc.jpg",
    baseSize: 130,
  },
  {
    id: "iznik-garden",
    name: "Iznik Garden",
    type: "Quartz fritware",
    origin: "middle-east",
    originPlace: "Iznik",
    finish: "Gloss",
    format: "24 x 24 cm",
    slip: "R9",
    rooms: ["Bathroom", "Living room"],
    blurb: "Tulips and carnations in cobalt and coral, fired on a quartz body.",
    texture: "/assets/tiles/iznik-garden.jpg",
    baseSize: 110,
  },
  {
    id: "jerusalem-cobalt",
    name: "Jerusalem Cobalt",
    type: "Hand glazed ceramic",
    origin: "middle-east",
    originPlace: "Jerusalem",
    finish: "Artisanal gloss",
    format: "10 x 10 cm",
    slip: "R10",
    rooms: ["Bathroom", "Kitchen"],
    blurb: "Deep cobalt pooling at every edge, no two tiles alike.",
    texture: "/assets/tiles/jerusalem-cobalt.jpg",
    baseSize: 76,
  },
  {
    id: "damascus-star",
    name: "Damascus Star",
    type: "Patterned ceramic",
    origin: "middle-east",
    originPlace: "Damascus",
    finish: "Satin",
    format: "20 x 20 cm",
    slip: "R10",
    rooms: ["Living room", "Terrace"],
    blurb: "An eight pointed star that resolves into a lattice across the room.",
    texture: "/assets/tiles/damascus-star.jpg",
    baseSize: 100,
  },
  {
    id: "hebron-celadon",
    name: "Hebron Celadon",
    type: "Hand glazed ceramic",
    origin: "middle-east",
    originPlace: "Hebron",
    finish: "Crazed gloss",
    format: "15 x 15 cm",
    slip: "R10",
    rooms: ["Bathroom"],
    blurb: "Sea green glaze with a fine crazing that deepens as the floor lives.",
    texture: "/assets/tiles/hebron-celadon.jpg",
    baseSize: 88,
  },
];

export interface RegionDef {
  id: RegionId;
  name: string;
  places: string;
  craft: string;
  clay: string;
  image: string;
  /** Marker position on the origins chart, percent of the SVG box. */
  x: number;
  y: number;
}

export const REGIONS: RegionDef[] = [
  {
    id: "italy",
    name: "Italy",
    places: "Sassuolo · Impruneta · Faenza",
    craft: "Porcelain stoneware and cotto",
    clay: "Red and white body stoneware",
    image: "/assets/origins/italy.jpg",
    x: 46.2,
    y: 38,
  },
  {
    id: "spain",
    name: "Spain",
    places: "Castellón · Onda · Manises",
    craft: "Azulejos and porcelain tile",
    clay: "Tin glazed earthenware",
    image: "/assets/origins/spain.jpg",
    x: 21.5,
    y: 51,
  },
  {
    id: "france",
    name: "France",
    places: "Salernes · Provence",
    craft: "Tomettes and terre cuite",
    clay: "Red terracotta",
    image: "/assets/origins/france.jpg",
    x: 30.5,
    y: 33,
  },
  {
    id: "middle-east",
    name: "Middle East",
    places: "Iznik · Jerusalem · Damascus · Hebron",
    craft: "Fritware and cobalt tile",
    clay: "Quartz fritware",
    image: "/assets/origins/middle-east.jpg",
    x: 77,
    y: 43,
  },
];

export interface RoomDef {
  id: string;
  name: string;
  overlay: string;
  /** Where the floor plane starts, percent of scene height. */
  horizon: number;
  /** Floor plane tilt in degrees. */
  tilt: number;
}

export const ROOMS: RoomDef[] = [
  { id: "kitchen", name: "Kitchen", overlay: "/assets/rooms/kitchen.webp", horizon: 52, tilt: 61 },
  { id: "living", name: "Living room", overlay: "/assets/rooms/living.webp", horizon: 54, tilt: 61 },
  { id: "bath", name: "Bathroom", overlay: "/assets/rooms/bath.webp", horizon: 53, tilt: 61 },
  { id: "terrace", name: "Terrace", overlay: "/assets/rooms/terrace.webp", horizon: 50, tilt: 62 },
];
