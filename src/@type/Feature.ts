import illusts from "assets/img/illusts";

export interface FeatureType {
  title: string;
  subtitle: string;
  description: string;
  image: keyof typeof illusts;
}
