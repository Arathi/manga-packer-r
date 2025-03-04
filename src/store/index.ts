import { proxy } from "valtio";

import Gallery from "@/domains/gallery";
import Task, { TaskStatus } from "@/domains/task";

interface State {
  gallery?: Gallery;
  status?: TaskStatus;
}

interface Computed {
  // 任务表
  get tasks(): Task[];

  // 根据状态值过滤任务表
  get filtered(): Task[];

  // 状态表
  get statusList(): TaskStatus[];

  // 状态数量统计
  get statusAmounts(): Record<TaskStatus, number>;
}

type Store = State & Computed;

const store = proxy<Store>({
  // #region state
  gallery: undefined,
  status: undefined,
  // #endregion

  // #region computed
  get tasks(): Task[] {
    const results: Task[] = [];
    if (this.gallery !== undefined) {
      const tasks = this.gallery.tasks;
      for (const id in tasks) {
        const task = tasks[id];
        if (task !== undefined) {
          results.push(task);
        }
      }
    }
    return results;
  },

  get filtered(): Task[] {
    if (this.status === undefined || this.status === TaskStatus.All) {
      return this.tasks;
    }
    return this.tasks.filter((t) => t.status === this.status);
  },

  get statusList(): TaskStatus[] {
    const results: TaskStatus[] = this.tasks.map((t) => t.status);
    return results;
  },

  get statusAmounts(): Record<TaskStatus, number> {
    const amounts = {
      [TaskStatus.Pending]: 0,
      [TaskStatus.Running]: 0,
      [TaskStatus.Success]: 0,
      [TaskStatus.Error]: 0,
      [TaskStatus.All]: 0,
    };
    for (const task of this.tasks) {
      amounts[task.status]++;
      amounts[TaskStatus.All]++;
    }
    return amounts;
  },
  // #endregion
});

export default store;
