import type { TaskStatus } from "./task-status";

export default interface Task {
  id: string;
  name: string;
  url: string;
  status: TaskStatus;
  loaded: number;
  total: number;
}
