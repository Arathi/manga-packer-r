import type Task from "../domains/task";
import { TaskStatus } from "../domains/task-status";
import store from "../store";

export default class TelegraphAdapter {
  async generateTasks(): Promise<void> {
    const tasks: Record<string, Task> = {};

    const imgs = document.querySelectorAll<HTMLImageElement>("figure img");
    let counter = 0;
    // @ts-ignore
    const pageId = T.pageId;
    for (const img of imgs) {
      const url = img.src;
      const index = ++counter;
      const id = `${pageId}-${index}`;
      const name = index.toString().padStart(3, '0');
      const task: Task = {
        id,
        name,
        url,
        status: TaskStatus.Pending,
        loaded: 0,
        total: 0,
      };
      tasks[id] = task;
    }
    console.info("获取到任务如下：", tasks);

    const h1 = document.querySelector<HTMLHeadingElement>("header h1");

    store.name = h1?.innerText ?? pageId;
    store.tasks = tasks;
  }
}
