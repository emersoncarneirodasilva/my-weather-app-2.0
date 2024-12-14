export type Language = "pt" | "en";

export interface LanguageTranslations {
  days: string[];
  moonPhases: {
    [key: string]: string;
  };
}

export interface WeatherData {
  location: {
    name: string;
    region: string;
    country: string;
    localtime: string;
  };
  current: {
    temp_c: number;
    temp_f: number;
    condition: {
      text: string;
      icon: string;
    };
    is_day: 0 | 1;
    wind_kph: number;
    wind_degree: number;
    wind_dir: string;
    pressure_mb: number;
    precip_mm: number;
    humidity: number;
    feelslike_c: number;
    uv: number;
    air_quality: {
      "gb-defra-index": number;
      "us-epa-index": number;
      pm2_5: number;
      pm10: number;
      so2: number;
      no2: number;
      o3: number;
      co: number;
    };
  };
  forecast: {
    forecastday: Array<{
      date: string;
      day: {
        maxtemp_c: number;
        mintemp_c: number;
        condition: {
          text: string;
          icon: string;
        };
        daily_chance_of_rain: number;
      };
      astro: {
        sunset: string;
        sunrise: string;
        moonrise: string;
        moonset: string;
        moon_phase: string;
        moon_illumination: string;
      };
      hour: Array<{
        time: string;
        temp_c: number;
        condition: {
          text: string;
          icon: string;
        };
        wind_kph: number;
        humidity: number;
        feelslike_c: number;
        precip_mm: number;
        chance_of_rain: number;
      }>;
    }>;
  };
  alerts: {
    alert: Array<{
      event: string;
      desc: string;
      expires: string;
    }>;
  };
}
