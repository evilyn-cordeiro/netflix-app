import React from "react";
import { View, Text, FlatList } from "react-native";
import { useRouter } from "expo-router"; // 👈 Aqui
import { styles } from "./profile.styles";
import { Header, ProfileCard } from "@/src/components";

type Profile = { id: string; name: string; image: number };

const profiles: Profile[] = [
  { id: "1", name: "Meggie", image: require("../../../assets/profile-photo-1.png") },
  { id: "2", name: "Michonne", image: require("../../../assets/profile-photo-2.png") },
  { id: "3", name: "Rick", image: require("../../../assets/profile-photo-3.png") },
  { id: "4", name: "Nigan", image: require("../../../assets/profile-photo-4.png") },
  { id: "5", name: "Carol", image: require("../../../assets/profile-photo-4.png") },
];

export default function ProfileScreen() {
  const router = useRouter(); // 👈 Aqui

  const renderItem = ({ item }: { item: Profile }) => (
    <ProfileCard
      name={item.name}
      image={item.image}
      onPress={() => router.push("/home")} // 👈 Aqui
    />
  );

  const handleEditPress = () => {
    console.log("Editar perfil clicado");
  };

  return (
    <View style={styles.container}>
      <Header onEditPress={handleEditPress} />
      <Text style={styles.title}>Who’s Watching?</Text>
      <FlatList
        data={profiles}
        numColumns={2}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.profileList}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
