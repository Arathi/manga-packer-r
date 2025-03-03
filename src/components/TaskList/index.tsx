import type Task from "../../domains/task";
import TaskView from "../TaskView";

import "./index.less";

type Props = {
  tasks: Array<Task>;
  width?: number;
  height?: number;
};

const TaskList: React.FC<Props> = ({ tasks, width, height }) => {
  const taskViews = tasks.map((task) => {
    return (
      <TaskView
        key={`task-${task.id}`}
        {...task}
      />
    );
  });

  return (
    <div className="mgpk-task-list" style={{ width, height }}>
      { taskViews }
    </div>
  );
}

export default TaskList;
