import { Agenda } from "../pages/Agenda.jsx";
import { Users } from "../pages/Users.jsx";
import { Homepage } from "../pages/Homepage.jsx";

const routerConfig = [
    {
      name: "Root",
      path: "/",
      element: <Homepage />,
    },
    {
      name: "Agenda",
      path: "/Agenda",
      element: <Agenda />,
    },
    {
      name: "Users",
      path: "/Users",
      element: <Users />,
    },
  ];

export default routerConfig;