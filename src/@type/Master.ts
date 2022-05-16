import icons from "assets/images/icons";

interface ScheduleType {
  title: string;
  subtitle: string;
  image: keyof typeof icons;
}

export interface MasterType {
  field: string;
  name: string;
  description: string;
  introduce: string;
  careers: string[];
  schedules?: ScheduleType[];
}
