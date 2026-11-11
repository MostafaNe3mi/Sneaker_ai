// Men's sneaker images
import airForce1 from "../assets/sneakers/air-force-1-07.png";
import airJordan1High from "../assets/sneakers/air-jordan-1-retro-high-og.png";
import dunkLowRetro from "../assets/sneakers/dunk-low-retro.png";
import airJordan4 from "../assets/sneakers/air-jordan-4-retro.png";
import airMax90 from "../assets/sneakers/air-max-90.png";
import airJordan1Low from "../assets/sneakers/air-jordan-1-low.png";
import blazerMid77 from "../assets/sneakers/blazer-mid-77.png";
import airJordan3 from "../assets/sneakers/air-jordan-3-retro.png";
import airMax97 from "../assets/sneakers/air-max-97.png";
import pegasus41 from "../assets/sneakers/pegasus-41.png";
import airJordan11 from "../assets/sneakers/air-jordan-11-retro.png";
import cortez from "../assets/sneakers/cortez.png";

// Women's sneaker images
import airJordan3Fireside from "../assets/sneakers/air-jordan-3-retro-fireside.png";
import airJordan1LowRose from "../assets/sneakers/air-jordan-1-low-se-rose.png";
import airJordan1MidPink from "../assets/sneakers/air-jordan-1-mid-se-pink.png";
import jordanPointeMint from "../assets/sneakers/jordan-pointe-mint.png";
import airJordan5Sunset from "../assets/sneakers/air-jordan-5-retro-sunset.png";
import dunkLowIridescent from "../assets/sneakers/dunk-low-se-iridescent.png";
import dunkLowLavender from "../assets/sneakers/dunk-low-suede-lavender.png";
import dunkLowPink from "../assets/sneakers/dunk-low-se-pink.png";
import airMax90Futura from "../assets/sneakers/air-max-90-futura.png";
import airMaxMetro from "../assets/sneakers/air-max-metro.png";
import airJordanSkyline from "../assets/sneakers/air-jordan-skyline-low.png";
import jordanTrunnerFlow from "../assets/sneakers/jordan-trunner-flow.png";

// Upcoming sneaker images
import dunkLowGoreTex from "../assets/sneakers/dunk-low-gore-tex.png";
import airForce1Luxe from "../assets/sneakers/air-force-1-luxe.png";
import pegasusPlus2 from "../assets/sneakers/pegasus-plus-2.png";
import metcon10 from "../assets/sneakers/metcon-10.png";

const menSneakers = [
  {
    brand: "Nike",
    name: "Air Force 1 '07",
    colorway: "White / White",
    price: 115,
    sizes: ["7", "8", "9", "10", "11"],
    image: airForce1,
    tip: "A clean everyday classic. Pair with relaxed denim, cargos, or any neutral fit.",
  },
  {
    brand: "Jordan",
    name: "Air Jordan 1 Retro High OG",
    colorway: "Chicago-inspired",
    price: 180,
    sizes: ["8", "9", "10", "11", "12"],
    image: airJordan1High,
    tip: "Let the bold colorway stand out with straight-leg jeans and a simple tee.",
  },
  {
    brand: "Nike",
    name: "Dunk Low Retro",
    colorway: "Grey / White",
    price: 115,
    sizes: ["7", "8", "9", "10", "11"],
    image: dunkLowRetro,
    tip: "Easy to style with light-wash denim and layered everyday basics.",
  },
  {
    brand: "Jordan",
    name: "Air Jordan 4 Retro",
    colorway: "Black / Red",
    price: 215,
    sizes: ["8", "9", "10", "11", "12"],
    image: airJordan4,
    tip: "Works well with tapered cargos and a dark or neutral streetwear outfit.",
  },
  {
    brand: "Nike",
    name: "Air Max 90",
    colorway: "White / Black",
    price: 130,
    sizes: ["7", "8", "9", "10", "11"],
    image: airMax90,
    tip: "A sporty staple for joggers, track pants, or casual weekend layers.",
  },
  {
    brand: "Jordan",
    name: "Air Jordan 1 Low",
    colorway: "White / Grey",
    price: 120,
    sizes: ["7", "8", "9", "10", "11", "12"],
    image: airJordan1Low,
    tip: "Keep it low-key with cuffed jeans, chinos, or a monochrome outfit.",
  },
  {
    brand: "Nike",
    name: "Blazer Mid '77",
    colorway: "White / Vintage",
    price: 105,
    sizes: ["7", "8", "9", "10", "11"],
    image: blazerMid77,
    tip: "The retro shape looks great with cropped trousers and vintage-inspired layers.",
  },
  {
    brand: "Jordan",
    name: "Air Jordan 3 Retro",
    colorway: "White / Cement",
    price: 200,
    sizes: ["8", "9", "10", "11", "12"],
    image: airJordan3,
    tip: "Pair with relaxed-fit jeans and a simple top to balance the statement details.",
  },
  {
    brand: "Nike",
    name: "Air Max 97",
    colorway: "Silver / White",
    price: 175,
    sizes: ["7", "8", "9", "10", "11"],
    image: airMax97,
    tip: "A sleek match for techwear, track pants, and modern athletic basics.",
  },
  {
    brand: "Nike",
    name: "Pegasus 41",
    colorway: "Black / Volt",
    price: 140,
    sizes: ["7", "8", "9", "10", "11", "12"],
    image: pegasus41,
    tip: "Made for active days; team it with running gear or comfortable casual layers.",
  },
  {
    brand: "Jordan",
    name: "Air Jordan 11 Retro",
    colorway: "White / Midnight Navy",
    price: 230,
    sizes: ["8", "9", "10", "11", "12"],
    image: airJordan11,
    tip: "A polished statement pair that works with dark denim and a crisp, minimal outfit.",
  },
  {
    brand: "Nike",
    name: "Cortez",
    colorway: "White / University Red",
    price: 90,
    sizes: ["7", "8", "9", "10", "11", "12"],
    image: cortez,
    tip: "Lean into its retro look with straight-leg jeans, relaxed chinos, or track pants.",
  },
];

