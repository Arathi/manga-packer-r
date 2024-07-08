import Gallery from "@/domains/Gallery";
import Task from "@/domains/Task";

abstract class Adapter {
  /**
   * 获取Gallery
   */
  abstract fetchGallery(): Promise<Gallery>;

  /**
   * 获取任务
   *
   * @param onProgress 更新进度
   */
  abstract fetchTasks(
    galleryId: string,
    onProgress?: (task: Task) => void
  ): Promise<Task[]>;
}

export default Adapter;
