import { CSSProperties, HTMLAttributes } from "react";
import Flex from "@/components/flex";
import { TaskStatus } from "@/domains/task";

import "./index.less";

interface Props extends HTMLAttributes<HTMLDivElement> {
  status?: TaskStatus;
}

const Tag: React.FC<Props> = ({ status = TaskStatus.Pending }) => {
  let statusName = "pending";
  let statusText = "等待";
  switch (status) {
    case TaskStatus.Pending:
      statusName = "pending";
      statusText = "等待";
      break;
    case TaskStatus.Running:
      statusName = "running";
      statusText = "下载";
      break;
    case TaskStatus.Error:
      statusName = "error";
      statusText = "错误";
      break;
    case TaskStatus.Success:
      statusName = "success";
      statusText = "成功";
      break;
  }

  return (
    <Flex className={`tag tag-${statusName}`} align="center">
      {statusText}
    </Flex>
  );
};

export default Tag;
