import * as React from "react";
import { A } from "hookrouter";
import { LinkEnum } from "../../routes";

import s from "./NotFound.module.scss";
import TeamRocketImg from "./img/teamRocket.png";

const NotFound: React.FC = () => {
  return (
    <div className={s.root}>
      <section className={s.content}>
        <h1 className={s.title}>404</h1>
        <div className={s.wrap}>
          <div className={s.imgWrap}>
            <img
              src={TeamRocketImg}
              width="690"
              height="623"
              alt="Team Rocket"
            />
          </div>
          <p className={s.text}>
            The rocket team <span>has won this time.</span>
          </p>
          <div className={s.btnWrap}>
            <A className={s.notFoundBtn} href={LinkEnum.HOME}>
              Return
            </A>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NotFound;
