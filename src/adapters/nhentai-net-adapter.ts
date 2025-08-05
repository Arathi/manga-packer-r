import { Gallery, Task } from "@/domains";
import AbstractAdapter from "./abstract-adapter";
import { unsafeWindow } from "$";
import { TaskStatus } from "@/domains/task";

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
  image_cdn_urls: string[];
};
// #endregion

export default class NHentaiNetAdapter extends AbstractAdapter {
  async generateGallery(): Promise<Gallery> {
    const { _gallery: nhGallery, _n_app: nhApp } = unsafeWindow as unknown as {
      _gallery: NHentaiGallery;
      _n_app: NHentaiApp;
    };

    const tasks: Record<string | number, Task> = {};
    const mediaId = nhGallery.media_id;

    const baseUrl = `https://${nhApp.options.image_cdn_urls[0]}`;

    nhGallery.images.pages.forEach((image, index) => {
      const pageNo = `${index + 1}`;
      const id = `${nhGallery.id}-${pageNo.padStart(3, "0")}`;
      let extName = ``;
      switch (image.t) {
        case "j":
          extName = ".jpg";
          break;
        case "p":
          extName = ".png";
          break;
        case "w":
          extName = ".webp";
          break;
        default:
          console.warn(`未知的图片文件类型：${image.t}`);
          break;
      }
      const uri = `/galleries/${mediaId}/${pageNo}${extName}`;
      tasks[id] = {
        id,
        url: `${baseUrl}${uri}`,
        name: `${pageNo.padStart(3, "0")}`,
        status: TaskStatus.Pending,
      };
    });

    return {
      id: nhGallery.id,
      name: nhGallery.title.japanese,
      tasks,
    };
  }
}
