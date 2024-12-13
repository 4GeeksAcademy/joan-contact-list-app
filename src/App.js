import "./App.css";
import { Agenda } from "./pages/Agenda";
import Users from "./pages/Users";
import { Routes, Route } from "react-router";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Agenda />} />
      <Route path="/Users" element={<Users />} />
    </Routes>
  );
};

export default App;
