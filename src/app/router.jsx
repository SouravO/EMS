import { Button } from "@/components/ui/button";
import Dashboard from "@/pages/Dashboard";
import Employees from "@/pages/Employees";
import Login from "@/pages/Login";
import NotFound from "@/pages/NotFound";
import React, { useState } from "react";
import { BrowserRouter, Router, Routes, Route, Link } from "react-router-dom";

const AppRouter = () => {
  const [user, setUser] = useState(null);

  const handleLogout = () => {
    // Logic for logging out the user
    console.log("User logged out");
    setUser(null);
  };
  const handleLogin = (email) => {
    // Logic for logging in the user
    console.log("User logged in");
    setUser({ name: "Admin", email });
  };
  return (
    <BrowserRouter>
      <nav className="bg-gray-800 text-white p-4 flex gap-4 justify-between">
        <div>
          <Link to="/">Dashboard</Link>
          <Link to="/employees">Employees</Link>
          <Link to="/login">Login</Link>
        </div>
        <div>
          {user ? (
            <Button onClick={handleLogout}>Logout</Button>
          ) : (
            <Button onClick={handleLogin}>Login</Button>
          )}
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
