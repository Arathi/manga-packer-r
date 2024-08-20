import Gallery from "@/domains/gallery";

export default interface Adapter {
  generateGallery(): Promise<Gallery>;
}
