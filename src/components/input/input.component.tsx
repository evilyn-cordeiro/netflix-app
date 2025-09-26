import React from "react";
import { TextInput, TextInputProps } from "react-native";
import { styles } from "./input.styles";

interface InputProps extends TextInputProps {
  // Aqui você pode adicionar props extras se quiser
}

export default function Input(props: InputProps) {
  return <TextInput style={styles.input} {...props} />;
}


