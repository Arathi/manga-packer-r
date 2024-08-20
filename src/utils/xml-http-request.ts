import { GM_xmlhttpRequest } from "$";

interface ResponseTypes {
  text: string;
  json: any;
  arraybuffer: ArrayBuffer;
  blob: Blob;
  document: Document;
  stream: ReadableStream<Uint8Array>;
}

type Details<C, RT extends keyof ResponseTypes = "text"> = Omit<
  Parameters<typeof GM_xmlhttpRequest>[0],
  "onerror" | "onload"
>;

function xmlHttpRequest<RT extends keyof ResponseTypes = "text">(
  details: Details<unknown, RT>
): Promise<RT> {
  return new Promise((resolve, reject) => {
    GM_xmlhttpRequest({
      ...details,
      onload: (event) => {
        const respBody = event.response as ResponseTypes[RT];
        resolve(respBody);
      },
      onerror: (event) => {
        reject(event);
      },
    });
  });
}

export default xmlHttpRequest;
