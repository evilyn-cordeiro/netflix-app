import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { styles } from "./header.styles";

interface HeaderProps {
  onEditPress: () => void;
}

export default function Header({ onEditPress }: HeaderProps) {
  return (
    <View style={styles.container}>
      <View style={styles.sideSpace} />
      <Image
        source={require("../../../assets/logo-netflix.png")}
        style={styles.logo}
        resizeMode="contain"
      />
      <TouchableOpacity style={styles.editButton} onPress={onEditPress}>
        <Feather name="edit-2" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}
