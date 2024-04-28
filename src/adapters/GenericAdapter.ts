import Gallery from "@/domains/Gallery";
import Task from "@/domains/Task";

import Adapter from "./Adapter";

class GenericAdapter extends Adapter {
  constructor() {
    super();
  }

  async fetchGallery(): Promise<Gallery> {
    return {
      id: '',
      title: '',
      referer: window.location.href,
      tasks: [],
    };
  }

  async fetchTasks(gallery: Gallery): Promise<Task[]> {
    return [];
  }
}

export default GenericAdapter;
