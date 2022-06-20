import thumbnail from "assets/img/illusts/thumbnail";

export interface CourseType {
  master: string;
  title: string;
  dueDate: string;
  cost: string;
  tags: string[];
  path: string;
  img: keyof typeof thumbnail;
}
