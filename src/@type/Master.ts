import images from "assets/images";
import icons from "assets/images/icons";

interface ScheduleType {
  title: string;
  subtitle: string;
  image: keyof typeof icons;
  path: string;
}

export interface MasterType {
  field: string;
  name: string;
  introduce: string;
  nutshell: string;
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
