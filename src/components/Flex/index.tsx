import { CSSProperties, HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  direction?: CSSProperties["flexDirection"];
  justify?: CSSProperties["justifyContent"];
  align?: CSSProperties["alignItems"];
  gap?: CSSProperties["gap"];
  flex?: CSSProperties["flex"];
}

const Flex: React.FC<Props> = ({
  direction,
  justify,
  align,
  gap,
  flex,
  className,
  children,
  style,
}) => {
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
    >
      {children}
    </div>
  );
};

export default Flex;
