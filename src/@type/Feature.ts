import images from "assets/images";

export interface FeatureType {
  title: string;
  subtitle: string;
  description: string;
  image: keyof typeof images;
}
