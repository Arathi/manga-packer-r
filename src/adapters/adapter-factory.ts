import StandardAdapter from "./standard-adapter";
import TelegraphAdapter from "./telegraph-adapter";

export function create(site: string) {
  switch (site) {
    case 'telegraph':
      return new TelegraphAdapter();
    // case 'n-hentai.net':
    //   return new NHentaiNetAdapter();
    default:
      return new StandardAdapter();
  }
}
