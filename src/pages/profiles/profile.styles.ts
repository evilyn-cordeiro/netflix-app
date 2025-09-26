import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingTop: 10,
    paddingHorizontal: 20,
    alignItems: "center"
  },
  title: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "400",
    marginTop: 20,
    marginBottom: 25,
    textAlign: "center",
  },
  profileList: {
    justifyContent: "center",
    alignItems: "flex-start",
  },
  profileItem: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    maxWidth: 180,
    margin: 10,
    backgroundColor: "blue",
  },
  name: {
    color: "#fff",
    marginLeft: 10,
    fontSize: 16,
  },
});
