import React from "react";
import { View, Text, Image, FlatList } from "react-native";
import { styles } from "./carousel.style";
import { CarouselItem } from "@/src/utils/banners";

type CarouselProps = {
  title: string;
  data: CarouselItem[];
};

export default function Carousel({ title, data }: CarouselProps) {
  return (
    <View style={styles.carouselWrapper}>
      <Text style={styles.carouselTitle}>{title}</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingVertical: 10 }}
        renderItem={({ item }) => (
          <View style={styles.carouselItem}>
            <Image source={item.image} style={styles.carouselImage} />
          </View>
        )}
      />
    </View>
  );
}
