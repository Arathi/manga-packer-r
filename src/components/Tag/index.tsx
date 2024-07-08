import { CSSProperties, HTMLAttributes } from "react";

export interface TagProps extends HTMLAttributes<HTMLDivElement> {
  color?: CSSProperties['borderColor'];
  bordered?: boolean;
}

export default function Tag({
  color,
  bordered,
  children,
}: TagProps) {
  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      padding: "3px 5px 0 5px",
      borderWidth: bordered ? 1 : undefined,
      borderStyle: bordered ? 'solid' : undefined,
      borderColor: bordered ? color : undefined,
      borderRadius: 4,
      fontSize: "0.7em",
      color,
    }}>
      { children }
    </div>
  );
}