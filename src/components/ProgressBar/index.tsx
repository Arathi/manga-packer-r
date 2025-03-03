import type { CSSProperties } from "react";
import { TaskStatus } from "../../domains/task-status";

import "./index.less";

type Props = {
  max?: number;
  value?: number;
  status?: TaskStatus;
  items?: Array<TaskStatus>;
};

const StatusNames: Record<TaskStatus, string> = {
  [TaskStatus.Pending]: "pending",
  [TaskStatus.Running]: "running",
  [TaskStatus.Failure]: "failure",
  [TaskStatus.Success]: "success",
};

const ProgressBar: React.FC<Props> = ({
  max = 100,
  value = 0,
  status = TaskStatus.Pending,
  items = [],
}) => {
  const itemBoxes: React.ReactNode[] = [];
  let loaded = value ?? 0;
  let total = max ?? 100;

  if (items.length > 0) {
    loaded = 0;
    total = items.length;
    items.forEach((status, index) => {
      itemBoxes.push(
        <div
          key={`status-${index+1}`}
          className={`status ${StatusNames[status]}`}
          style={{
            flex: 1,
          }}
        />
      );
      if (status === TaskStatus.Success) {
        loaded++;
      }
    });
  } else {
    const percentInt = Math.floor(loaded * 100 / total);
    const remain = 100 - percentInt;
    if (percentInt > 0) {
      itemBoxes.push(
        <div
          key="loaded"
          className={`status ${StatusNames[status]}`}
          style={{
            flex: percentInt,
          }}
        />
      );
    }
    if (remain > 0) {
      itemBoxes.push(
        <div
          key="remain"
          className="status pending"
          style={{
            flex: remain,
          }}
        />
      );
    }
  }

  const percent = total > 0 ? loaded * 100 / total : 0;

  return (
    <>
      <div className="mgpk-progress-bar">
        <div className="mgpk-progress-bar-background">
          {itemBoxes}
        </div>
        <div className="mgpk-progress-bar-foreground">
          {loaded}/{total} ({percent.toFixed(2)}%)
        </div>
      </div>
    </>
  );
}

export default ProgressBar;
