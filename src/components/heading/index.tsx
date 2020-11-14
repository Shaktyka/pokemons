import * as React from "react";

import cn from "classnames";
import s from "./Heading.module.scss";

interface HeadingProps {
  size: string;
  styles?: {
    [key: string]: string;
  };
  className?: string;
}

interface IFontSizes {
  [key: string]: number;
}

const fontSizes: IFontSizes = {
  h1: 72,
  h2: 64,
  h3: 36,
  h4: 24,
  h5: 18,
  h6: 12,
};

const Heading: React.FC<HeadingProps> = ({
  children,
  size,
  styles,
  className,
}) => {
  const fontSize: number = size ? fontSizes[size] : fontSizes.h1;

  const options = {
    style: { fontSize: `${fontSize}px`, ...styles },
    className: cn(s.root, className),
  };

  const header = React.createElement(size, options, children);

  return header;
};

export default Heading;
