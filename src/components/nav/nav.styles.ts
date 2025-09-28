import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    backgroundColor: "#000",
    borderTopWidth: 1,
    borderTopColor: "#222",
    paddingTop: 10,
    justifyContent: "space-around",
    zIndex: 100,
  },
  tabButton: {
    alignItems: "center",
  },
  tabText: {
    fontSize: 12,
    color: "#888",
    marginTop: 4,
  },
  tabTextActive: {
    color: "#fff",
    fontWeight: "bold",
  },
});
