import features from "assets/img/illusts/feature";

export interface FeatureType {
  title: string;
  subtitle: string;
  description: string;
  image: keyof typeof features;
}
