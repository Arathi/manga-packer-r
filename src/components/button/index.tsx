import { HTMLAttributes } from "react";
import Flex from "../flex";

import "./index.less";

interface Props extends HTMLAttributes<HTMLButtonElement> {
  //
}

const Button: React.FC<Props> = ({ children, onClick }) => {
  return (
    <button className="mgpk-button" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
