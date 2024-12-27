import "./App.css";
import { routerConfig } from "./routing/routerConfig,js";
import { Routes, Route } from "react-router";

const App = () => {
  return (
    <Routes>
      {routerConfig.map((route) => {
        return <Route path={route.path} element={route.page} />;
      })}
    </Routes>
  );
};

export default App;
