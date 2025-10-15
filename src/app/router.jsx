import { Button } from "@/components/ui/button";
import Dashboard from "@/pages/Dashboard";
import Employees from "@/pages/Employees";
import Login from "@/pages/Login";
import NotFound from "@/pages/NotFound";
import React, { useState } from "react";
import {
  BrowserRouter,
  Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";

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
  const ProtectedRoute = ({ children }) => {
    if (!user) return <Navigate to="/login" replace />;
    return children;
  };
  return (
    <BrowserRouter>
      <nav className="bg-gray-800 text-white p-4 flex  justify-between">
        <div className="space-x-4">
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
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/employees"
          element={
            <ProtectedRoute>
              <Employees />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
