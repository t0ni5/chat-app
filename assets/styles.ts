import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  loginScreen: {
    flex: 1,
    backgroundColor: "#EEF1FF",
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
    width: "100%",
  },
  loginHeading: {
    fontSize: 26,
    marginBottom: 10,
  },
  loginInputContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  loginInput: {
    borderWidth: 1,
    width: "90%",
    padding: 8,
    borderRadius: 2,
  },
  loginButton: {
    backgroundColor: "darkblue",
    padding: 12,
    marginVertical: 10,
    width: "60%",
    borderRadius: 50,
    elevation: 1,
  },
  loginButtonText: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "600",
  },
  chatScreen: {
    backgroundColor: "#F7F7F7",
    flex: 1,
    padding: 10,
    position: "relative",
  },
  chatHeading: {
    fontSize: 24,
    fontWeight: "bold",
    color: "green",
  },
  chatTopContainer: {
    backgroundColor: "#F7F7F7",
    height: 70,
    width: "100%",
    padding: 20,
    justifyContent: "center",
    marginBottom: 15,
    elevation: 2,
  },
  chatHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  chatListContainer: {
    paddingHorizontal: 10,
  },
  chatEmptyContainer: {
    width: "100%",
    height: "80%",
    alignItems: "center",
    justifyContent: "center",
  },
  chatEmptyText: { fontWeight: "bold", fontSize: 24, paddingBottom: 30 },
  messagingScreen: {
    flex: 1,
  },
  messagingInputContainer: {
    width: "100%",
    minHeight: 100,
    backgroundColor: "white",
    paddingVertical: 30,
    paddingHorizontal: 15,
    justifyContent: "center",
    flexDirection: "row",
  },
  messagingInput: {
    borderWidth: 1,
    padding: 15,
    flex: 1,
    marginRight: 10,
    borderRadius: 20,
  },
  messagingButtonContainer: {
    width: "30%",
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },
  modalButton: {
    width: "40%",
    height: 45,
    backgroundColor: "green",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
  },
  modalButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  modalText: {
    color: "#fff",
  },
  modalContainer: {
    width: "100%",
    borderTopColor: "#ddd",
    borderTopWidth: 1,
    elevation: 1,
    height: 400,
    backgroundColor: "#fff",
    position: "absolute",
    bottom: 0,
    zIndex: 10,
    paddingVertical: 50,
    paddingHorizontal: 20,
  },
  modalInput: {
    borderWidth: 2,
    padding: 15,
  },
  modalSubheading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  },
  chatItemWrapper: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 5,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
    height: 80,
    marginBottom: 10,
  },
  chatItemAvatar: {
    marginRight: 12,
  },
  chatItemUsername: {
    fontSize: 18,
    marginBottom: 5,
    fontWeight: "bold",
  },
  chatItemMessage: {
    fontSize: 14,
    opacity: 0.7,
  },
  chatItemRightContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
  },
  chatItemTime: {
    opacity: 0.5,
  },
  chatItemContextMenu: {
    position: "absolute",
    backgroundColor: "white",
    padding: 16,
    borderRadius: 8,
    elevation: 5,
  },
});
