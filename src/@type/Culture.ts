import features from "assets/img/illusts/feature";

export interface CultureType {
  image: keyof typeof features;
  title: string;
  subtitle: string;
  description: string;
}
