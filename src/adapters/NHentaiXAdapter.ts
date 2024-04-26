import Gallery from "@/domains/Gallery";
import GenericAdapter from "./GenericAdapter";
import Task, { TaskStatus } from "@/domains/Task";
import { unsafeWindow } from "$";

class NHentaiAdapter extends GenericAdapter {
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
