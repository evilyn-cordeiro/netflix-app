import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./home.styles";
import BottomNavigation from "@/src/components/nav/nav.component";

type Tab = "TV SHOWS" | "MOVIES" | "CATEGORIES";

const tabs: Tab[] = ["TV SHOWS", "MOVIES"];
const categories = ["ACTION", "COMEDY", "DRAMA"];

const featuredBanner = require("../../../assets/banner.jpg");

const carouselsData = {
  "TV SHOWS": [
    { id: "1", title: "Show 1", image: require("../../../assets/movie.png") },
    { id: "2", title: "Show 2", image: require("../../../assets/movie.png") },
    { id: "2", title: "Show 2", image: require("../../../assets/movie.png") },
    { id: "2", title: "Show 2", image: require("../../../assets/movie.png") },
    { id: "2", title: "Show 2", image: require("../../../assets/movie.png") },
    { id: "2", title: "Show 2", image: require("../../../assets/movie.png") },
    { id: "2", title: "Show 2", image: require("../../../assets/movie.png") },
    { id: "2", title: "Show 2", image: require("../../../assets/movie.png") },
    { id: "2", title: "Show 2", image: require("../../../assets/movie.png") },
    { id: "2", title: "Show 2", image: require("../../../assets/movie.png") },
    { id: "2", title: "Show 2", image: require("../../../assets/movie.png") },
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
  const [selectedTab, setSelectedTab] = useState<Tab>("TV SHOWS");
  const [activeTab, setActiveTab] = useState<
    "Home" | "Downloads" | "Search" | "More"
  >("Home");
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#000" }}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      >
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

        {/* CARROSSEL */}
        <FlatList
          data={carouselsData[selectedTab]}
          keyExtractor={(item) => item.id}
          horizontal
          contentContainerStyle={{ paddingBottom: 80 }}
          showsHorizontalScrollIndicator={false}
          style={styles.carousel}
          renderItem={({ item }) => (
            <View style={styles.carouselItem}>
              <Image source={item.image} style={styles.carouselImage} />
              <Text style={styles.carouselTitle}>{item.title}</Text>
            </View>
          )}
        />
      </ScrollView>

      <BottomNavigation activeTab={activeTab} onTabPress={setActiveTab} />
    </SafeAreaView>
  );
}
