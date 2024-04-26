type Task = {
  id: TaskID;
  url: string;
  fileName: string;
  status: TaskStatus;
  completed?: number;
  total?: number;
}

type TaskID = string | number;

enum TaskStatus {
  Pending = 0,
  Running = 1,
  Error = 2,
  Done = 3,
  All = 9,
}

type TaskPatch = Pick<Task, 'id'> & Partial<Task>;

export default Task;
export type {
  TaskID,
  TaskPatch,
};
export {
  TaskStatus
};
