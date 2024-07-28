import Gallery from "@/domains/Gallery";
import GenericAdapter from "./GenericAdapter";
import { unsafeWindow } from "$";
import Task, { TaskStatus } from "@/domains/Task";
import xmlHttpRequest from "@/utils/xmlHttpRequest";

interface Context {
  gid: number;
  token: string;
  apikey: string;
  api_url: string;
}

interface GalleryMetadataResponse {
  gmetadata: GMetadata[];
}

interface GMetadata {
  gid: number;
  token: string;
  archiver_key: string;
  title: string;
  title_jpn: string;
  category: string;
  thumb: string;
  uploader: string;
  posted: string;
  filecount: string;
  filesize: number;
  expunged: boolean;
  rating: string;
  torrentcount: string;
  torrents: any[];
  tags: string[];
}

class EHentaiAdapter extends GenericAdapter {
  constructor() {
    super();
  }

  async fetchGallery(): Promise<Gallery> {
    const href = unsafeWindow.location.href;
    const { gid, token, apikey, api_url } = unsafeWindow as unknown as Context;
    console.debug(`gallery.id = ${gid}`);

    const reqBody = {
      method: "gdata",
      gidlist: [[gid, token]],
      namespace: 1,
    };
    const resp: GalleryMetadataResponse = await xmlHttpRequest(
      "POST",
      api_url,
      "json",
      undefined,
      {
        url: api_url,
        data: JSON.stringify(reqBody),
      }
    );
    const { gmetadata: metadataList } = resp;
    const { title, title_jpn: subtitle, filecount } = metadataList[0];

    const fileCount = parseInt(filecount);

    const gallery: Gallery = {
      id: `${gid}`,
      title,
      subtitle,
      referer: href,
      pageAmount: fileCount,
    };

    console.info(`获取到gallery：`, gallery);
    return gallery;
  }

  async fetchTasks(
    galleryId: string,
    onProgress?: (task: Task) => void
  ): Promise<Task[]> {
    const gdt = unsafeWindow.document.querySelector<HTMLDivElement>("div#gdt");
    const tasks: Task[] = [];
    if (gdt !== null) {
      this.fetchTasksInGDT(galleryId, gdt, 1, onProgress);
    }
    return [];
  }

  async fetchTasksInGDT(
    galleryId: string,
    gdt: HTMLDivElement,
    startAt: number,
    onProgress?: (task: Task) => void
  ): Promise<Task[]> {
    const tasks: Task[] = [];
    const anchors = gdt.querySelectorAll<HTMLAnchorElement>("div.gdtm div a");
    for (let index = 0; index < anchors.length; index++) {
      const anchor = anchors[index];
      const href = anchor.href;
      const pageNumber = `${startAt + index}`.padStart(3, "0");
      const task = await this.fetchTask(galleryId, pageNumber, href);
      if (onProgress !== undefined) {
        onProgress(task);
      }
      tasks.push(task);
    }
    return tasks;
  }

  async fetchTask(
    galleryId: string,
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
      id: `eh-${galleryId}-${pageNumber}`,
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
