import illusts from "assets/img/illusts";

export interface ScheduledCourse {
  img: keyof typeof illusts;
  title: string;
  dueDate: string;
  path: string;
}
