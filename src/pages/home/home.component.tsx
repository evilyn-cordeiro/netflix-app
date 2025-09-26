import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Dimensions,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Ionicons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

type Tab = "TV SHOWS" | "MOVIES" | "CATEGORIES";

const tabs: Tab[] = ["TV SHOWS", "MOVIES"];
const categories = ["Action", "Comedy", "Drama"];

const featuredBanner = require("../../../assets/banner.jpg");

const carouselsData = {
  "TV SHOWS": [
    { id: "1", title: "Show 1", image: require("../../../assets/movie.png") },
    { id: "2", title: "Show 2", image: require("../../../assets/movie.png") },
  ],
  MOVIES: [
    { id: "1", title: "Movie 1", image: require("../../../assets/movie.png") },
    { id: "2", title: "Movie 2", image: require("../../../assets/movie.png") },
  ],
  CATEGORIES: [
    { id: "1", title: "Cat 1", image: require("../../../assets/movie.png") },
    { id: "2", title: "Cat 2", image: require("../../../assets/movie.png") },
  ],
};

export default function HomeScreen() {
  const [selectedTab, setSelectedTab] = React.useState<Tab>("TV SHOWS");
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../../../assets/favicon.png")}
          style={styles.logo}
        />
        <View style={styles.headerRight}>
          <Image
            source={require("../../../assets/profile-photo-1.png")}
            style={styles.avatar}
          />
          <TouchableOpacity style={{ marginLeft: 15 }}>
            <Ionicons name="search" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>

      {/* TAB NAV */}
      <View style={styles.tabNav}>
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab}
            onPress={() => setSelectedTab(tab)}
            style={[
              styles.tabItem,
              selectedTab === tab && styles.tabItemActive,
            ]}
          >
            <Text
              style={
                selectedTab === tab ? styles.tabTextActive : styles.tabText
              }
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}

        {/* Select para categorias */}
        <Picker
          selectedValue={selectedCategory}
          style={styles.picker}
          dropdownIconColor="#fff"
          onValueChange={(itemValue: any) => setSelectedCategory(itemValue)}
          mode="dropdown"
        >
          {categories.map((cat) => (
            <Picker.Item key={cat} label={cat} value={cat} />
          ))}
        </Picker>
      </View>

      {/* BANNER */}
      <View style={styles.bannerContainer}>
        <Image
          source={featuredBanner}
          style={styles.bannerImage}
          resizeMode="cover"
        />
        <View style={styles.bannerButtons}>
          <TouchableOpacity style={styles.bannerButton}>
            <Ionicons name="add" size={24} color="#fff" />
            <Text style={styles.bannerButtonText}>Minha Lista</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.playButton}>
            <Ionicons name="play" size={24} color="#000" />
            <Text style={styles.playButtonText}>Play</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bannerButton}>
            <Ionicons name="information-circle" size={24} color="#fff" />
            <Text style={styles.bannerButtonText}>Info</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* CARROSSEIS */}
      <FlatList
        data={carouselsData[selectedTab]}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.carousel}
        renderItem={({ item }) => (
          <View style={styles.carouselItem}>
            <Image source={item.image} style={styles.carouselImage} />
            <Text style={styles.carouselTitle}>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#000", paddingTop: 40 },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  logo: {
    width: 100,
    height: 30,
    resizeMode: "contain",
  },
  headerRight: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  tabNav: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  tabItem: {
    marginHorizontal: 10,
    paddingBottom: 5,
    borderBottomWidth: 2,
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
    color: "#fff",
  },
  bannerContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  bannerImage: {
    width: width - 40,
    height: 180,
    borderRadius: 10,
    marginBottom: 10,
  },
  bannerButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: width - 40,
  },
  bannerButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#333",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  bannerButtonText: {
    color: "#fff",
    marginLeft: 6,
    fontWeight: "bold",
  },
  playButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#e50914",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 5,
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
