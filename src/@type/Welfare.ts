import features from "assets/img/illusts/feature";

export interface WelfareType {
  title: string;
  content: string;
  img: keyof typeof features;
}
