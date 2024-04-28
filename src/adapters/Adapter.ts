import Gallery from "@/domains/Gallery";
import Task from "@/domains/Task";

abstract class Adapter {
  abstract fetchGallery(): Promise<Gallery>;
  abstract fetchTasks(gallery: Gallery): Promise<Task[]>;
}

export default Adapter;
