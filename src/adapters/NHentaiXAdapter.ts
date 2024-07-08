import { unsafeWindow } from "$";

import Gallery from "@/domains/Gallery";
import GenericAdapter from "./GenericAdapter";
import Task, { TaskStatus } from "@/domains/Task";

type GTH = {
  ct: CT;
  fl: Record<string, string>;
  th: Record<string, string>;
};

type CT = {
  cover: string;
  thumb: string;
};

type Image = {
  type: string;
  width: number;
  height: number;
};

function parseImage(merged: string): Image | null {
  const splitted = merged.split(",");
  if (splitted.length != 3) {
    return null;
  }

  const [type, w, h] = splitted;
  const width = parseInt(w, 10);
  const height = parseInt(h, 10);
  return {
    type,
    width,
    height,
  };
}

class NHentaiXAdapter extends GenericAdapter {
  constructor() {
    super();
  }

  select<E extends HTMLElement>(selector: string): E | null {
    const element = unsafeWindow.document.querySelector(selector);
    return element as E | null;
  }

  async fetchGallery(): Promise<Gallery> {
    // @ts-ignore
    const gth: GTH = await this.wait("g_th", 10, 30000);

    const header = this.select<HTMLHeadingElement>(".info h1");
    const galleryIdInput = this.select<HTMLInputElement>("input#gallery_id");

    let parseSuccess = false;
    do {
      if (header == null) {
        console.warn(`未找到input#load_server`);
        break;
      }
      if (galleryIdInput == null) {
        console.warn(`未找到input#load_dir`);
        break;
      }
      parseSuccess = true;
    } while (false);

    if (!parseSuccess) {
      throw `页面解析失败`;
    }

    const id = galleryIdInput!.value;
    const title = header!.innerText;
    const gallery: Gallery = {
      id,
      title,
      referer: window.location.href,
      pageAmount: Object.keys(gth.fl).length,
    };

    return gallery;
  }

  async wait<T>(
    key: string,
    interval: number = 10,
    timeout: number = 3000
  ): Promise<T> {
    return new Promise((resolve, reject) => {
      const startAt = new Date().getTime();
      const timer = setInterval(() => {
        // @ts-ignore
        const res: T | undefined = unsafeWindow[key];
        if (res !== undefined) {
          clearInterval(timer);
          resolve(res);
        }

        const current = new Date().getTime();
        const duration = current - startAt;
        if (duration > timeout) {
          clearInterval(timer);
          reject(`等待资源超时：${key}`);
        }
      }, interval);
    });
  }

  async fetchTasks(
    galleryId: string,
    onProgress?: (task: Task) => void
  ): Promise<Task[]> {
    // @ts-ignore
    const gth: GTH = await this.wait("g_th", 10, 30000);

    const loadServerInput = this.select<HTMLInputElement>("input#load_server"); // 2
    const loadDirInput = this.select<HTMLInputElement>("input#load_dir"); // 015
    const loadIdInput = this.select<HTMLInputElement>("input#load_id"); // 43rks7ye0b

    let parseSuccess = false;
    do {
      if (loadServerInput == null) {
        console.warn(`未找到input#load_server`);
        break;
      }
      if (loadDirInput == null) {
        console.warn(`未找到input#load_dir`);
        break;
      }
      if (loadIdInput == null) {
        console.warn(`未找到input#load_id`);
        break;
      }

      parseSuccess = true;
    } while (false);

    if (!parseSuccess) {
      return [];
    }

    const loadServer = loadServerInput!.value;
    const loadDir = loadDirInput!.value;
    const loadId = loadIdInput!.value;

    const keys = Object.keys(gth.fl);
    const tasks: Task[] = [];
    keys.forEach((key) => {
      const pageNumber = key.padStart(3, "0");
      const merged = gth.fl[key];
      const page = parseImage(merged);
      if (page == null) {
        return;
      }

      let extName = "jpg";
      let status = TaskStatus.Pending;
      switch (page.type) {
        case "j":
          extName = "jpg";
          break;
        case "p":
          extName = "png";
          break;
        default:
          console.warn(`未知的文件类型描述符：${page.type}`);
          status = TaskStatus.Error;
      }
      const dir = `${loadDir}/${loadId}`;
      const fileName = `${pageNumber}.${extName}`;

      const task: Task = {
        id: `nhx-${galleryId}-${pageNumber}`,
        url: `https://i${loadServer}.nhentaimg.com/${dir}/${key}.${extName}`,
        fileName,
        status,
      }
      if (onProgress !== undefined) {
        onProgress(task);
      }

      tasks.push(task);
    });

    return tasks;
  }
}

export default NHentaiXAdapter;
