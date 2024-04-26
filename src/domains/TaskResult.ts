import { TaskPatch } from './Task';

type Payload = {
  mime?: string;
  bytes?: Uint8Array;
}

type TaskResult = TaskPatch & Payload;

export default TaskResult;
