import avatars from "assets/img/avatars";
import thumbnails from "assets/img/illusts/thumbnail";
import picture from "assets/img/picture";

interface ScheduleType {
  title: string;
  subtitle: string;
  image: keyof typeof thumbnails;
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