const womenSneakers = [
  {
    brand: "Jordan",
    name: 'Air Jordan 3 Retro "Fireside"',
    colorway: "Mocha / Soft Pink",
    price: 200,
    sizes: ["5", "6", "7", "8", "9", "10"],
    image: airJordan3Fireside,
    tip: "The rich mocha tones pair beautifully with cream denim and soft pink accents.",
    tone: "rose",
  },
  {
    brand: "Jordan",
    name: "Air Jordan 1 Low SE Rose",
    colorway: "Rose / Cocoa",
    price: 140,
    sizes: ["5", "6", "7", "8", "9", "10"],
    image: airJordan1LowRose,
    tip: "Pink laces and warm brown suede make this an easy match for a cozy neutral fit.",
    tone: "cocoa",
  },
  {
    brand: "Jordan",
    name: "Air Jordan 1 Mid SE Pink",
    colorway: "Blush / Rosewood",
    price: 140,
    sizes: ["5", "6", "7", "8", "9", "10"],
    image: airJordan1MidPink,
    tip: "A blush-and-brown color mix that pops with light jeans or a cream skirt.",
    tone: "blush",
  },
  {
    brand: "Jordan",
    name: "Jordan Pointe Mint",
    colorway: "Mint / Seafoam",
    price: 125,
    sizes: ["5", "6", "7", "8", "9", "10"],
    image: jordanPointeMint,
    tip: "Fresh mint tones look lovely with white, denim, and soft pastel layers.",
    tone: "mint",
  },
  {
    brand: "Jordan",
    name: 'Air Jordan 5 Retro "Sunset"',
    colorway: "White / Pink / Orange",
    price: 205,
    sizes: ["5", "6", "7", "8", "9", "10"],
    image: airJordan5Sunset,
    tip: "Let the sunset pink and orange details shine with a clean white outfit.",
    tone: "sunset",
  },
  {
    brand: "Nike",
    name: "Dunk Low SE Iridescent",
    colorway: "Silver / Iridescent",
    price: 120,
    sizes: ["5", "6", "7", "8", "9", "10"],
    image: dunkLowIridescent,
    tip: "Iridescent details bring a little sparkle to denim, skirts, and everyday basics.",
    tone: "pearl",
  },
  {
    brand: "Nike",
    name: "Dunk Low Suede Lavender",
    colorway: "Lavender / Sail",
    price: 120,
    sizes: ["5", "6", "7", "8", "9", "10"],
    image: dunkLowLavender,
    tip: "Soft lavender suede looks especially sweet with cream, grey, or light-wash denim.",
    tone: "lavender",
  },
  {
    brand: "Nike",
    name: "Dunk Low SE Pink",
    colorway: "Pink / White",
    price: 130,
    sizes: ["5", "6", "7", "8", "9", "10"],
    image: dunkLowPink,
    tip: "A playful pink pair that turns a simple outfit into the whole look.",
    tone: "pink",
  },
  {
    brand: "Nike",
    name: "Air Max 90 Futura",
    colorway: "Sand / Cream",
    price: 150,
    sizes: ["5", "6", "7", "8", "9", "10"],
    image: airMax90Futura,
    tip: "Warm sand and cream tones are an easy everyday match for relaxed neutral fits.",
    tone: "sand",
  },
  {
    brand: "Nike",
    name: "Air Max Metro",
    colorway: "White / Soft Grey",
    price: 130,
    sizes: ["5", "6", "7", "8", "9", "10"],
    image: airMaxMetro,
    tip: "A clean white sneaker that goes with everything from denim to a soft pastel fit.",
    tone: "cloud",
  },
  {
    brand: "Jordan",
    name: "Air Jordan Skyline Low",
    colorway: "Black / Anthracite",
    price: 105,
    sizes: ["5", "6", "7", "8", "9", "10"],
    image: airJordanSkyline,
    tip: "A sleek black low-top brings a little edge to a soft pastel or all-black fit.",
    tone: "skyline",
  },
  {
    brand: "Jordan",
    name: "Jordan Trunner Flow",
    colorway: "Black / Dark Mocha",
    price: 85,
    sizes: ["5", "6", "7", "8", "9", "10"],
    image: jordanTrunnerFlow,
    tip: "A sporty everyday pair that looks great with relaxed cargos and cozy layers.",
    tone: "trunner",
  },
];

