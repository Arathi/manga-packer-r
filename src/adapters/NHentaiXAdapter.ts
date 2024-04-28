import Gallery from "@/domains/Gallery";
import GenericAdapter from "./GenericAdapter";
import Task, { TaskStatus } from "@/domains/Task";
import { unsafeWindow } from "$";

class NHentaiXAdapter extends GenericAdapter {
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

export default NHentaiXAdapter;
