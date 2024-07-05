import { TaskPatch } from './Task';

export interface Payload {
  mime?: string;
  bytes?: Uint8Array;
}

type TaskResult = TaskPatch & Payload;

export default TaskResult;
