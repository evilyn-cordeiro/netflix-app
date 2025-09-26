import React from "react";
import { View, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./login.styles";
import { Button, Input, LoginExtras } from "@/src/components";

export default function LoginScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          {" "}
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Image
          source={require("../../../assets/logo-netflix.png")}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      <Input placeholder="Email or phone number" />
      <Input placeholder="Password" />
      <Button title="Sign in" onPress={() => router.push("/profile")} />{" "}
      <LoginExtras />
    </View>
  );
}
