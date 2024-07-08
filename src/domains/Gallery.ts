export default interface Gallery {
  /**
   * 编号
   */
  id: string;

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
  pageAmount: number;
}
