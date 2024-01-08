import Task, { TaskStatus } from "../../domains/Task";
import ProgressBar from "../commons/ProgressBar";
import Tag from "../commons/Tag";
import { ArcStatus } from '../commons/types';

interface Props {
  task: Task;
}

const TaskInfo = ({task}: Props) => {
  let status: ArcStatus = ArcStatus.Warning;
  let statusName = "未知";
  switch (task.status) {
    case TaskStatus.Pending:
      status = ArcStatus.Primary;
      statusName = "等待";
      break;
    case TaskStatus.Running:
      status = ArcStatus.Primary;
      statusName = "下载";
      break;
    case TaskStatus.Error:
      status = ArcStatus.Error;
      statusName = "错误";
      break;
    case TaskStatus.Done:
      status = ArcStatus.Success;
      statusName = "完成";
      break;
  }
  
  const total = task.total ?? 100;
  const loaded = task.loaded ?? 0;
  
  return (
    <div className="task-info">
      <div className="arc-col file-name">{task.fileName}</div>
      <div className="arc-col task-status">
        <Tag
          status={status}
          text={statusName}
        />
      </div>
      <div className="arc-col progress">
        <ProgressBar
          max={total}
          value={loaded}
          height={20}
          status={status}
        />
      </div>
    </div>
  );
};

export default TaskInfo;
