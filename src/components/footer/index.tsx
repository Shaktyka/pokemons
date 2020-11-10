import * as React from "react";

import s from "./Footer.module.scss";

const Footer: React.FC = () => {
  return (
    <footer className={s.footer}>
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
