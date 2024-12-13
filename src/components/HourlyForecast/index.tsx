import { useEffect, useRef, useState } from "react";
import {
  FlatList,
  Text,
  View,
  Image,
  ListRenderItem,
  Dimensions,
} from "react-native";
import { styles } from "./styles";
import { useWeather } from "@/src/contexts/WeatherContext";

interface HourData {
  time: string;
  condition: {
    icon: string;
  };
  chance_of_rain: number;
  temp_c: number;
}

const SCREEN_WIDTH = Dimensions.get("window").width;
const ITEM_WIDTH = 80; // Largura aproximada de cada item da lista

export default function HourlyForecast() {
  const { weatherData } = useWeather();
  const flatListRef = useRef<FlatList<HourData>>(null);

  const [currentHourIndex, setCurrentHourIndex] = useState<number>(0);

  // Dados de previsão horária
  const hourlyData: HourData[] =
    weatherData?.forecast.forecastday[0].hour || [];

  // Função para centralizar o item selecionado
  const centerSelectedItem = (index: number) => {
    if (flatListRef.current) {
      // Calcula a posição para centralizar o item
      const offsetX =
        index * ITEM_WIDTH - SCREEN_WIDTH / 2 + ITEM_WIDTH / 2 - 35;

      flatListRef.current.scrollToOffset({
        offset: offsetX,
        animated: true,
      });
    }
  };

  // Atualiza o índice da hora atual e rola até o item correspondente
  useEffect(() => {
    if (!weatherData?.location.localtime) return;

    const now = new Date(weatherData.location.localtime);
    const currentIndex = hourlyData.findIndex((hour) => {
      const hourDate = new Date(hour.time || "");
      return hourDate.getHours() === now.getHours();
    });

    if (currentIndex !== -1) {
      setCurrentHourIndex(currentIndex);
      centerSelectedItem(currentIndex);
    }
  }, [hourlyData, weatherData?.location.localtime]);

  // Renderiza cada item da lista
  const renderForecastItem: ListRenderItem<HourData> = ({ item, index }) => {
    const isSelected = index === currentHourIndex;
    const itemTime = new Date(item.time || "");

    return (
      <View
        style={[styles.forecastDay, isSelected && styles.selectedForecastDay]}
      >
        <Text style={styles.hours}>{itemTime.getHours()}:00</Text>
        <Image
          source={{ uri: `https:${item.condition.icon}` }}
          style={styles.forecastIcon}
        />
        <Text style={styles.chanceOfRain}>{item.chance_of_rain}%</Text>
        <Text style={styles.temp}>{Math.round(item.temp_c)}°</Text>
      </View>
    );
  };

  return (
    <View style={styles.forecastContainer}>
      <FlatList
        ref={flatListRef}
        data={hourlyData}
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderForecastItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.flatListContent}
        getItemLayout={(_, index) => ({
          length: ITEM_WIDTH,
          offset: ITEM_WIDTH * index,
          index,
        })}
      />
    </View>
  );
}
