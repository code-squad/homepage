import { MasterInfoType } from "./Master";

export interface CodeTogetherSubjectInfoType {
  details: string[];
  name: string;
}

export interface CodeTogetherCurriculumType {
  tabName: string;
  subjectList: CodeTogetherSubjectInfoType[];
  masterInfo: MasterInfoType;
}
