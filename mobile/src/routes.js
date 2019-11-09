import { createAppContainer, createSwitchNavigator } from "react-navigation";

import Login from "./pages/Login";
import Management from "./pages/Management";
import Confirmation from "./pages/Confirmation";

const Routes = createAppContainer(
  createSwitchNavigator({ Login, Management, Confirmation })
);

export default Routes;
