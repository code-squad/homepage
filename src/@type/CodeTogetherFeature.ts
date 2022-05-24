import blocks from "assets/images/blocks";

export interface CodeTogetherFeatureType {
  index?: number;
  title: string;
  img: keyof typeof blocks;
  descriptions: string[];
}
