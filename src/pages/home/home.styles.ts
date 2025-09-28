import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#000", paddingTop: 40 },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  logo: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
  headerRight: {
    flexDirection: "row",
    gap: 15,
    alignItems: "center",
  },
  avatar: {
    width: 25,
    height: 25,
  },
  tabNav: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  tabItem: {
    flex: 1,
    marginHorizontal: 10,
    paddingBottom: 5,
    borderBottomWidth: 2,
    alignItems: "center",
    borderBottomColor: "transparent",
  },
  tabItemActive: {
    borderBottomColor: "#e50914",
  },
  tabText: {
    color: "#ccc",
    fontWeight: "bold",
    fontSize: 16,
  },
  tabTextActive: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  picker: {
    flex: 1,
    paddingBottom: 4,
    color: "#ccc",
    fontWeight: "bold",
    fontSize: 16,
    borderWidth: 0,
    backgroundColor: "#000",
  },
  bannerContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  bannerImage: {
    width: "90%",
    height: 450,
    borderRadius: 4,
    marginBottom: 10,
  },
  bannerButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    gap: 14,
  },
  bannerButton: {
    flexDirection: "column",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 2,
  },
  bannerButtonText: {
    color: "#fff",
    marginLeft: 6,
    fontWeight: "bold",
  },
  playButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 2,
  },
  playButtonText: {
    color: "#000",
    marginLeft: 6,
    fontWeight: "bold",
    fontSize: 16,
  },
  carousel: {
    paddingLeft: 20,
  },
  carouselItem: {
    marginRight: 15,
    width: 120,
  },
  carouselImage: {
    width: 120,
    height: 160,
    borderRadius: 8,
  },
  carouselTitle: {
    color: "#fff",
    marginTop: 5,
    fontWeight: "bold",
  },
});
