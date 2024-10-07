
import  { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import RightSidebar from "./pages/RightSidebar";
import LeftSidebar from "./pages/LeftSidebar";
import MiddleContent from "./pages/MiddleContent";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (user) => {
    setIsAuthenticated(true);
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <Router>
      <Routes>
        {/* صفحة الـ Dashboard */}
        <Route
          path="/dashboard"
          element={
            isAuthenticated ? (
              <div className="grid grid-cols-12 h-screen">
                <div className="col-span-3">
                  <LeftSidebar />
                </div>
                <div className="col-span-6">
                  <MiddleContent />
                </div>
                <div className="col-span-3">
                  <RightSidebar onLogout={handleLogout} />
                </div>
              </div>
            ) : (
              <Navigate to="/login" />
            )
          }
        />


        <Route path="/login" element={<Login onLogin={handleLogin} />} />

        <Route path="/signup" element={<SignUp />} />


        <Route path="/" element={<Navigate to="/dashboard" />} />
      </Routes>
    </Router>
  );
}

export default App;