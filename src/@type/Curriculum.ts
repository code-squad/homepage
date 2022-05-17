import { MasterInfoType } from "./Master";
import { SubjectType } from "./Subject";

export interface CurriculumType {
  tagName: string;
  curriculum: SubjectType[];
  masterInfo: MasterInfoType;
}
