import { CSSProperties, HTMLAttributes } from "react";

export interface FlexProps extends HTMLAttributes<HTMLDivElement> {
  direction?: CSSProperties["flexDirection"];
  justify?: CSSProperties["justifyContent"];
  align?: CSSProperties["alignItems"];
  gap?: CSSProperties["gap"];
  flex?: CSSProperties["flex"];
}

const Flex: React.FC<FlexProps> = (props) => {
  const {
    className,
    direction,
    justify,
    align,
    gap,
    flex,
    children,
    style,
    onClick,
  } = props;
  return (
    <div
      className={className}
      style={{
        display: "flex",
        flexDirection: direction,
        justifyContent: justify,
        alignItems: align,
        gap,
        flex,
        ...style,
      }}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Flex;
