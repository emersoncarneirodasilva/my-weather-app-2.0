export type MoonPhase =
  | "New Moon"
  | "Waxing Crescent"
  | "First Quarter"
  | "Waxing Gibbous"
  | "Full Moon"
  | "Waning Gibbous"
  | "Last Quarter"
  | "Waning Crescent";

export const moonPhases: Record<MoonPhase, string> = {
  "New Moon": "Lua Nova",
  "Waxing Crescent": "Lua Crescente",
  "First Quarter": "Quarto Crescente",
  "Waxing Gibbous": "Crescente Gibosa",
  "Full Moon": "Lua Cheia",
  "Waning Gibbous": "Minguante Gibosa",
  "Last Quarter": "Quarto Minguante",
  "Waning Crescent": "Lua Minguante",
};
