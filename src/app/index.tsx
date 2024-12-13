import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from "react-native";
import { useFonts } from "@expo-google-fonts/poppins";
import styles from "./styles";
import { POPPINS_FONTS } from "../constants/fonts";
import { useWeather } from "../contexts/WeatherContext";
import { calculateOpacity } from "../utils/opacityUtils";
import Loading from "../components/Loading";
import Search from "../components/Search";
import CurrentWeatherDisplay from "../components/CurrentWeatherDisplay";
import ContainerWithData from "../components/ContainerWithData";

export default function Index() {
  const { loading } = useWeather();
  const [fontsLoaded] = useFonts(POPPINS_FONTS);
  const [containerOpacity, setContainerOpacity] = useState<number>(0.6);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    setContainerOpacity(calculateOpacity(event));
  };

  if (!fontsLoaded) {
    return null;
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Search />
      <ScrollView onScroll={handleScroll} scrollEventThrottle={16}>
        <CurrentWeatherDisplay />
        <ContainerWithData containerOpacity={containerOpacity} />
      </ScrollView>
    </SafeAreaView>
  );
}
