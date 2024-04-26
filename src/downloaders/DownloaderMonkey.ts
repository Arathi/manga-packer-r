import { GM_xmlhttpRequest } from "$";

import TaskResult from "@/domains/TaskResult";
import Task from "@/domains/Task";
import Downloader, { ProgressListener } from "./Downloader";

type ResponseTypes = {
  text: string;
  json: any;
  arraybuffer: ArrayBuffer;
  blob: Blob;
  document: Document;
  stream: ReadableStream<Uint8Array>;
};

type ResponseType = keyof ResponseTypes;
type XmlHttpRequestParameters<R extends ResponseType> = Parameters<typeof GM_xmlhttpRequest<unknown, R>>;
type XmlHttpRequest<R extends ResponseType> = XmlHttpRequestParameters<R>[0];

class DownloaderMonkey extends Downloader {
  async download(task: Task, onProgress?: ProgressListener): Promise<TaskResult> {
    return new Promise((resolve, reject) => {
      const request: XmlHttpRequest<"blob"> = {
        method: "GET",
        url: task.url,
        responseType: "blob",
        onload: async (event) => {
          // 下载完成
          const blob = event.response;
          const buffer = await event.response.arrayBuffer();
          const bytes = new Uint8Array(buffer);
          resolve({
            ...task,
            ...{
              mime: blob.type,
              bytes,
            },
          });
        },
        onerror: (event) => {
          // 错误处理
          reject(event);
        },
        onprogress: (event) => {
          // 下载进度更新
          if (onProgress !== undefined) {
            onProgress(task.id, event.done, event.total);
          }
        },
      };
      GM_xmlhttpRequest(request);
    });
  }
}

export default DownloaderMonkey;
