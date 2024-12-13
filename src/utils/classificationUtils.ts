// src/utils/classificationUtils.ts
export enum UVLevel {
  Low = "Baixo",
  Moderate = "Moderado",
  High = "Alto",
  VeryHigh = "Muito alto",
  Extreme = "Extremo",
}

export enum HumidityLevel {
  VeryLow = "Muito baixa",
  Low = "Baixa",
  Moderate = "Moderada",
  High = "Alta",
  VeryHigh = "Muito alta",
}

export enum PrecipitationLevel {
  None = "Sem precipitação",
  VeryLow = "Muito baixa",
  Low = "Baixa",
  Moderate = "Moderada",
  High = "Alta",
  VeryHigh = "Muito alta",
}

export enum FeelsLikeLevel {
  VeryCold = "Muito frio",
  Cold = "Frio",
  Pleasant = "Agradável",
  Hot = "Quente",
  VeryHot = "Muito quente",
}

export enum PressureLevel {
  VeryLow = "Muito baixa",
  Low = "Baixa",
  Normal = "Normal",
  High = "Alta",
  VeryHigh = "Muito alta",
}

export const getUVLevel = (uvIndex: number): UVLevel => {
  if (uvIndex <= 2) return UVLevel.Low;
  if (uvIndex <= 5) return UVLevel.Moderate;
  if (uvIndex <= 7) return UVLevel.High;
  if (uvIndex <= 10) return UVLevel.VeryHigh;
  return UVLevel.Extreme;
};

export const getHumidityLevel = (humidity: number): HumidityLevel => {
  if (humidity < 30) return HumidityLevel.VeryLow;
  if (humidity < 50) return HumidityLevel.Low;
  if (humidity < 70) return HumidityLevel.Moderate;
  if (humidity < 90) return HumidityLevel.High;
  return HumidityLevel.VeryHigh;
};

export const getPrecipitationLevel = (
  precipitation: number
): PrecipitationLevel => {
  if (precipitation === 0) return PrecipitationLevel.None;
  if (precipitation <= 2) return PrecipitationLevel.VeryLow;
  if (precipitation <= 5) return PrecipitationLevel.Low;
  if (precipitation <= 20) return PrecipitationLevel.Moderate;
  if (precipitation <= 50) return PrecipitationLevel.High;
  return PrecipitationLevel.VeryHigh;
};

export const getFeelsLikeLevel = (feelsLike: number): FeelsLikeLevel => {
  if (feelsLike < 0) return FeelsLikeLevel.VeryCold;
  if (feelsLike < 10) return FeelsLikeLevel.Cold;
  if (feelsLike < 25) return FeelsLikeLevel.Pleasant;
  if (feelsLike < 35) return FeelsLikeLevel.Hot;
  return FeelsLikeLevel.VeryHot;
};

export const getPressureLevel = (pressure: number): PressureLevel => {
  if (pressure < 980) return PressureLevel.VeryLow;
  if (pressure < 1000) return PressureLevel.Low;
  if (pressure < 1020) return PressureLevel.Normal;
  if (pressure < 1040) return PressureLevel.High;
  return PressureLevel.VeryHigh;
};
