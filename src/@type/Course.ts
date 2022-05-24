import icons from "assets/images/icons";

export interface CourseType {
  index?: number;
  master: string;
  title: string;
  dueDate: string;
  price: string;
  tags: string[];
  img: keyof typeof icons;
}
