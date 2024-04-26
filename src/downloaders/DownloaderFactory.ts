import Downloader from "./Downloader";
import DownloaderMonkey from "./DownloaderMonkey";

class DownloaderFactory {
  static getInstance(): Downloader {
    return new DownloaderMonkey();
  }
}

export default DownloaderFactory;
