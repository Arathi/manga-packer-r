import { CSSProperties, HTMLAttributes } from "react";
import Flex from "../flex";
import { TaskStatus, getStatusName } from "@/domains/task";

import "./index.less";

interface Props extends HTMLAttributes<HTMLDivElement> {
  flex?: CSSProperties["flex"];
  height?: number;
  min?: number;
  max?: number;
  value?: number;
  status?: TaskStatus;
  statusList?: TaskStatus[];
}

const Progress: React.FC<Props> = ({
  flex = 1,
  height = 20,
  min = 0,
  max = 100,
  value,
  status,
  statusList = [],
}) => {
  let blocks: React.ReactNode[] = [];

  if (value !== undefined && status !== undefined) {
    const delta = max - min;
    const actualValue = value - min;
    const percent = (actualValue * 100) / delta;
    const statusName = getStatusName(status);
    if (percent >= 100) {
      blocks.push(
        <Flex
          key={`block-success`}
          className={`progress-block-${statusName}`}
          flex={100}
        />
      );
    } else if (percent > 0 && percent < 100) {
      blocks.push(
        <Flex
          key={`block-running`}
          className={`progress-block-${statusName}`}
          flex={percent}
        />
      );
      blocks.push(
        <Flex
          key={`block-pending`}
          className={`progress-block-pending`}
          flex={100 - percent}
        />
      );
    } else {
      blocks.push(
        <Flex
          key={`block-pending`}
          className={`progress-block-pending`}
          flex={100}
        />
      );
    }
    blocks.push();
  } else {
    blocks = statusList.map((status, index) => {
      const statusName = getStatusName(status);
      return (
        <Flex
          key={`block-${index}`}
          className={`progress-block progress-block-${statusName}`}
          flex={1}
        />
      );
    });
  }

  return (
    <Flex className="progress-bar" flex={flex} style={{ height }}>
      <Flex className="blocks">{blocks}</Flex>
    </Flex>
  );
};

export default Progress;
