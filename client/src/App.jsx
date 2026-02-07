import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { auth } from "./firebase";
import { ToastContainer } from "react-toastify";

// 1. Import all your components
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Register from "./components/Register";
import Appliances from "./components/Appliances";
import Reports from "./components/Reports";
import Settings from "./components/Settings";

// Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if a user is logged in
    const unsubscribe = auth.onAuthStateChanged((u) => {
      setUser(u);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="spinner-border text-primary" role="status"></div>
      </div>
    );
  }

  return (
    <Router>
      <ToastContainer position="top-center" autoClose={2000} />
      
      <div className="d-flex" style={{ minHeight: "100vh" }}>
        {/* SIDEBAR: Only shows if the user is logged in */}
        {user && <Sidebar />} 

        {/* MAIN CONTENT AREA */}
        <div className="flex-grow-1 bg-light">
          <Routes>
            {/* PUBLIC ROUTES */}
            <Route path="/login" element={!user ? <Login /> : <Navigate to="/dashboard" />} />
            <Route path="/register" element={!user ? <Register /> : <Navigate to="/dashboard" />} />

            {/* PROTECTED ROUTES: Only accessible if 'user' is not null */}
            <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/login" />} />
            <Route path="/appliances" element={user ? <Appliances /> : <Navigate to="/login" />} />
            <Route path="/reports" element={user ? <Reports /> : <Navigate to="/login" />} />
            <Route path="/settings" element={user ? <Settings /> : <Navigate to="/login" />} />

            {/* DEFAULT REDIRECT */}
            <Route path="/" element={<Navigate to={user ? "/dashboard" : "/login"} />} />
            
            {/* 404 CATCH-ALL */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;