import React from "react";
import { TouchableOpacity, Text, TouchableOpacityProps } from "react-native";
import { styles } from "./button.styles";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

export default function Button({ title, style, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity style={[styles.button, style]} {...rest}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}
