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
      case 'telegra.ph':
        return new TelegraphAdapter();
      case 'nhentai.net':
        return new NHentaiAdapter();
      case 'e-hentai.net':
        return new EHentaiAdapter();
    }
    return new GenericAdapter();
  }
}

export default AdapterFactory;
