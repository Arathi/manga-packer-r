import { HTMLAttributes } from "react";
import Flex from "@/components/flex";
import { TaskStatus, getStatusName, getStatusText } from "@/domains/task";
import "./index.less";

interface Props extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
  status?: TaskStatus;
  onChange: (value: TaskStatus | undefined) => void;
}

const TaskStatusList: (TaskStatus | undefined)[] = [
  TaskStatus.Pending,
  TaskStatus.Running,
  TaskStatus.Error,
  TaskStatus.Success,
];

const TaskFilter: React.FC<Props> = ({ status, onChange }) => {
  const items: React.ReactNode[] = TaskStatusList.map((s) => {
    const statusName = getStatusName(s);
    const classNames: string[] = [
      "task-filter-item",
      `task-filter-item-${statusName}`,
    ];
    if (status === s) {
      classNames.push(`task-filter-item-${statusName}-active`);
    }
    return (
      <Flex
        key={`${s}`}
        className={classNames.join(" ")}
        flex={1}
        justify="center"
        align="center"
        onClick={() => onChange(s)}
      >
        {getStatusText(s)} (999)
      </Flex>
    );
  });

  return (
    <Flex className="task-filter">
      <Flex
        className={[
          "task-filter-item",
          "task-filter-item-all",
          status === undefined ? "task-filter-item-all-active" : undefined,
        ].join(" ")}
        flex={1}
        justify="center"
        align="center"
        onClick={() => onChange(undefined)}
      >
        全部 (999)
      </Flex>
      {items}
    </Flex>
  );
};

export default TaskFilter;
