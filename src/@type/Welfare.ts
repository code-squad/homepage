import blocks from "assets/images/blocks";

export interface WelfareType {
  index?: number;
  title: string;
  content: string;
  img: keyof typeof blocks;
}
