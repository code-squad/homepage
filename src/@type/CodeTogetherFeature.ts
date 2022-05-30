import features from "assets/img/illusts/feature";

export interface CodeTogetherFeatureType {
  title: string;
  img: keyof typeof features;
  descriptions: string[];
}
