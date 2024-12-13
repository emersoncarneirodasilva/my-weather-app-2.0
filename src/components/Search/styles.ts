import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  searchConteiner: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 40,
    marginBottom: 15,
    marginHorizontal: 20,
  },
  localization: {
    fontFamily: "Poppins_400Regular",
    fontSize: 18,
    color: "#f3f3f3",
  },

  // Modal
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContainer: {
    width: "90%",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 18,
    fontFamily: "Poppins_500Medium",
    marginBottom: 15,
  },
  searchInput: {
    width: "100%",
    padding: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#ccc",
  },
  modalButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  modalButtonCancel: {
    flex: 1,
    marginRight: 10,
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  modalButtonSearch: {
    flex: 1,
    padding: 10,
    borderRadius: 8,
    backgroundColor: "#1e66eb",
  },
  modalButtonCancelText: {
    textAlign: "center",
    color: "black",
  },
  modalButtonSearchText: {
    textAlign: "center",
    color: "white",
  },
});
