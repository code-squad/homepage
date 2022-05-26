import icons from "assets/img/icons";

export interface ScheduledCourse {
  img: keyof typeof icons;
  title: string;
  dueDate: string;
  path: string;
}
