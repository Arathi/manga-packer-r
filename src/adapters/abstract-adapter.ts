import type Task from "../domains/task";

export default abstract class AbstractAdapter {
  abstract generateTasks(): Promise<void>;
}
