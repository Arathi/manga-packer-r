import { Radio } from "@arco-design/web-react";

import Task, { TaskStatus } from "@/domains/Task";
import useWindowSize from "@/hooks/useWindowSize";

import TaskView from "./TaskView";
import Flex from "../Flex";
import { useMemo, useState } from "react";

type TaskListProps = {
  tasks: Task[];
  onDownload: (task: Task) => void;
};
const TaskList: React.FC<TaskListProps> = ({ tasks, onDownload }) => {
  const windowSize = useWindowSize();
  const [taskStatus, setTaskStatus] = useState<TaskStatus>(TaskStatus.Pending);
  const taskAmounts = useMemo<Record<TaskStatus, number>>(() => {
    const amounts: Record<TaskStatus, number> = {
      0: 0,
      1: 0,
      2: 0,
      3: 0,
      9: tasks.length,
    };
    tasks.forEach((t) => amounts[t.status]++);
    return amounts;
  }, [tasks]);

  const taskStatusOptions = [
    {
      label: `所有(${taskAmounts[TaskStatus.All]})`,
      value: TaskStatus.All,
    },
    {
      label: `等待(${taskAmounts[TaskStatus.Pending]})`,
      value: TaskStatus.Pending,
    },
    {
      label: `下载(${taskAmounts[TaskStatus.Running]})`,
      value: TaskStatus.Running,
    },
    {
      label: `错误(${taskAmounts[TaskStatus.Error]})`,
      value: TaskStatus.Error,
    },
    {
      label: `完成(${taskAmounts[TaskStatus.Done]})`,
      value: TaskStatus.Done,
    },
  ];

  let taskViews: React.ReactNode[] = [];
  taskViews = tasks.map((task) => (
    <TaskView key={`${task.id}`} task={task} selectedStatus={taskStatus} />
  ));

  return (
    <>
      <Radio.Group
        type="button"
        size="mini"
        options={taskStatusOptions}
        value={taskStatus}
        onChange={(value) => {
          console.info(`选择任务状态: ${value}`);
          setTaskStatus(value);
        }}
      />

      <Flex
        className="task-list"
        direction="column"
        gap={3}
        style={{
          height: windowSize.height - 150,
          overflowX: "hidden",
          overflowY: "auto",
        }}
      >
        {taskViews}
      </Flex>
    </>
  );
};

export default TaskList;
