import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  currentWeatherContainer: {
    rowGap: 50,
    marginHorizontal: 20,
    marginVertical: 60,
  },
  currentWeatherContain: {},
  currentTempContain: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  currentTemp: {
    fontFamily: "Poppins_500Medium",
    fontSize: 86,
    marginBottom: -20,
    color: "#f3f3f3",
  },
  currentFeelslike: {
    fontFamily: "Poppins_400Regular",
    fontSize: 16,
    color: "#F3F3F3",
  },
  currentWeatherConditionContain: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  currentWeatherIcon: {
    width: 100,
    height: 100,
    marginTop: 15,
  },
  currentConditionText: {
    textAlign: "center",
    fontFamily: "Poppins_400Regular",
    fontSize: 14,
    width: 100,
    color: "#F3F3F3",
  },
  currentDay: {
    fontFamily: "Poppins_500Medium",
    color: "#F3F3F3",
  },
});
