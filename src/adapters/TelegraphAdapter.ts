import Gallery from "@/domains/Gallery";
import Task, { TaskStatus } from "../domains/Task";
import GenericAdapter from "./GenericAdapter";
import { unsafeWindow } from "$";

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

  fetchGallery(): Gallery {
    // @ts-ignore
    const tgGallery: TelegraphGallery = unsafeWindow.T;

    const header: HTMLHeadingElement | null = document.querySelector("header.tl_article_header h1");
    const title = header?.innerText ?? tgGallery.pageId;
    const gallery: Gallery = {
      id: tgGallery.pageId,
      title,
      referer: window.location.href,
      tasks: [],
    };

    this.fetchTasks(gallery);
    return gallery;
  }

  fetchTasks(gallery: Gallery): Task[] {
    const imgs: NodeListOf<HTMLImageElement> = document.querySelectorAll("figure img");
    let index = 0;
    for (let img of imgs) {
      let pageNumber = `${++index}`.padStart(3, '0');
      let dotIndex = img.src.lastIndexOf('.');
      const extName = img.src.substring(dotIndex);
      gallery.tasks.push({
        id: `tg-${gallery.id}-${pageNumber}`,
        url: img.src,
        fileName: `${pageNumber}${extName}`,
        status: TaskStatus.Pending,
      });
    }
    return gallery.tasks;
  }
}

export default TelegraphAdapter;
