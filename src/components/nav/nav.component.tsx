import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./nav.styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type NavigationTab = "Home" | "Downloads" | "Search" | "More";

interface Props {
  activeTab: NavigationTab;
  onTabPress: (tab: NavigationTab) => void;
}

export default function BottomNavigation({ activeTab, onTabPress }: Props) {
  const insets = useSafeAreaInsets();

  const tabs: { name: NavigationTab; icon: keyof typeof Ionicons.glyphMap }[] =
    [
      { name: "Home", icon: "home" },
      { name: "Search", icon: "search" },
      { name: "Downloads", icon: "download" },
      { name: "More", icon: "ellipsis-horizontal" },
    ];

  return (
    <View style={[styles.container, { paddingBottom: insets.bottom }]}>
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab.name}
          onPress={() => onTabPress(tab.name)}
          style={styles.tabButton}
        >
          <Ionicons
            name={tab.icon}
            size={24}
            color={activeTab === tab.name ? "#fff" : "#888"}
          />
          <Text
            style={[
              styles.tabText,
              activeTab === tab.name && styles.tabTextActive,
            ]}
          >
            {tab.name}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
