import Gallery from "@/domains/Gallery";
import Task from "@/domains/Task";

import Adapter from "./Adapter";

class GenericAdapter extends Adapter {
  constructor() {
    super();
  }

  async fetchGallery(): Promise<Gallery> {
    return {
      id: "",
      title: "",
      referer: window.location.href,
      pageAmount: 0,
      // tasks: [],
    };
  }

  async fetchTasks(
    galleryId: string,
    onProgress: (task: Task) => void
  ): Promise<Task[]> {
    return [];
  }
}

export default GenericAdapter;
