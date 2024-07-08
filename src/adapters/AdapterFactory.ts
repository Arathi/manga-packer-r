import Adapter from "./Adapter";
import GenericAdapter from "./GenericAdapter";
import TelegraphAdapter from "./TelegraphAdapter";
import NHentaiAdapter from "./NHentaiAdapter";
import NHentaiXAdapter from "./NHentaiXAdapter";
import EHentaiAdapter from "./EHentaiAdapter";

class AdapterFactory {
  static create(): Adapter {
    const domain = window.location.host;
    switch (domain) {
      case "telegra.ph":
        return new TelegraphAdapter();
      case "nhentai.net":
        return new NHentaiAdapter();
      case "nhentai.xxx":
        return new NHentaiXAdapter();
      case "e-hentai.org":
        return new EHentaiAdapter();
    }
    return new GenericAdapter();
  }
}

export default AdapterFactory;
