import illusts from "assets/img/illusts";

export interface EducationFeatureType {
  index?: number;
  title: string;
  content: string;
  img: keyof typeof illusts;
}
