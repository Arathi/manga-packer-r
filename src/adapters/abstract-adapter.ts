import Gallery from "@/domains/gallery";
import Adapter from "./adapter";

export default abstract class AbstractAdapter implements Adapter {
  generateGallery(): Promise<Gallery> {
    throw new Error(`生成Gallery方法未实现`);
  }
}
