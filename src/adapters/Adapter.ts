import Gallery from "@/domains/Gallery";
import Task from "../domains/Task";

abstract class Adapter {
  abstract fetchGallery(): Gallery;
  abstract fetchTasks(gallery: Gallery): Task[];
}

export default Adapter;
