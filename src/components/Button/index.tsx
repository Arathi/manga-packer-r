import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLButtonElement> {
  type?: Type;
  size?: Size;
  icon?: React.ReactNode;
  disabled?: boolean;
  // onClick?: () => {};
}

type Type = "default" | "primary" | "secondary";
type Size = "default" | "mini" | "small" | "large";

export default function Button({
  type = "default",
  size = "default",
  icon,
  className,
  onClick,
  children,
  style,
  disabled,
}: Props) {
  return (
    <button className={className} disabled={disabled} onClick={onClick}>
      {icon}
      {children}
    </button>
  );
}
