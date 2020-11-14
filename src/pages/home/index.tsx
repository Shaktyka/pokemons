import * as React from "react";

import s from "./Home.module.scss";

// import Layout from "../../components/layout";
import { Content, Promo, Footer } from "../../components";

interface HistoryObject {
  push(arg0: string): void;
}

interface IHomePageProps {
  history?: HistoryObject;
}

const HomePage: React.FC<IHomePageProps> = ({ history }) => {
  return (
    <Content className={s.root}>
      <Promo history={history} />
      <Footer />
    </Content>
  );
};

export default HomePage;
