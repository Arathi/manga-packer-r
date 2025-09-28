declare interface Window {
  SMH: {
    picserv: {
      getCurHost: () => number;
      getHostName: (index: number) => string;
      getHostsLen: () => number;
      getLiveHostsLen: () => number;
      getNextTry: () => number;
      getServName: (index: number) => string;
      getServsLen: () => number;
      isdown: (index: number) => boolean;
    };
    utils: {
      getPath: (picserv: string, uri: string) => string;
    };
  };
}
