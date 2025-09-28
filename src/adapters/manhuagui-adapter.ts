import { Gallery, Task } from "@/domains";
import AbstractAdapter from "./abstract-adapter";
import { TaskStatus } from "@/domains/task";

const REGEX_EVAL = /window\["\\x65\\x76\\x61\\x6c"\]\((.*)\)/;
const REGEX_IMG_DATA = /SMH\.imgData\(({.*})\)\.preInit\(\);/;
declare var manhuagui_image_data: string;

interface ImageData {
  bid: number;
  bname: string;
  bpic: string;
  cid: number;
  cname: string;
  files: string[];
  finished: boolean;
  len: number;
  path: string;
  status: number;
  block_cc: string;
  nextId: number;
  prevId: number;
  sl: {
    e: number;
    m: string;
  };
}

export default class ManHuaGuiAdapter extends AbstractAdapter {
  async getImageData(): Promise<ImageData> {
    const script = window.document.querySelector<HTMLScriptElement>("body > script:not([src])")?.innerText;
    if (script === undefined) {
      throw new Error("");
    }

    let matched = REGEX_EVAL.exec(script);
    if (matched === null) {
      throw new Error("");
    }

    const packed = matched[1];
    window.eval(`manhuagui_image_data = ${packed}`);

    matched = REGEX_IMG_DATA.exec(manhuagui_image_data);
    if (matched === null) {
      throw new Error("");
    }

    const json = matched[1];
    const imgData = JSON.parse(json);
    return imgData;
  }

  async generateGallery(): Promise<Gallery> {
    const imgData: ImageData = await this.getImageData();
    console.info(imgData);

    const galleryId = `mhg-${imgData.bid}`;
    const tasks: Record<string, Task> = {};

    const pictureServerIndex = window.SMH.picserv.getCurHost();
    const pictureServer = window.SMH.picserv.getHostName(pictureServerIndex);
    const sl = ""; // `?e=${imgData.sl.e}&m=${imgData.sl.m}`;

    imgData.files.forEach((file, index) => {
      const name = `${index + 1}`.padStart(3, '0');
      const taskId = `${galleryId}-${name}`;
      const uri = `${imgData.path}/${file}${sl}`;
      const url = window.SMH.utils.getPath(pictureServer, uri);
      const task = {
        id: taskId,
        url,
        name,
        status: TaskStatus.Pending,
        referer: "https://www.manhuagui.com/",
      } satisfies Task;
      tasks[taskId] = task;
    });

    return {
      id: galleryId,
      name: `${imgData.bname}-${imgData.cname}`,
      tasks,
    } as Gallery;
  }
}
