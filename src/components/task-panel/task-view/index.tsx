import { HTMLAttributes } from "react";
import Flex from "@/components/flex";
import ProgressBar from "@/components/progress-bar";
import Task from "@/domains/task";

import "./index.less";

interface Props extends HTMLAttributes<HTMLDivElement> {
  task: Task;
}

const TaskView: React.FC<Props> = ({ task }) => {
  const { id, name, status, total, loaded } = task;

  return (
    <Flex className="task-view" gap={8} align="center">
      <Flex className="task-name" justify="end">
        {name}
      </Flex>
      <ProgressBar
        className="task-progress-bar"
        min={0}
        max={total}
        value={loaded}
        status={status}
        height={16}
      />
    </Flex>
  );
};

export default TaskView;
