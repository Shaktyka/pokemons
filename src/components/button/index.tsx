import * as React from "react";

import cn from "classnames";
import s from "./Button.module.scss";

interface ButtonProps {
  onClick: (evt: React.MouseEvent<HTMLButtonElement>) => void;
  isFullWidth?: boolean;
  bgColor?: "yellow";
  size?: "small";
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  bgColor,
  size,
  isFullWidth,
}) => {
  return (
    <button
      className={cn(
        s.root,
        { [s.yellow]: bgColor === "yellow" },
        { [s.small]: size === "small" },
        { isFullWidth }
      )}
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
