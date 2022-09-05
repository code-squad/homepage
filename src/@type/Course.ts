import thumbnail from "assets/img/illusts/thumbnail";

export interface CourseType {
  category: string;
  title: string;
  cost: string;
  img: keyof typeof thumbnail;
  path: string;
  tags: string[];
}

export interface CourseListType {
  title: string;
  description: string;
  path: string;
}
