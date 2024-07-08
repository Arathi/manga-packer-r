import Gallery from "@/domains/Gallery";
import GenericAdapter from "./GenericAdapter";
import { unsafeWindow } from "$";
import Task, { TaskStatus } from "@/domains/Task";
import xmlHttpRequest from "@/utils/xmlHttpRequest";

const URL_PATTERN = /\/g\/(\d+)\//;

interface Context {
  gid: string;
  token: string;
  apikey: string;
}

class EHentaiAdapter extends GenericAdapter {
  constructor() {
    super();
  }

  async fetchGallery(
    onProgress?: (loaded: number, total: number) => void
  ): Promise<Gallery> {
    const href = unsafeWindow.location.href;
    const { gid, token, apikey } = unsafeWindow as unknown as Context;
    console.debug(`gallery.id = ${gid}`);

    const headerName =
      unsafeWindow.document.querySelector<HTMLHeadingElement>("h1#gn");
    const headerNameJ =
      unsafeWindow.document.querySelector<HTMLHeadingElement>("h1#gj");

    if (headerName === undefined) {
      throw new Error(`未找到漫画标题`);
    }
    const title = headerName!.innerText;
    const subtitle = headerNameJ?.innerText;

    const gallery: Gallery = {
      id: gid,
      title,
      subtitle,
      referer: href,
      tasks: [],
    };

    await this.fetchTasks(gallery);
    console.info(`获取到gallery：`, gallery);
    return gallery;
  }

  async fetchTasks(gallery: Gallery): Promise<Task[]> {
    const gdt = unsafeWindow.document.querySelector<HTMLDivElement>("div#gdt");
    const tasks: Task[] = [];
    if (gdt !== null) {
      const currentPageTasks = await this.fetchTasksInGDT(gallery, gdt, 1);
      tasks.push(...currentPageTasks);
    }
    await this.fetchNextPage();
    gallery.tasks = tasks;
    return gallery.tasks;
  }

  async fetchTasksInGDT(
    gallery: Gallery,
    gdt: HTMLDivElement,
    startAt: number
  ): Promise<Task[]> {
    const tasks: Task[] = [];
    const anchors = gdt.querySelectorAll<HTMLAnchorElement>("div.gdtm div a");
    for (let index = 0; index < anchors.length; index++) {
      const anchor = anchors[index];
      const href = anchor.href;
      const pageNumber = `${startAt + index}`.padStart(3, "0");
      const task = await this.fetchTask(gallery, pageNumber, href);
      tasks.push(task);
    }
    return tasks;
  }

  async fetchTask(
    gallery: Gallery,
    pageNumber: string,
    url: string
  ): Promise<Task> {
    const doc = await xmlHttpRequest("GET", url, "document");
    const img = doc.querySelector<HTMLImageElement>("div#i3 img");
    if (img === null) {
      throw new Error(`获取${url}内容失败`);
    }

    const src = img.src;
    const extIndex = src.lastIndexOf(".");
    let extName = "";
    if (extIndex >= 0) {
      extName = src.substring(extIndex);
    }

    const fileName = `${pageNumber}${extName}`;
    const task = {
      id: `eh-${gallery.id}-${pageNumber}`,
      url: src,
      fileName,
      status: TaskStatus.Pending,
    };

    console.info(`获取第${pageNumber}页任务：`, task);
    return task;
  }

  async fetchNextPage() {}
}

export default EHentaiAdapter;
