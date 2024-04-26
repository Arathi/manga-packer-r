import { DownloadOutlined } from "@ant-design/icons";
import { Button, ButtonProps, Flex, Progress, Tag, TagProps } from "antd";
import Task, { TaskStatus } from "@/domains/Task";
import { CSSProperties } from "react";
import { PrimitiveAtom, useAtomValue } from 'jotai';
import { taskStatusAtom } from "../../stores/TaskPanelStore";

type Props = {
  taskAtom?: PrimitiveAtom<Task>,
  fileName: string,
  status: TaskStatus,
  completed?: number,
  total?: number,
  onDownload?: ButtonProps['onClick'];
  style?: CSSProperties;
};

const DefaultStyle: CSSProperties = {};

/**
 * 任务视图
 */
const TaskView: React.FC<Props> = ({
  taskAtom,
  fileName,
  status,
  completed,
  total,
  onDownload,
  style
}) => {
  const taskStatus = useAtomValue(taskStatusAtom);

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
        <Button onClick={onDownload} size={'small'}>
          <DownloadOutlined />
        </Button>
      </Flex>
    </Flex>
  );
};

export default TaskView;
