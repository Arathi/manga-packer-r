import { unsafeWindow } from "$";

import Gallery from "@/domains/Gallery";
import GenericAdapter from "./GenericAdapter";
import Task, { TaskStatus } from "@/domains/Task";

// #region NHentaiGallery
type NHentaiGallery = {
  id: number;
  images: Images;
  media_id: string;
  num_favorites: number;
  num_pages: number;
  scanlator: string;
  tags: Tag[];
  title: Titles;
  upload_date: number;
};

type Images = {
  cover: Image;
  pages: Image[];
  thumbnail: Image;
};

type Image = {
  t: string;
  w: number;
  h: number;
};

type Tag = {
  id: number;
  type: string;
  name: string;
  url: string;
  count: number;
};

type Titles = {
  english: string;
  japanese: string;
  pretty: string;
};
// #endregion

// #region NHentaiApp
type NHentaiApp = {
  options: NHentaiOptions;
};

type NHentaiOptions = {
  csrf_token: string;
  media_server: number;
};
// #endregion

class NHentaiAdapter extends GenericAdapter {
  constructor() {
    super();
  }

  async fetchGallery(): Promise<Gallery> {
    // @ts-ignore
    const nhGallery: NHentaiGallery = unsafeWindow._gallery;

    const gallery: Gallery = {
      id: `${nhGallery.id}`,
      title: nhGallery.title.japanese ?? nhGallery.id,
      subtitle: nhGallery.title.english,
      referer: window.location.href,
      pageAmount: nhGallery.num_pages,
    };

    return gallery;
  }

  async fetchTasks(
    galleryId: string,
    onProgress?: (task: Task) => void
  ): Promise<Task[]> {
    const win = unsafeWindow as any;
    const nhGallery: NHentaiGallery = win._gallery;
    const nhOptions: NHentaiOptions = win._n_app.options;

    const tasks: Task[] = nhGallery.images.pages.map((page, index) => {
      const pageNumber = `${index + 1}`;
      const serverId = nhOptions.media_server;
      const mediaId = nhGallery.media_id;
      let extName = ".img";
      let status: TaskStatus = TaskStatus.Pending;
      switch (page.t) {
        case "j":
          extName = ".jpg";
          break;
        case "p":
          extName = ".png";
          break;
        default:
          console.warn(`未知的文件类型描述符：${page.t}`);
          status = TaskStatus.Error;
      }
      const fileName = `${pageNumber.padStart(3, "0")}.${extName}`;

      const task = {
        id: `nh-${galleryId}-${pageNumber}`,
        url: `https://i${serverId}.nhentai.net/galleries/${mediaId}/${pageNumber}${extName}`,
        fileName,
        status,
      };
      if (onProgress !== undefined) {
        onProgress(task);
      }

      return task;
    });

    return tasks;
  }
}

export default NHentaiAdapter;
