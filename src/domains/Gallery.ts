import Task from "./Task";

export default interface Gallery {
  /**
   * 编号
   */
  id: GalleryID;

  /**
   * 标题
   */
  title: string;

  /**
   * 副标题
   */
  subtitle?: string;

  /**
   * 引用页面
   */
  referer: string;

  /**
   * 任务
   */
  tasks: Task[];
}

export type GalleryID = string;
