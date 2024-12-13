import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  WeatherForecastContainer: {
    marginTop: 40,
    marginBottom: 20,
    borderTopStartRadius: 35,
    borderTopEndRadius: 35,
  },
  littleLine: {
    alignSelf: "center",
    width: "18%",
    height: 5,
    marginTop: 15,
    borderRadius: 10,
    backgroundColor: "#f3f3f399",
  },
  HourAndWeeklyForecastContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginVertical: 10,
  },
  forecastText: {
    color: "#f3f3f3",
  },
  selectedForecast: {
    fontFamily: "Poppins_600SemiBold",
  },
  unselectedForecast: {
    fontFamily: "Poppins_400Regular",
  },
  line: {
    width: "100%",
    height: 0.7,
    backgroundColor: "#f3f3f3",
  },
});
