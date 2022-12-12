import icons from "assets/img/icons";

interface ICourseDetailInfo {
  title: string;
  content: string;
  img: keyof typeof icons;
}

export interface MastheadType {
  title: string;
  description: string;
  targets: string[];
  courseInfos: ICourseDetailInfo[];
}
