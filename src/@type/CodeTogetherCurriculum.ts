import { MasterInfoType } from "./Master";
import { CodeTogetherSubjectType } from "./CodeTogetherSubject";

export interface CodeTogetherCurriculumType {
  tabName: string;
  curriculum: CodeTogetherSubjectType[];
  masterInfo: MasterInfoType;
}
