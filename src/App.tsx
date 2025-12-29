import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/ui/sections/navbar";
import Landing from "./components/pages/Landing";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </>
  );
}

export default App;
