export interface ITask {
  id: number;
  title: string;
  description: string;
  isRunning: boolean;
  isStopped: boolean;
  isCompleted: boolean;
  timeStart: number;
  duration: number;
}
