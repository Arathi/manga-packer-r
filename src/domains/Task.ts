export default interface Task {
  id: TaskID;
  url: string;
  fileName: string;
  status: TaskStatus;
  completed?: number;
  total?: number;
}

export type TaskID = string | number;

export enum TaskStatus {
  Pending = 0,
  Running = 1,
  Error = 2,
  Done = 3,
  All = 9,
}

export type TaskPatch = Pick<Task, 'id'> & Partial<Task>;
