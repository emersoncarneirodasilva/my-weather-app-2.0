import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  airQualityContainer: {
    rowGap: 10,
    marginTop: 20,
    marginHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.35)",
    backgroundColor: "#c7c7c7b2",
  },
  line: {
    width: "100%",
    height: 0.7,
    backgroundColor: "#f3f3f3",
  },
  seeMoreContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  seeMoreText: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 16,
    color: "#f3f3f3",
  },
  airQualityDataContainer: {
    marginTop: 10,
    paddingHorizontal: 20,
    rowGap: 10,
  },
  gbDefraIndex: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 16,
    color: "#f3f3f3",
  },
  airQualityData: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});
