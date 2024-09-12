import { unsafeWindow } from "$";

import Gallery from "@/domains/gallery";
import AbstractAdapter from "./abstract-adapter";
import Task, { TaskStatus } from "@/domains/task";

interface T {
  apiUrl: string;
  datetime: number;
  editable: boolean;
  pageId: string;
  reportHash: string;
  saveHash: string;
}

export default class TelegraphAdapter extends AbstractAdapter {
  async generateGallery(): Promise<Gallery> {
    const { T: t } = unsafeWindow as unknown as { T: T };

    const tasks: Record<string | number, Task> = {};
    const imgs = unsafeWindow.document.querySelectorAll("img");
    imgs.forEach((img, key) => {
      const pageNo = `${key + 1}`.padStart(3, "0");
      const id = `${t.pageId}-${pageNo}`;
      const url = img.src;
      tasks[id] = {
        id,
        url,
        status: TaskStatus.Pending,
        name: `${pageNo}`,
      };
    });

    const header = unsafeWindow.document.querySelector(
      ".tl_article_header > h1"
    );
    if (header === null) {
      throw new Error(`未获取到标题`);
    }

    return {
      id: t.pageId,
      name: header.innerHTML,
      tasks,
    };
  }
}
