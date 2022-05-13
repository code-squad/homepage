import images from "assets/images";

export interface MasterType {
  field: string;
  name: string;
  description: string;
  introduce: string;
  careers: string[];
}

export interface MasterInfoType {
  avatar: keyof typeof images;
  name: string;
  position: string;
  introduce: string;
  nutshell: string;
}
