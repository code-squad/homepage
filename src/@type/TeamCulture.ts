import features from "assets/img/illusts/feature";

interface TeamCultureFeatureType {
  subtitle: string;
  description: string;
}

export interface TeamCultureType {
  title: string;
  image: keyof typeof features;
  cultureFeatures: TeamCultureFeatureType[];
}
