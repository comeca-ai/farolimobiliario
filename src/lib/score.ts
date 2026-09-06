import { pct, pctAbs } from "@/lib/format";
import { LISTINGS, type Listing, type RadarTag } from "@/data/listings";
import { NEIGHBORHOOD_BY_ID, type Neighborhood } from "@/data/market";

export type Scorecard = {
  listing: Listing;
  nb: Neighborhood;
  fair: number;
  discount: number;
  askM2: number;
  fairM2: number;
  strGross: number;
  strNoi: number;
  strYield: number;
  ltrGross: number;
  ltrNoi: number;
  ltrYield: number;
  strVsLtr: number;
  paybackMonths: number | null;
  radarObscurity: number;
  score: number;
  primary: RadarTag;
};

const PLATFORM = 0.14;
const CLEANING_PER_BOOKING = 90;
const AVG_STAY = 3.2;

export function strNoi(input: {
  adr: number;
  occupancy: number;
  condo: number;
  iptu: number;
}) {
  const nights = 365 * input.occupancy;
  const gross = input.adr * nights;
  const platform = gross * PLATFORM;
  const bookings = nights / AVG_STAY;
  const cleaning = bookings * CLEANING_PER_BOOKING;
  const noi = gross - platform - input.condo * 12 - input.iptu - cleaning;
  return { gross, noi, nights };
}

export function analyze(
  listing: Listing,
  override?: { occupancy?: number; adr?: number },
): Scorecard {
  const nb = NEIGHBORHOOD_BY_ID[listing.bairroId];
  const fairM2 = nb.m2 * listing.condition;
  const fair = fairM2 * listing.area;
  const askM2 = listing.ask / listing.area;
  const discount = (fair - listing.ask) / fair;

  const occupancy = override?.occupancy ?? nb.strOccupancy;
  const adr = override?.adr ?? seaAdjustedAdr(nb.strAdr, listing.seaMeters, listing.type);

  const str = strNoi({
    adr,
    occupancy,
    condo: listing.condo,
    iptu: listing.iptu,
  });
  const strYield = str.noi / listing.ask;

  const ltrGross = nb.rentM2 * listing.area * 12;
  const ltrNoi = ltrGross * 0.92 - listing.condo * 12 - listing.iptu;
  const ltrYield = ltrNoi / listing.ask;
  const strVsLtr = ltrYield > 0 ? strYield / ltrYield : 0;
  const paybackMonths = str.noi > 0 ? listing.ask / (str.noi / 12) : null;

  const radarObscurity = obscurity(listing);

  const discountScore = clamp(discount / 0.28);
  const yieldScore = clamp(strYield / 0.12);
  const ltrScore = clamp(ltrYield / 0.07);
  const momentum = clamp(nb.yoy / 0.16);
  const sea = listing.seaMeters < 400 ? 1 : listing.seaMeters < 900 ? 0.6 : 0.2;

  const airbnbFit =
    (listing.type === "flat" || listing.type === "kitnet" || listing.rooms <= 2) &&
    listing.seaMeters < 500
      ? 1
      : listing.seaMeters < 1200
        ? 0.45
        : 0.15;

  const score =
    100 *
    (0.34 * discountScore +
      0.22 * yieldScore * airbnbFit +
      0.1 * ltrScore +
      0.18 * radarObscurity +
      0.1 * momentum +
      0.06 * sea);

  const primary = pickPrimary(listing, discount, strYield, radarObscurity, airbnbFit);

  return {
    listing,
    nb,
    fair,
    discount,
    askM2,
    fairM2,
    strGross: str.gross,
    strNoi: str.noi,
    strYield,
    ltrGross,
    ltrNoi,
    ltrYield,
    strVsLtr,
    paybackMonths,
    radarObscurity,
    score,
    primary,
  };
}

function seaAdjustedAdr(base: number, meters: number, type: Listing["type"]) {
  const sea =
    meters <= 80 ? 1.18 : meters <= 200 ? 1.08 : meters <= 400 ? 1 : meters <= 900 ? 0.9 : 0.78;
  const typeBoost = type === "flat" ? 1.06 : type === "kitnet" ? 0.92 : 1;
  return Math.round(base * sea * typeBoost);
}

function obscurity(listing: Listing) {
  const portalPenalty = clamp(1 - listing.portalCount / 4);
  const rareSource = listing.sources.some((s) =>
    ["placa", "leilao", "inventario", "iptu", "whatsapp"].includes(s),
  )
    ? 1
    : 0.35;
  const freshness = listing.daysListed <= 14 ? 0.85 : listing.daysListed >= 90 ? 0.55 : 0.4;
  return clamp(0.5 * portalPenalty + 0.35 * rareSource + 0.15 * freshness);
}

function pickPrimary(
  listing: Listing,
  discount: number,
  strYield: number,
  obscurityScore: number,
  airbnbFit: number,
): RadarTag {
  if (listing.radars.length === 1) return listing.radars[0];
  const rua = obscurityScore * (listing.portalCount === 0 ? 1.2 : 0.8);
  const air = strYield * airbnbFit * 8;
  const preco = clamp(discount / 0.25);
  if (rua >= air && rua >= preco) return "rua";
  if (air >= preco) return "airbnb";
  return "preco";
}

function clamp(n: number) {
  return Math.max(0, Math.min(1, n));
}

export const LISTINGS_SCORED = LISTINGS.map((l) => analyze(l)).sort(
  (a, b) => b.score - a.score,
);

export function punch(card: Scorecard): { value: string; caption: string } {
  if (card.primary === "preco") {
    return { value: pct(card.discount), caption: "abaixo do justo do bairro" };
  }
  if (card.primary === "airbnb") {
    return {
      value: pctAbs(Math.max(card.strYield, 0)),
      caption: "yield STR ao ano, já líquido",
    };
  }
  if (card.listing.portalCount === 0) {
    return { value: "fora", caption: "dos portais · só na rua" };
  }
  return {
    value: String(card.listing.portalCount),
    caption: card.listing.portalCount === 1 ? "portal · ainda opaco" : "portais · ainda opaco",
  };
}
