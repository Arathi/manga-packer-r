import Gallery from "@/domains/Gallery";
import Task from "@/domains/Task";

abstract class Adapter {
  /**
   * 获取Gallery
   *
   * @param onProgress 更新进度
   */
  abstract fetchGallery(
    onProgress?: (loaded: number, total: number) => void
  ): Promise<Gallery>;

  protected abstract fetchTasks(gallery: Gallery): Promise<Task[]>;
}

export default Adapter;
