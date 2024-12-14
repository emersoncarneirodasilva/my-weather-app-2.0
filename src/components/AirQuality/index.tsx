import { useState } from "react";
import { View, Text, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./styles";
import { useWeather } from "@/src/contexts/WeatherContext";
import AirQualityItem from "../AirQualityItem";
import AirQualityMessages from "../AirQualityMessages";

export default function AirQuality() {
  const { weatherData } = useWeather();
  const [seeMore, setSeeMore] = useState(false);

  if (!weatherData) return null;

  const { air_quality: airQuality } = weatherData.current;
  const gbDefraIndex = airQuality["gb-defra-index"];

  const seeMoreText = seeMore ? "Ver menos" : "Ver mais";
  const chevronName = seeMore ? "chevron-up" : "chevron-down";

  return (
    <View style={styles.airQualityContainer}>
      <AirQualityMessages index={gbDefraIndex} />

      <View style={styles.line} />

      <View style={styles.seeMoreContainer}>
        <Text style={styles.seeMoreText}>{seeMoreText}</Text>
        <Pressable onPress={() => setSeeMore(!seeMore)}>
          <Ionicons name={chevronName} size={18} color="#f3f3f3" />
        </Pressable>
      </View>

      {seeMore && (
        <View style={styles.airQualityDataContainer}>
          <AirQualityItem text="GB Defra Index" value={gbDefraIndex} />
          <View style={styles.airQualityData}>
            {[
              { text: "PM2.5", value: airQuality.pm2_5 },
              { text: "PM10", value: airQuality.pm10 },
              { text: "SO2", value: airQuality.so2 },
              { text: "NO2", value: airQuality.no2 },
              { text: "O3", value: airQuality.o3 },
              { text: "CO", value: airQuality.co },
            ].map(({ text, value }) => (
              <AirQualityItem key={text} text={text} value={value} />
            ))}
          </View>
        </View>
      )}
    </View>
  );
}
