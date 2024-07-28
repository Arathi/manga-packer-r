import { GM_xmlhttpRequest } from "$";

export type ResponseType = {
  text: string;
  json: any;
  arraybuffer: ArrayBuffer;
  blob: Blob;
  document: Document;
  stream: ReadableStream<Uint8Array>;
};

export type GmXhrRequest<R extends keyof ResponseType> = Partial<
  Parameters<typeof GM_xmlhttpRequest<unknown, R>>[0]
>;

export type HttpMethod = "GET" | "POST";

export default function xmlHttpRequest<R extends keyof ResponseType = "text">(
  method: HttpMethod,
  url: string,
  responseType: R,
  onProgress?: (event: ProgressEvent) => void,
  options?: GmXhrRequest<R>
): Promise<ResponseType[R]> {
  const taskName = `${method} ${url}`;
  return new Promise((resolve, reject) => {
    GM_xmlhttpRequest<unknown, R>({
      method,
      url,
      responseType,
      onprogress: (event) => {
        const { done, lengthComputable, loaded, position, total, totalSize } =
          event;
        console.info(`XHR任务(${taskName})进度更新：`, event);
        let progress = 0;
        if (total > 0) {
          progress = loaded / total;
        }
        // const percent = `${(progress * 100).toFixed(2)}%`;
        if (onProgress !== undefined) {
          onProgress({
            lengthComputable,
            loaded,
            total,
          } as ProgressEvent);
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
