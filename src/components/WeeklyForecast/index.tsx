import { Text, View, Image, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./styles";
import { useWeather } from "@/src/contexts/WeatherContext";
import { weekDays } from "@/src/constants/weekDays";

export default function WeeklyForecast() {
  const { weatherData } = useWeather();

  const getNextDayIndex = (currentDay: number) => {
    // Usa o operador módulo para "girar" os dias da semana
    return (currentDay + 1) % 7;
  };

  return (
    <View style={styles.ThreeDayForecastContainer}>
      <View style={styles.sectionTitle}>
        <Ionicons name="calendar-outline" size={22} color="#f3f3f3" />
        <Text style={styles.title}>Previsão 3 Dias</Text>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}
      >
        {weatherData?.forecast.forecastday.map((day, index) => (
          <View key={index} style={styles.forecastDay}>
            <View style={styles.forecastContent}>
              <Text style={styles.forecastDate}>
                {weekDays[getNextDayIndex(new Date(day.date).getDay())]}
              </Text>
              <Image
                source={{ uri: `https:${day.day.condition.icon}` }}
                style={styles.forecastIcon}
              />

              <View style={styles.rainChanceAndTempContainer}>
                <Ionicons name="water-outline" size={18} color="#0087d5" />
                <Text style={styles.rainChanceText}>
                  {day.day.daily_chance_of_rain}%
                </Text>
              </View>

              <View style={styles.rainChanceAndTempContainer}>
                <Ionicons
                  name="thermometer-outline"
                  size={18}
                  color="#cf640c"
                />
                <Text style={styles.tempText}>
                  {Math.round(day.day.maxtemp_c)}° /{" "}
                  {Math.round(day.day.mintemp_c)}°
                </Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
