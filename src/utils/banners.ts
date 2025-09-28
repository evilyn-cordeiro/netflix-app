// Definição do item de carrossel
export type CarouselItem = {
  id: string;
  image: number;
};

export type CarouselTab = "TV SHOWS" | "MOVIES" | "CATEGORIES";

export type CarouselsData = Record<CarouselTab, CarouselItem[]>;
export const carouselsData: CarouselsData = {
  "TV SHOWS": [
    { id: "1", image: require("../../assets/movie-1.png") },
    { id: "2", image: require("../../assets/movie-2.png") },
    { id: "3", image: require("../../assets/movie-4.png") },
    { id: "4", image: require("../../assets/movie-5.png") },
    { id: "6", image: require("../../assets/movie-7.png") },
    { id: "7", image: require("../../assets/movie-8.png") },
  ],
  "MOVIES": [
    { id: "1", image: require("../../assets/movie.png") },
    {
      id: "2",

      image: require("../../assets/movie-2.png"),
    },
  ],
  "CATEGORIES": [
    { id: "1", image: require("../../assets/movie-3.png") },
    { id: "2", image: require("../../assets/movie-4.png") },
  ],
};
