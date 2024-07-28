import Downloader from "./Downloader";
import DownloaderAria2 from "./DownloaderAria2";

class DownloaderFactory {
  static getInstance(): Downloader {
    return new DownloaderAria2();
  }
}

export default DownloaderFactory;
