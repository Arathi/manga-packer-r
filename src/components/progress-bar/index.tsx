import { CSSProperties, HTMLAttributes } from "react";
import Flex from "@/components/flex";
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

const ProgressBar: React.FC<Props> = ({
  flex = 1,
  height = 20,
  min = 0,
  max = 100,
  value,
  status,
  statusList = [],
}) => {
  let blocks: React.ReactNode[] = [];
  let text: string = "";

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
    if (max > 0) {
      text = `${value}/${max} (${percent.toFixed(2)}%)`;
    }
  } else {
    let succ = 0;
    blocks = statusList.map((status, index) => {
      if (status === TaskStatus.Success) {
        succ++;
      }
      const statusName = getStatusName(status);
      return (
        <Flex
          key={`block-${index}`}
          className={`progress-block progress-block-${statusName}`}
          flex={1}
        />
      );
    });
    const total = statusList.length;
    let percent = (succ * 100) / total;
    if (total > 0) {
      text = `${succ}/${total} (${percent.toFixed(2)}%)`;
    }
  }

  return (
    <Flex className="progress-bar" direction="column" flex={flex}>
      <Flex className="blocks" style={{ height }}>
        {blocks}
      </Flex>
      <Flex
        className="text"
        justify="center"
        style={{ height, marginTop: -height, fontSize: height * 0.7 }}
      >
        {text}
      </Flex>
    </Flex>
  );
};

export default ProgressBar;
