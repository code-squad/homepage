import avatars from "assets/img/avatars";
import icons from "assets/img/icons";
import picture from "assets/img/picture";

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
  image: keyof typeof picture;
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
