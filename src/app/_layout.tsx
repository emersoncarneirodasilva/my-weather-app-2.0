import { Stack } from "expo-router";
import { WeatherProvider } from "../contexts/WeatherContext";

export default function RootLayout() {
  return (
    <WeatherProvider>
      <Stack
        screenOptions={{
          headerShown: false,
          statusBarBackgroundColor: "#000",
          // statusBarBackgroundColor: "#d9d9d9cc",
        }}
      />
    </WeatherProvider>
  );
}
