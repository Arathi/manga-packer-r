import { HTMLAttributes } from "react";

export interface IconProps extends HTMLAttributes<HTMLOrSVGElement> {}

export const DefaultStyle: IconProps["style"] = {
  width: 20,
  height: 20,
};
