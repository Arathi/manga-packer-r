import { HTMLAttributes } from "react";
import Flex from "@/components/flex";
import Task from "@/domains/task";
import TaskView from "../task-view";

import "./index.less";

interface Props extends HTMLAttributes<HTMLDivElement> {
  tasks?: Task[];
}

const TaskList: React.FC<Props> = ({ tasks = [], style }) => {
  const taskViews: React.ReactNode[] = tasks.map((task) => {
    return <TaskView key={`task-${task.id}`} task={task} />;
  });

  return (
    <Flex className={"task-list"} direction="column" gap={4} style={style}>
      {taskViews}
    </Flex>
  );
};

export default TaskList;
