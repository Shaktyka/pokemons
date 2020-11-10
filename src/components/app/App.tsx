import { useRoutes } from "hookrouter";
import routes from "../../routes";

import "../../assets/styles/normalize.scss";
import "../../assets/styles/common-styles.scss";

const App = () => {
  const match = useRoutes(routes);

  return match;
};

export default App;
