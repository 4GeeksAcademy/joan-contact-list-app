import "./App.css";
import { Agenda } from "./pages/Agenda.jsx";
import { Users } from "./pages/Users.jsx";
import { Homepage } from "./pages/Homepage.jsx";
import { Routes, Route } from "react-router";
import { NavBar } from "./components/NavBar.jsx";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Agenda" element={<Agenda />} />
        <Route path="/Users" element={<Users />} />
      </Routes>
    </>
  );
};

export default App;
