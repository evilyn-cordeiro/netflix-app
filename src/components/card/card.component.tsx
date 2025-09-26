import React from "react";
import { TouchableOpacity, Text, Image } from "react-native";
import { styles } from "./card.styles";

interface ProfileCardProps {
  name: string;
  image: number;
  onPress: () => void;
}

export default function ProfileCard({
  name,
  image,
  onPress,
}: ProfileCardProps) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={image} style={styles.avatar} />
      <Text style={styles.name}>{name}</Text>
    </TouchableOpacity>
  );
}
