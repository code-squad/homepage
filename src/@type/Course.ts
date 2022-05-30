import illusts from "assets/img/illusts";

export interface CourseType {
  master: string;
  title: string;
  dueDate: string;
  cost: string;
  tags: string[];
  path: string;
  img: keyof typeof illusts;
}
