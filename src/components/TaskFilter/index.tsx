import { useEffect, useMemo, useState } from "react";
import { TaskStatus } from "../../domains/task-status";

import "./index.less";

type Props = {
  onChange?: (value: Array<TaskStatus>) => void;
};

const TaskFilter: React.FC<Props> = ({ onChange }) => {
  const [filter, setFilter] = useState<Array<TaskStatus>>([
    TaskStatus.Pending,
    TaskStatus.Running,
    TaskStatus.Failure,
    TaskStatus.Success,
  ]);

  useEffect(() => {
    console.debug("任务过滤器发生变化：", filter);
    if (onChange !== undefined) {
      onChange(filter);
    }
  }, [filter, onChange]);

  const pending = useMemo(
    () => {
      const set = new Set(filter);
      return set.has(TaskStatus.Pending);
    },
    [filter],
  );

  const running = useMemo(
    () => {
      const set = new Set(filter);
      return set.has(TaskStatus.Running);
    },
    [filter],
  );

  const failure = useMemo(
    () => {
      const set = new Set(filter);
      return set.has(TaskStatus.Failure);
    },
    [filter],
  );

  const success = useMemo(
    () => {
      const set = new Set(filter);
      return set.has(TaskStatus.Success);
    },
    [filter],
  );
  
  const all = useMemo(
    () => pending && running && failure && success, 
    [pending, running, failure, success],
  );

  function toggleAll() {
    if (all) {
      setFilter([]);
    } else {
      setFilter([
        TaskStatus.Pending,
        TaskStatus.Running,
        TaskStatus.Failure,
        TaskStatus.Success,
      ]);
    }
  }

  function toggle(status: TaskStatus) {
    const set = new Set(filter);
    if (set.has(status)) {
      set.delete(status);
    } else {
      set.add(status);
    }
    setFilter([...set]);
  }

  return (
    <div className="mgpk-task-filter">
      <div
        className={`mgpk-task-filter-item ${all ? 'active' : ''}`}
        onClick={toggleAll}
        onKeyDown={toggleAll}
      >
        <div>全部</div>
        <div>({0})</div>
      </div>
      <div
        className={`mgpk-task-filter-item ${pending ? 'active' : ''}`}
        onClick={() => toggle(TaskStatus.Pending)}
        onKeyDown={() => toggle(TaskStatus.Pending)}
      >
        <div>等待</div>
        <div>({0})</div>
      </div>
      <div
        className={`mgpk-task-filter-item ${running ? 'active' : ''}`}
        onClick={() => toggle(TaskStatus.Running)}
        onKeyDown={() => toggle(TaskStatus.Running)}
      >
        <div>下载</div>
        <div>({0})</div>
      </div>
      <div
        className={`mgpk-task-filter-item ${failure ? 'active' : ''}`}
        onClick={() => toggle(TaskStatus.Failure)}
        onKeyDown={() => toggle(TaskStatus.Failure)}
      >
        <div>失败</div>
        <div>({0})</div>
      </div>
      <div
        className={`mgpk-task-filter-item ${success ? 'active' : ''}`}
        onClick={() => toggle(TaskStatus.Success)}
        onKeyDown={() => toggle(TaskStatus.Success)}
      >
        <div>成功</div>
        <div>({0})</div>
      </div>
    </div>
  );
}

export default TaskFilter;
