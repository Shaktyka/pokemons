import React from "react";
import cn from "classnames";

import s from "./Content.module.scss";

interface ContentProps {
  className?: string;
}

const Content: React.FC<ContentProps> = ({ children, className = null }) => (
  <div className={cn(s.root, className)}>{children}</div>
);

export default Content;
