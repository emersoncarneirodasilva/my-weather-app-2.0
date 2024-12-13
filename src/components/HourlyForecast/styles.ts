import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  forecastContainer: {
    marginVertical: 30,
    marginHorizontal: 2,
  },
  flatListContent: {
    alignItems: "center",
    justifyContent: "center",
  },
  forecastDay: {
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 10,
    marginRight: 5,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.35)",
    backgroundColor: "#c7c7c7b2",
  },
  selectedForecastDay: {
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 10,
    marginRight: 5,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.35)",
    backgroundColor: "#72b996",
  },
  hours: {
    fontFamily: "Poppins_600SemiBold",
    color: "#F3F3F3",
  },
  forecastIcon: {
    width: 50,
    height: 50,
    marginTop: 5,
  },
  chanceOfRain: {
    color: "#006fd5",
  },
  temp: {
    fontFamily: "Poppins_300Light",
    fontSize: 16,
    color: "#F3F3F3",
  },
});
