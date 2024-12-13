import { ActivityIndicator, View } from "react-native";
import { styles } from "./styles";

export default function Loading() {
  return (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size={45} color="#1e66eb" />
    </View>
  );
}
