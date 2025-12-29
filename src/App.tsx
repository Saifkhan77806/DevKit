import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/ui/sections/navbar";
import Hero from "./components/sections/Hero";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
      </Routes>
    </>
  );
}

export default App;
