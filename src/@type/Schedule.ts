export interface ScheduleType {
  progress: ProgressType[];
  waiterApplyUrl: string;
  applyUrl: string;
  waiterApplyUrlBtnText: string;
  applyBtnText: string;
}

export interface ProgressType {
  label: string;
  title: string;
  tags?: string[];
  subtitle: string;
  description: string;
}
