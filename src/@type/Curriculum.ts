import { MasterInfoType } from "./Master";
import { SubjectType } from "./Subject";

export interface CurriculumType {
  tabName: string;
  curriculum: SubjectType[];
  masterInfo: MasterInfoType;
}
