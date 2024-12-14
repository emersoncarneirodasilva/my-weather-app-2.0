import { useState, useRef } from "react";
import {
  SafeAreaView,
  ScrollView,
  NativeSyntheticEvent,
  NativeScrollEvent,
  ImageBackground,
} from "react-native";
import { useFonts } from "@expo-google-fonts/poppins";
import styles from "./styles";
import { useWeather } from "../contexts/WeatherContext";
import { useBackgroundImage } from "../hooks/useBackgroundImage";
import { POPPINS_FONTS } from "../constants/fonts";
import { calculateOpacity } from "../utils/opacityUtils";
import Loading from "../components/Loading";
import Search from "../components/Search";
import CurrentWeatherDisplay from "../components/CurrentWeatherDisplay";
import ContainerWithData from "../components/ContainerWithData";

export default function Index() {
  const { weatherData, loading } = useWeather();
  const [fontsLoaded] = useFonts(POPPINS_FONTS);
  const [containerOpacity, setContainerOpacity] = useState<number>(0.6);
  const isScrolling = useRef(false); // Referência para verificar se o usuário está rolando

  const backgroundImage = useBackgroundImage(
    weatherData?.current?.condition.text ?? "",
    weatherData?.current?.is_day ?? 1
  );

  // Usar requestAnimationFrame para evitar renderizações excessivas
  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    event.persist(); // Previne que o evento seja "limpo" (nullified)

    if (!isScrolling.current) {
      requestAnimationFrame(() => {
        setContainerOpacity(calculateOpacity(event)); // Atualiza a opacidade
        isScrolling.current = false;
      });
      isScrolling.current = true; // Marca que está rolando
    }
  };

  if (!fontsLoaded || loading || !weatherData) {
    return <Loading />;
  }

  return (
    <ImageBackground
      source={backgroundImage}
      style={styles.backgroundContainer}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.container}>
        <Search />
        <ScrollView onScroll={handleScroll} scrollEventThrottle={16}>
          <CurrentWeatherDisplay />
          <ContainerWithData containerOpacity={containerOpacity} />
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}
