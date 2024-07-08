import { Progress, Tag, TagProps } from "@arco-design/web-react";
import { CSSProperties } from "react";

import Flex from "@/components/Flex";
import Task, { TaskStatus } from "@/domains/Task";

type Props = {
  task: Task;
  selectedStatus: TaskStatus;
  style?: CSSProperties;
};

const DefaultStyle: CSSProperties = {};

/**
 * 任务视图
 */
const TaskView: React.FC<Props> = ({ task, selectedStatus, style }) => {
  const { total, completed, status, fileName } = task;

  let percent = 0;
  if (total !== undefined && total > 0) {
    if (completed !== undefined && completed > 0) {
      percent = (completed * 100) / total;
    }
  }

  let statusName = "未知";
  let statusColor: TagProps["color"] = "warning";
  if (status !== undefined) {
    switch (status) {
      case TaskStatus.Pending:
        statusName = "等待";
        statusColor = "gray";
        break;
      case TaskStatus.Running:
        statusName = "下载";
        statusColor = "blue";
        break;
      case TaskStatus.Error:
        statusName = "错误";
        statusColor = "red";
        break;
      case TaskStatus.Done:
        statusName = "完成";
        statusColor = "green";
        break;
    }
  }

  if (selectedStatus !== TaskStatus.All && status != selectedStatus) {
    // 隐藏任务
    return null;
  }

  const styleMerged = {
    ...DefaultStyle,
    ...style,
  };

  return (
    <Flex className={"task-view"} gap={8} align={"center"} style={styleMerged}>
      <Flex>
        <span className={"file-name"}>{fileName}</span>
      </Flex>
      <Tag color={statusColor} bordered>
        {statusName}
      </Tag>
      <Flex flex={1}>
        <Progress
          percent={percent}
          formatText={(percent) => `${percent.toFixed(2)}%`}
        />
      </Flex>
    </Flex>
  );
};

export default TaskView;
