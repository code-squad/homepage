import avatars from "assets/img/avatars";
import icons from "assets/img/icons";

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
  avatar: keyof typeof avatars;
  name: string;
  position: string;
  introduce: string;
  nutshell: string;
}
