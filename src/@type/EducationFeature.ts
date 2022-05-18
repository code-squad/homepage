import images from "assets/images";

export interface EducationFeatureType {
  index?: number;
  title: string;
  content: string;
  img: keyof typeof images;
}
