import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/ui/sections/navbar";
import Landing from "./components/pages/Landing";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
