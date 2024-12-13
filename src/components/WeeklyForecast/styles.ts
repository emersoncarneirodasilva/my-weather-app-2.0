import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  ThreeDayForecastContainer: {
    marginTop: 20,
  },
  sectionTitle: {
    flexDirection: "row",
    columnGap: 7,
    paddingHorizontal: 20,
  },
  title: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 17,
    marginBottom: 15,
    color: "#f3f3f3",
  },
  scrollViewContent: {
    paddingHorizontal: 20,
  },
  forecastDay: {
    borderRadius: 10,
    marginBottom: 10,
  },
  forecastContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 10,
    borderTopWidth: 0.5,
    borderTopColor: "#f3f3f3",
  },
  forecastDate: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 16,
    width: 120,
    color: "#f3f3f3",
  },
  rainChanceAndTempContainer: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 2,
  },
  rainChanceText: {
    fontFamily: "Poppins_400Regular",
    color: "#f3f3f3",
  },
  tempText: {
    fontFamily: "Poppins_400Regular",
    color: "#f3f3f3",
  },
  forecastIcon: {
    width: 50,
    height: 50,
  },
});
