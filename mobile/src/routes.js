import { createAppContainer, createSwitchNavigator } from "react-navigation";

import Login from "./pages/Login";
import ManagementDisciplines from "./pages/ManagementDisciplines";
import ManagementStudents from "./pages/ManagementStudents";
import Confirmation from "./pages/Confirmation";

const Routes = createAppContainer(
  createSwitchNavigator({
    Login,
    ManagementDisciplines,
    ManagementStudents,
    Confirmation
  })
);

export default Routes;