const upcomingSneakers = [
  {
    brand: "Nike",
    name: "Dunk Low GORE-TEX",
    colorway: "Ready for whatever's next",
    release: "Release date to be announced",
    image: dunkLowGoreTex,
    detail: "An all-weather Dunk is stepping into the spotlight. Stay ready.",
    theme: "dunk",
  },
  {
    brand: "Nike",
    name: "Air Force 1 Luxe",
    colorway: "Built to stand apart",
    release: "Release date to be announced",
    image: airForce1Luxe,
    detail: "An elevated take on an all-time classic is headed your way.",
    theme: "luxe",
  },
  {
    brand: "Nike",
    name: "Pegasus Plus 2",
    colorway: "Ready for a new pace",
    release: "Release date to be announced",
    image: pegasusPlus2,
    detail: "A fast, lightweight runner is lining up for its next lap.",
    theme: "pegasus",
  },
  {
    brand: "Nike",
    name: "Metcon 10",
    colorway: "Made for the next level",
    release: "Release date to be announced",
    image: metcon10,
    detail: "A training favorite is getting ready to make its next move.",
    theme: "metcon",
  },
];

// turns the name into an id for the url
export function toSneakerId(name) {
  return name
    .toLowerCase()
    .replace(/['"]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

const withDetails = (list, extra) =>
  list.map((sneaker) => ({ ...sneaker, ...extra, id: toSneakerId(sneaker.name) }));

export const sneakers = withDetails(menSneakers, { gender: "men", status: "in-stock" });
export const womensSneakers = withDetails(womenSneakers, { gender: "women", status: "in-stock" });
export const upcoming = withDetails(upcomingSneakers, { status: "upcoming" });

export const allSneakers = [...sneakers, ...womensSneakers, ...upcoming];

export function getSneakerById(id) {
  return allSneakers.find((sneaker) => sneaker.id === id);
}

// sneakers for the "you might also like" section
export function getRelatedSneakers(sneaker) {
  let list = sneakers;
  if (sneaker.status === "upcoming") {
    list = upcoming;
  } else if (sneaker.gender === "women") {
    list = womensSneakers;
  }

  const others = list.filter((other) => other.id !== sneaker.id);
  const sameBrand = others.filter((other) => other.brand === sneaker.brand);
  const otherBrands = others.filter((other) => other.brand !== sneaker.brand);

  return [...sameBrand, ...otherBrands].slice(0, 4);
}
