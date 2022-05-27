import illusts from "assets/img/illusts";

export interface EducationFeatureType {
  title: string;
  content: string;
  img: keyof typeof illusts;
}
