import illusts from "assets/img/illusts";

export interface WelfareType {
  title: string;
  content: string;
  img: keyof typeof illusts;
}
