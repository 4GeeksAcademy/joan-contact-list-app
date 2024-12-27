import "./App.css";
import { routeConfig } from "./routing/routerConfig,js";
import { Routes, Route } from "react-router";

const App = () => {
  return (
    <Routes>
      {routeConfig.map((route) => {
        return <Route path={route.path} element={route.page} />;
      })}
    </Routes>
  );
};

export default App;
