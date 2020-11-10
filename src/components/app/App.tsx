import { useRoutes, useRedirect } from "hookrouter";
import routes from "../../routes";

import "../../assets/styles/normalize.scss";
import "../../assets/styles/common-styles.scss";

const App: React.FC = () => {
  useRedirect("/home", "/");
  const match = useRoutes(routes);

  return match || "Not found";
};

export default App;
