import { proxy } from "valtio";
import type Task from "../domains/task";
import { TaskStatus } from "../domains/task-status";

type Store = {
  name: string;
  tasks: Record<string, Task>;
  filter: Array<TaskStatus>;
  taskList: Array<Task>;
  filtered: Array<Task>;
}

const store = proxy<Store>({
  name: '',
  tasks: {},
  filter: [
    TaskStatus.Pending,
    TaskStatus.Running,
    TaskStatus.Failure,
    TaskStatus.Success,
  ],

  get taskList() {
    const list: Array<Task> = [];
    for (const key in this.tasks) {
      const task = this.tasks[key];
      list.push(task);
    }
    return list;
  },

  get filtered() {
    const filterSet = new Set(this.filter);
    return this.taskList.filter(
      (task: Task) => filterSet.has(task.status)
    );
  },
});

export default store;

export const saveTask = (task: Task) => {
  store.tasks[task.id] = task;
};

export const updateTask = (id: string, patch: Partial<Task>) => {
  const task = store.tasks[id];
  if (task === undefined) {
    return;
  }
  saveTask({
    ...task,
    id,
    ...patch,
  });
};

export const deleteTask = (id: string) => {
  delete store.tasks[id];
}
