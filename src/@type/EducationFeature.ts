import features from "assets/img/illusts/feature";

export interface EducationFeatureType {
  title: string;
  content: string;
  img: keyof typeof features;
}
