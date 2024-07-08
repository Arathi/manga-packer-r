import { CSSProperties } from "react";

import Task, { TaskStatus } from "@/domains/Task";

import TasKProgress from "@/components/Progress";
import Flex from "@/components/Flex";
import Tag, { TagProps } from "@/components/Tag";

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

  let success = 0;
  let running = 0;
  let error = 0;
  let pending = 0;
  let statusName = "未知";
  let statusColor: TagProps["color"] = undefined;
  if (status !== undefined) {
    switch (status) {
      case TaskStatus.Pending:
        statusName = "等待";
        statusColor = "gray";
        pending = 100;
        break;
      case TaskStatus.Running:
        statusName = "下载";
        statusColor = "blue";
        running = completed!;
        pending = total! - completed!;
        break;
      case TaskStatus.Error:
        statusName = "错误";
        statusColor = "red";
        error = completed!;
        pending = total! - completed!;
        break;
      case TaskStatus.Done:
        statusName = "完成";
        statusColor = "green";
        success = 100;
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
      <TasKProgress success={success} pending={pending} />
    </Flex>
  );
};

export default TaskView;
