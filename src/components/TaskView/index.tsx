import ProgressBar from "../ProgressBar";
import type BasicProps from "../../domains/task";

import "./index.less";

type Props = BasicProps & {
  
};

const TaskView: React.FC<Props> = ({ name, loaded, total, status }) => {
  return (
    <div className="mgpk-task-view">
      <div>{name}</div>
      <ProgressBar max={total} value={loaded} status={status} />
    </div>
  );
}

export default TaskView;
