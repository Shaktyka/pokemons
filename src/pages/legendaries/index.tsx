import * as React from "react";

import s from "./Legendaries.module.scss";

import { Content, Footer, Legendaries } from "../../components";

const LegendariesPage: React.FC = () => {
  return (
    <Content className={s.root}>
      <Legendaries />
      <Footer />
    </Content>
  );
};

export default LegendariesPage;
