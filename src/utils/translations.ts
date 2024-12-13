import { Language, LanguageTranslations } from "../types/weatherTypes";

export const translations: Record<Language, LanguageTranslations> = {
  pt: {
    days: [
      "Domingo",
      "Segunda-feira",
      "Terça-feira",
      "Quarta-feira",
      "Quinta-feira",
      "Sexta-feira",
      "Sábado",
    ],
    moonPhases: {
      "New Moon": "Lua Nova",
      "Waxing Crescent": "Lua Crescente",
      "First Quarter": "Quarto Crescente",
      "Waxing Gibbous": "Lua Gibosa Crescente",
      "Full Moon": "Lua Cheia",
      "Waning Gibbous": "Lua Gibosa Minguante",
      "Last Quarter": "Quarto Minguante",
      "Waning Crescent": "Lua Minguante",
    },
  },
  en: {
    days: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    moonPhases: {
      "New Moon": "New Moon",
      "Waxing Crescent": "Waxing Crescent",
      "First Quarter": "First Quarter",
      "Waxing Gibbous": "Waxing Gibbous",
      "Full Moon": "Full Moon",
      "Waning Gibbous": "Waning Gibbous",
      "Last Quarter": "Last Quarter",
      "Waning Crescent": "Waning Crescent",
    },
  },
};
