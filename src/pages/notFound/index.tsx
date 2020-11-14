import * as React from "react";

import { Content, Layout, NotFound } from "../../components";

const NotFoundPage: React.FC = () => {
  return (
    <Content>
      <Layout>
        <NotFound />
      </Layout>
    </Content>
  );
};

export default NotFoundPage;
