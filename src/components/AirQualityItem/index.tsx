import { View, Text } from "react-native";
import { styles } from "./styles";

interface AirQualityItemProps {
  text: string;
  value: number | undefined;
}

export default function AirQualityItem({ text, value }: AirQualityItemProps) {
  return (
    <Text style={styles.airQualityItem}>
      {text}: <Text style={styles.value}>{value}</Text>
    </Text>
  );
}
