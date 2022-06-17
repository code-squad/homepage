import thumbnail from "assets/img/illusts/thumbnail";

export interface ScheduledCourse {
  img: keyof typeof thumbnail;
  title: string;
  dueDate: string;
  path: string;
}
