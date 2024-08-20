import { CSSProperties, HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  direction?: CSSProperties["flexDirection"];
  justify?: CSSProperties["justifyContent"];
  align?: CSSProperties["alignItems"];
  gap?: CSSProperties["gap"];
  flex?: CSSProperties["flex"];
}

const Flex: React.FC<Props> = (props) => {
  const { className, direction, justify, align, gap, flex, style, onClick } =
    props;
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
      {props.children}
    </div>
  );
};

export default Flex;
