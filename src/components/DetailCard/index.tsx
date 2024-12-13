import { ReactNode } from "react";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./styles";

type IoniconName =
  | "sunny-outline"
  | "water-outline"
  | "leaf-outline"
  | "rainy-outline"
  | "thermometer-outline"
  | "speedometer-outline"
  | "arrow-up-outline"
  | "moon-outline";

interface DetailCardProps {
  icon: IoniconName;
  title: string;
  value: string | number | ReactNode;
  unit?: string;
  description: string;
  marginBottom?: number;
}

export default function DetailCard({
  icon,
  title,
  value,
  unit,
  description,
  marginBottom = 0,
}: DetailCardProps) {
  return (
    <View style={styles.detailCard}>
      <View style={styles.titleContainer}>
        <Ionicons name={icon} size={24} color="#f3f3f3" />
        <Text style={styles.titleText}>{title}</Text>
      </View>
      <View style={styles.contentContainer}>
        <Text
          style={{
            textAlign: "center",
            fontFamily: "Poppins_500Medium",
            fontSize: 36,
            color: "#f3f3f3",
            marginBottom: marginBottom,
          }}
        >
          {value}
          {unit && <Text style={styles.velueText}>{unit}</Text>}
        </Text>
        <Text style={styles.text}>{description}</Text>
      </View>
    </View>
  );
}
