import Task, { TaskID } from "@/domains/Task";
import TaskResult from "@/domains/TaskResult";

export type ProgressListener = (
  taskId: TaskID,
  completed: number,
  total: number,
) => void;

abstract class Downloader {
  abstract download(task: Task, onProgress?: ProgressListener): Promise<TaskResult>;
}

export default Downloader;
