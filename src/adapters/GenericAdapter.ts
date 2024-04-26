import Gallery from "@/domains/Gallery";
import Task from "../domains/Task";
import Adapter from "./Adapter";

class GenericAdapter extends Adapter {
  constructor() {
    super();
  }

  fetchGallery(): Gallery {
    return {
      id: '',
      title: '',
      referer: window.location.href,
      tasks: [],
    };
  }

  fetchTasks(gallery: Gallery): Task[] {
    return [];
  }
}

export default GenericAdapter;
