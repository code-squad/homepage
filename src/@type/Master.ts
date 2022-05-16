import images from "assets/images";
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

export interface MasterInfoType {
  avatar: keyof typeof images;
  name: string;
  position: string;
  introduce: string;
  nutshell: string;
}
