import type Task from "../domains/task";
import AbstractAdapter from "./abstract-adapter";

export default class StandardAdapter extends AbstractAdapter {
  async generateTasks(): Promise<void> {
    return;
  }
}
