import { View, Text, Image } from "react-native";
import { weekDays } from "../../constants/weekDays";
import { useWeather } from "../../contexts/WeatherContext";
import { styles } from "./styles";

export default function CurrentWeatherDisplay() {
  const { weatherData } = useWeather();
  const localTime = new Date(weatherData!.location.localtime);
  const dayOfWeek = weekDays[localTime.getDay()];
  const localData = localTime.toLocaleDateString();

  return (
    <View style={styles.currentWeatherContainer}>
      <View style={styles.currentWeatherContain}>
        <View style={styles.currentTempContain}>
          <Text style={styles.currentTemp}>
            {Math.round(weatherData!.current.temp_c)}°
          </Text>
          <Image
            source={{ uri: `https:${weatherData?.current.condition.icon}` }}
            style={styles.currentWeatherIcon}
          />
        </View>

        <View style={styles.currentWeatherConditionContain}>
          <Text style={styles.currentFeelslike}>
            Sensação: {Math.round(weatherData!.current.feelslike_c)}°
          </Text>
          <Text style={styles.currentConditionText}>
            {weatherData?.current.condition.text}
          </Text>
        </View>
      </View>

      <Text style={styles.currentDay}>
        {dayOfWeek}, {localData}
      </Text>
    </View>
  );
}
