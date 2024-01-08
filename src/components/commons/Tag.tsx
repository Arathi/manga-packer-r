import { ArcStatus } from "./types";
import './Tag.scss';

interface Props {
  text: string;
  status?: ArcStatus;
}

const Tag = ({
  text,
  status = ArcStatus.Primary,
}: Props) => {
  return (
    <div className="arc-tag">
      <span>{text}</span>
    </div>
  );
}

export default Tag;
