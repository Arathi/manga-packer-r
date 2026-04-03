import { Gallery, Task } from "@/domains";
import AbstractAdapter from "./abstract-adapter";
import { TaskStatus } from "@/domains/task";

const API_BASE_URL = "https://nhentai.net";
const PATH_PATTERN = new RegExp(`^/g/([0-9]+)`);

type NHentaiConfig = {
  image_servers: string[];
  thumb_servers: string[];
  announcement: unknown | null;
};

type NHentaiGallery = {
  id: number;
  media_id: string;
  title: Record<string, string>;
  cover: Cover;
  scanlator: string;
  upload_date: number;
  tags: Tag[];
  num_pages: number;
  num_favorites: number;
  pages: Page[];
};

type Image = {
  path: string;
  width: number;
  height: number;
}
type Cover = Image;

type Tag = {
  id: number;
  type: string;
  name: string;
  slug: string;
  url: string;
  count: number;
}

type Page = Image & {
  number: number;
  thumbnail: string;
  thumbnail_width: number;
  thumbnail_height: number;
};

export default class NHentaiNetApiAdapter extends AbstractAdapter {
  async generateGallery(): Promise<Gallery> {
    let matches = PATH_PATTERN.exec(window.location.pathname);
    if (matches == null) {
      throw new Error("找不到gallery id");
    }

    const configResponse = await fetch(`${API_BASE_URL}/api/v2/config`);
    const config = await configResponse.json() as NHentaiConfig;
    console.info("图片服务器：", config.image_servers);

    const id = Number.parseInt(matches[1], 10);
    const galleryResponse = await fetch(`${API_BASE_URL}/api/v2/galleries/${id}`);
    const gallery = await galleryResponse.json() as NHentaiGallery;
    const name = gallery.title.english ?? gallery.title.japanese ?? `nhentai-${id}`;
    const tasks = await this.generateTasks(config, gallery);

    return {
      id,
      name,
      tasks,
    } satisfies Gallery;
  }

  async generateTasks(config: NHentaiConfig, gallery: NHentaiGallery): Promise<Record<string, Task>> {
    const tasks: Record<string, Task> = {}
    const imageServer = config.image_servers[0];
    for (let page of gallery.pages) {
      const name = `${page.number}`.padStart(3, '0');
      const id = `nh-${gallery.id}-${name}`;
      tasks[id] = {
        id,
        url: `${imageServer}/${page.path}`,
        name,
        status: TaskStatus.Pending,
        // referer: window.location.href,
      } as Task;
    }
    return tasks;
  }
}