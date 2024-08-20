import Task from "./task";

export default interface Gallery {
  id: string | number;
  name: string;
  tasks: Record<string | number, Task | undefined>;
}
