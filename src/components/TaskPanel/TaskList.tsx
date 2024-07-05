import { useAtom, useAtomValue } from "jotai";
import { Empty, Radio } from "@arco-design/web-react";

import {
  taskAmountsAtom,
  taskStatusAtom,
  titleAtom,
  minimizedAtom,
} from "@/stores";
import Task, { TaskStatus } from "@/domains/Task";
import useWindowSize from "@/hooks/useWindowSize";

import TaskView from "./TaskView";
import Flex from "../Flex";

type TaskListProps = {
  tasks: Task[];
  onDownload: (task: Task) => void;
};
const TaskList: React.FC<TaskListProps> = ({ tasks, onDownload }) => {
  const windowSize = useWindowSize();
  const taskAmounts = useAtomValue(taskAmountsAtom);
  const [taskStatus, setTaskStatus] = useAtom(taskStatusAtom);
  const title = useAtomValue(titleAtom);
  const minimized = useAtomValue(minimizedAtom);

  if (minimized) {
    return null;
  }

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
    <TaskView key={`${task.id}`} task={task} onDownload={onDownload} />
  ));

  if (taskStatus !== TaskStatus.All) {
    const amount = tasks
      .map((t) => (t.status === taskStatus ? 1 : 0))
      .reduce<number>((prev, current) => prev + current, 0);
    if (amount === 0) {
      taskViews.push(<Empty key={title} description="未获取任务" />);
    }
  }

  return (
    <>
      <Radio.Group
        type="button"
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
