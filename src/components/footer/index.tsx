import * as React from "react";

import cn from "classnames";
import s from "./Footer.module.scss";

interface IProps {
  className?: string;
}

const Footer: React.FC<IProps> = ({ className }) => {
  return (
    <footer className={cn(s.footer, className)}>
      <div className={s.container}>
        <div className={s.content}>
          <p className={s.text}>
            Make with{" "}
            <span role="img" aria-label="Heart emoji">
              ❤️
            </span>
          </p>
          <a className={s.link} href="https://ourteam.html">
            Our team
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
