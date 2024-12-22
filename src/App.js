import "./App.css";
import { Agenda } from "./pages/Agenda";
import { Users } from "./pages/Users";
import { Routes, Route } from "react-router";

const App = () => {
  const routeConfig = [
    {
      name: "Root",
      path: "/",
      page: <Homepage />,
    },
    {
      name: "Root",
      path: "/Agenda",
      page: <Agenda />,
    },
    {
      name: "Root",
      path: "/Users",
      page: <Users />,
    },
  ];
  return (
    <Routes>
      {routeConfig.map((route) => {
        return <Route path={route.path} element={route.page} />;
      })}
    </Routes>
  );
};

export default App;
