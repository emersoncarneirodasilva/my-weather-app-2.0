import React, { useMemo } from "react";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./styles";
import { airQualityDescriptors } from "@/src/constants/airQualityDescriptors";

interface AirQualityMessagesProps {
  index: number;
}

// Função auxiliar para encontrar a mensagem atual
const getCurrentMessage = (index: number) => {
  return airQualityDescriptors.find(
    ({ range }) => index >= range[0] && index <= range[1]
  );
};

export default function AirQualityMessages({ index }: AirQualityMessagesProps) {
  const currentMessage = useMemo(() => getCurrentMessage(index), [index]);

  if (!currentMessage) return null;

  return (
    <>
      <View style={styles.airQualityTitleContainer}>
        <Ionicons name="leaf" size={20} color="#f3f3f3" />
        <Text style={styles.airQualityTitle}>{currentMessage.title}</Text>
      </View>
      <Text style={styles.airQualityText}>{currentMessage.description}</Text>
    </>
  );
}
