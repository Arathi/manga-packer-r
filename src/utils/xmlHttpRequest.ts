import { GM, GM_xmlhttpRequest } from "$";

type ResponseType = {
  text: string;
  json: any;
  arraybuffer: ArrayBuffer;
  blob: Blob;
  document: Document;
  stream: ReadableStream<Uint8Array>;
};

type GmXhrRequest<R extends keyof ResponseType> = Parameters<
  typeof GM_xmlhttpRequest<{}, R>
>;

type HttpMethod = "GET" | "POST";

export default function xmlHttpRequest<R extends keyof ResponseType = "text">(
  method: HttpMethod,
  url: string,
  responseType: R,
  onProgress?: (progress: number) => void,
  options?: GmXhrRequest<R>
): Promise<ResponseType[R]> {
  const taskName = `${method} ${url}`;
  return new Promise((resolve, reject) => {
    GM.xmlHttpRequest<{}, R>({
      method,
      url,
      responseType,
      onprogress: (event) => {
        const { loaded, total } = event;
        let progress = 0;
        if (total > 0) {
          progress = loaded / total;
        }
        const percent = `${(progress * 100).toFixed(2)}%`;
        console.info(
          `XHR任务(${taskName})进度更新：${loaded}/${total}(${percent})`
        );
        if (onProgress !== undefined) {
          onProgress(progress);
        }
      },
      onload: (event) => {
        const { status, statusText, response } = event;
        if (status !== 200) {
          reject(`XHR任务(${taskName})失败，状态码：${status} (${statusText})`);
        }
        resolve(response);
      },
      ontimeout: () => {
        console.warn(`XHR任务(${taskName})超时`);
        reject(`XHR任务(${taskName})超时`);
      },
      onerror: (event) => {
        const { error } = event;
        console.error(`XHR任务(${taskName})发生错误：`, error);
        reject(error);
      },
      ...options,
    });
  });
}
