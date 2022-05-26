import illusts from "assets/img/illusts";

export interface CodeTogetherFeatureType {
  title: string;
  img: keyof typeof illusts;
  descriptions: string[];
}
