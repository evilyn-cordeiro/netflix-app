import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./extras.styles";

export default function LoginExtras() {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text style={styles.clickableText}>Need help?</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.clickableText}>New to Netflix? Sign up now.</Text>
      </TouchableOpacity>

      <View style={{ height: 40 }} />

      <Text style={styles.infoText}>
        Sign in is protected by Google{"\n"}
        reCAPTCHA to ensure you’re not a bot.{"\n"}
        <Text style={styles.learnMore}>Learn more.</Text>
      </Text>
    </View>
  );
}

