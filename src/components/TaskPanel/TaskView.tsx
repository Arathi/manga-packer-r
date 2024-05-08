import { DownloadOutlined } from "@ant-design/icons";
import { Button, Flex, Progress, Tag, TagProps } from "antd";
import { CSSProperties } from "react";
import { useAtomValue } from 'jotai';

import Task, { TaskStatus } from "@/domains/Task";
import { taskStatusAtom } from "@/stores";

type Props = {
  task: Task;
  onDownload: (task: Task) => void;
  style?: CSSProperties;
};

const DefaultStyle: CSSProperties = {};

/**
 * 任务视图
 */
const TaskView: React.FC<Props> = ({
  task,
  onDownload,
  style
}) => {
  const taskStatus = useAtomValue(taskStatusAtom);
  const { total, completed, status, fileName } = task;

  let percent = 0;
  if (total !== undefined && total > 0) {
    if (completed !== undefined && completed > 0) {
      percent = completed * 100 / total;
    }
  }

  let statusName = '未知';
  let statusColor: TagProps['color'] = 'warning';
  if (status !== undefined) {
    switch (status) {
      case TaskStatus.Pending:
        statusName = '等待';
        statusColor = 'default';
        break;
      case TaskStatus.Running:
        statusName = '下载';
        statusColor = 'processing';
        break;
      case TaskStatus.Error:
        statusName = '错误';
        statusColor = 'error';
        break;
      case TaskStatus.Done:
        statusName = '完成';
        statusColor = 'success';
        break;
    }
  }

  if (taskStatus !== TaskStatus.All && status != taskStatus) {
    // 隐藏任务
    return null;
  }

  const styleMerged = {
    ...DefaultStyle,
    ...style,
  }

  return (
    <Flex 
      className={'task-view'}
      gap={8} 
      align={'center'}
      style={styleMerged}
    >
      <Flex><span className={'file-name'}>{fileName}</span></Flex>
      <Tag color={statusColor} bordered={true}>{statusName}</Tag>
      <Flex flex={1}>
        <Progress percent={percent} />
      </Flex>
      <Flex gap={4}>
        <Button onClick={e => onDownload(task)} size={'small'}>
          <DownloadOutlined />
        </Button>
      </Flex>
    </Flex>
  );
};

export default TaskView;
