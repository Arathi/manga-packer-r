import { atom } from 'jotai';
import Task, { TaskPatch, TaskStatus } from '../domains/Task';

type TaskAmounts = Record<string, number>;

export const tasksAtom = atom<Task[]>([]);
export const taskStatusAtom = atom<TaskStatus>(TaskStatus.Pending);
export const titleAtom = atom('');

export const totalProgressAtom = atom(get => {
  const tasks = get(tasksAtom);
  if (tasks.length > 0) {
    let sum = tasks.map(task => {
      if (task.status == TaskStatus.Error) return 0;
      if (task.status == TaskStatus.Done) return 1;
      if (task.completed == undefined) return 0;
      if (task.total == undefined) return 0;
      let progress = task.completed / task.total;
      if (progress < 0) return 0;
      if (progress > 1) return 1;
      return progress;
    }).reduce((prev, current) => prev+current, 0);
    return sum * 100 / tasks.length;
  }
});

export const patchTaskAtom = atom(null, (get, set, patch: TaskPatch) => {
  const tasks = get(tasksAtom);
  const updated = tasks.map(task => {
    if (task.id === patch.id) {
      return {
        ...task,
        ...patch,
      };
    }
    return task;
  });
  set(tasksAtom, updated);
});

export const taskAmountsAtom = atom(get => {
  const tasks = get(tasksAtom);
  const result: TaskAmounts = {};
  result[TaskStatus.All] = tasks.length;
  result[TaskStatus.Pending] = 0;
  result[TaskStatus.Running] = 0;
  result[TaskStatus.Error] = 0;
  result[TaskStatus.Done] = 0;
  tasks.forEach(task => result[task.status]++);
  return result;
});
