import { HTMLAttributes } from "react";

export interface IconProps extends HTMLAttributes<HTMLOrSVGElement> {}

export const DefaultStyle: IconProps["style"] = {
  width: 16,
  height: 16,
};
