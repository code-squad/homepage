import icons from "assets/img/icons";

export interface CourseType {
  master: string;
  title: string;
  dueDate: string;
  price: string;
  tags: string[];
  path: string;
  img: keyof typeof icons;
}
