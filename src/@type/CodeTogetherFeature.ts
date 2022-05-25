import illusts from "assets/img/illusts";

export interface CodeTogetherFeatureType {
  index?: number;
  title: string;
  img: keyof typeof illusts;
  descriptions: string[];
}
