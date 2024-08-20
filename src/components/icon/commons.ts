import { HTMLAttributes } from "react";

export interface IconProps extends HTMLAttributes<HTMLOrSVGElement> {}
export type IconStyle = IconProps["style"];

export const DefaultStyle: IconStyle = {
  width: 16,
  height: 16,
};
