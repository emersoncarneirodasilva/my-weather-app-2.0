import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  detailCard: {
    justifyContent: "space-between",
    width: "48%",
    height: 170,
    padding: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.35)",
    backgroundColor: "#c7c7c7b2",
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 10,
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  titleText: {
    fontFamily: "Poppins_500Medium",
    fontSize: 18,
    color: "#f3f3f3",
  },
  velueText: {
    fontFamily: "Poppins_500Medium",
    fontSize: 24,
  },
  text: {
    textAlign: "center",
    fontFamily: "Poppins_500Medium",
    fontSize: 16,
    color: "#f3f3f3",
  },
});
