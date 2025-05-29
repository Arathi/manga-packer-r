import { unsafeWindow } from "$";

import Gallery from "@/domains/gallery";
import AbstractAdapter from "./abstract-adapter";
import Task, { TaskStatus } from "@/domains/task";

const URL_REGEX = /aid-(\d+)\.html/;

type Image = {
  url: string;
  caption: string;
}

export default class WnacgAdapter extends AbstractAdapter {
  async generateGallery(): Promise<Gallery> {
    let url = unsafeWindow.location.href;
    let matches = URL_REGEX.exec(url);
    let galleryId: string;
    if (matches == null || matches.length !== 2) {
      console.error("任务获取失败！");
      throw new Error('任务获取失败');
    }
    galleryId = matches[1];

    let title = unsafeWindow.document.title;
    let suffixIndex = title.indexOf(" - 列表");
    let name = title.substring(0, suffixIndex);

    let tasks: Record<string | number, Task> = {};

    // @ts-ignore
    while (unsafeWindow.imglist == undefined) {
      console.info("等待图片列表加载完成");
    }

    // @ts-ignore
    let imgList = unsafeWindow.imglist as Image[];
    for (let i = 0; i < imgList.length; i++) {
      let pageNo = `${i+1}`.padStart(3, '0');
      let taskId = `${galleryId}-${pageNo}`;
      let task = {
        id: taskId,
        url: imgList[i].url,
        name: pageNo,
        status: TaskStatus.Pending,
        referer: url,
      }
      tasks[taskId] = task;
    }

    let gallery = {
      id: `htmg-${galleryId}`,
      name,
      tasks,
    }
    console.info("gallery = ", gallery);
    return gallery;
  }
}
