export enum TaskStatus {
  Pending = 'pending',
  Running = 'running',
  Error = 'error',
  Done = 'done',
}

export default interface Task {
  id: string;
  mangaId: string;
  fileName: string;
  url: string;
  status: TaskStatus;
  referer?: string;
  total?: number;
  loaded?: number;
}
