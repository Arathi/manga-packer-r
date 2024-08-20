export default interface Task {
  id: string | number;
  url: string;
  fileName: string;
  status: TaskStatus;
  total?: number;
  loaded?: number;
}

export enum TaskStatus {
  Pending,
  Running,
  Success,
  Error,
}

export function getStatusName(status: TaskStatus = TaskStatus.Pending): string {
  switch (status) {
    case TaskStatus.Pending:
      return "pending";
    case TaskStatus.Running:
      return "running";
    case TaskStatus.Success:
      return "success";
    case TaskStatus.Error:
      return "error";
  }
}

export function getStatusText(status: TaskStatus = TaskStatus.Pending): string {
  switch (status) {
    case TaskStatus.Pending:
      return "等待";
    case TaskStatus.Running:
      return "下载";
    case TaskStatus.Success:
      return "成功";
    case TaskStatus.Error:
      return "错误";
  }
}
