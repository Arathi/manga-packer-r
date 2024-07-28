import Task from "@/domains/Task";
import TaskResult from "@/domains/TaskResult";
import Downloader, { ProgressListener } from "./Downloader";

export default class DownloaderAria2 extends Downloader {
  download(
    task: Task,
    onProgress?: ProgressListener | undefined
  ): Promise<TaskResult> {
    throw new Error("Method not implemented.");
  }
}
