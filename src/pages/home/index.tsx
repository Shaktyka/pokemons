import * as React from "react";

import Header from "../../components/header";
// import Layout from "../../components/layout";
import Promo from "../../components/promo";
import Footer from "../../components/footer";

interface HistoryObject {
  push(arg0: string): void;
}

interface IHomePageProps {
  history?: HistoryObject;
}

const HomePage: React.FC<IHomePageProps> = ({ history }) => {
  return (
    <>
      <Header />
      <Promo history={history} />
      <Footer />
    </>
  );
};

export default HomePage;
