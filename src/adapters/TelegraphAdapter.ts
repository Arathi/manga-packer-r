import { unsafeWindow } from "$";

import Gallery from "@/domains/Gallery";
import Task, { TaskStatus } from "@/domains/Task";
import GenericAdapter from "./GenericAdapter";

type TelegraphGallery = {
  apiUrl: string;
  datetime: number;
  editable: boolean;
  pageId: string;
  reportHash: string;
  saveHash: string;
};

class TelegraphAdapter extends GenericAdapter {
  constructor() {
    super();
  }

  async fetchGallery(): Promise<Gallery> {
    // @ts-ignore
    const tgGallery: TelegraphGallery = unsafeWindow.T;

    const header: HTMLHeadingElement | null = document.querySelector(
      "header.tl_article_header h1"
    );
    const title = header?.innerText ?? tgGallery.pageId;

    const imgs: NodeListOf<HTMLImageElement> =
      document.querySelectorAll("figure img");

    const gallery: Gallery = {
      id: tgGallery.pageId,
      title,
      referer: window.location.href,
      pageAmount: imgs.length,
    };

    return gallery;
  }

  async fetchTasks(
    galleryId: string,
    onProgress?: (task: Task) => void
  ): Promise<Task[]> {
    const imgs: NodeListOf<HTMLImageElement> =
      document.querySelectorAll("figure img");
    let index = 0;
    const tasks: Task[] = [];
    for (let img of imgs) {
      let pageNumber = `${++index}`.padStart(3, "0");
      let dotIndex = img.src.lastIndexOf(".");
      const extName = img.src.substring(dotIndex);
      
      const task: Task = {
        id: `tg-${galleryId}-${pageNumber}`,
        url: img.src,
        fileName: `${pageNumber}${extName}`,
        status: TaskStatus.Pending,
      };

      if (onProgress !== undefined) {
        onProgress(task);
      }

      tasks.push(task);
    }
    return tasks;
  }
}

export default TelegraphAdapter;
