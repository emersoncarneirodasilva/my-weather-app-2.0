import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import HourlyForecast from "../HourlyForecast";
import WeeklyForecast from "../WeeklyForecast";
import CurrentInformation from "../CurrentInformation";
import AirQuality from "../AirQuality";

type ForecastType = "hourly" | "weekly";

interface ContainerWithDataProps {
  containerOpacity: number;
}

export default function ContainerWithData({
  containerOpacity,
}: ContainerWithDataProps) {
  const [selectedForecast, setSelectedForecast] =
    useState<ForecastType>("hourly");

  const handleForecast = (type: ForecastType): void => {
    setSelectedForecast(type);
  };

  return (
    <View
      style={[
        styles.weatherForecastContainer,
        { backgroundColor: `rgba(197, 197, 197, ${containerOpacity})` },
      ]}
    >
      <View style={styles.littleLine} />

      <View style={styles.hourAndWeeklyForecastContainer}>
        <TouchableOpacity onPress={() => handleForecast("hourly")}>
          <Text
            style={[
              styles.forecastText,
              selectedForecast === "hourly"
                ? styles.selectedForecast
                : styles.unselectedForecast,
            ]}
          >
            Previsão para 24h
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleForecast("weekly")}>
          <Text
            style={[
              styles.forecastText,
              selectedForecast === "weekly"
                ? styles.selectedForecast
                : styles.unselectedForecast,
            ]}
          >
            Previsão Semanal
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.line} />

      {selectedForecast === "hourly" ? <HourlyForecast /> : <WeeklyForecast />}

      <CurrentInformation />

      <AirQuality />
    </View>
  );
}
