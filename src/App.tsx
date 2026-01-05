import { Route, Routes } from "react-router-dom";
import "./App.css";

import Landing from "./components/pages/Landing";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Dashboard from "./components/pages/Dashboard";
import AuthLayout from "./layout/AuthLayout";
import DashboardLayout from "./layout/DashboardLayout";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/signin" element={<Login />} />
          <Route path="/" element={<Landing />} />
          <Route path="/signup" element={<Register />} />
        </Route>

        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path=":id" element={<div>Project</div>} />
          </Route>

          <Route path="/schema" element={<div>Schemas</div>} />
          <Route path="/apis" element={<div>apis</div>} />
          <Route path="/settings" element={<div>settings</div>} />
          <Route path="/projects" element={<div>Projects</div>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
