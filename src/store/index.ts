import { proxy } from "valtio";

import Gallery from "@/domains/gallery";
import { TaskStatus } from "@/domains/task";

interface State {
  gallery?: Gallery;
  status?: TaskStatus;
}

// const taskList = [
//   { id: 0, total: 100, loaded: 101, status: TaskStatus.Success },
//   { id: 1, total: 100, loaded: 64, status: TaskStatus.Running },
//   { id: 2, total: 100, loaded: 32, status: TaskStatus.Running },
//   { id: 3, total: 100, loaded: 68, status: TaskStatus.Pending },
//   { id: 4, total: 100, loaded: 20, status: TaskStatus.Success },
//   { id: 5, total: 100, loaded: 10, status: TaskStatus.Error },
//   { id: 6, total: 100, loaded: 30, status: TaskStatus.Pending },
//   { id: 7, total: 100, loaded: 40, status: TaskStatus.Pending },
// ];

const store = proxy<State>({
  gallery: undefined,
  status: undefined,
});

export default store;
