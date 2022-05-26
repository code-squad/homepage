import illusts from "assets/img/illusts";

export interface WelfareType {
  index?: number;
  title: string;
  content: string;
  img: keyof typeof illusts;
}
