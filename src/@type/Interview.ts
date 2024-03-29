import avatars from "assets/img/avatars";

export interface InterviewType {
  writerPhoto: keyof typeof avatars;
  nutshell: string;
  content: string;
  writer: string;
  writerInfo: string;
}
