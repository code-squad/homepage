import icons from "assets/images/icons";

export interface ScheduledCourse {
  img: keyof typeof icons;
  title: string;
  dueDate: string;
}
