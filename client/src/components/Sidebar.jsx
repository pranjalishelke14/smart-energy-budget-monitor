import React from "react";
import { Link, useLocation } from "react-router-dom";
import { auth } from "../firebase";

export default function Sidebar() {
  const location = useLocation();

  const navItems = [
    { name: "Dashboard", path: "/dashboard", icon: "grid_view" },
    { name: "Appliances", path: "/appliances", icon: "bolt" },
    { name: "Reports", path: "/reports", icon: "bar_chart" },
    { name: "Settings", path: "/settings", icon: "settings" },
  ];

  return (
    <div className="text-white d-flex flex-column shadow" 
         style={{ 
           width: "280px", 
           minHeight: "100vh", 
           background: "linear-gradient(180deg, #1e3c72 0%, #2a5298 100%)",
           position: "sticky",
           top: 0
         }}>
      
      {/* Brand Logo */}
      <div className="p-4 mb-3 d-flex align-items-center">
        <div className="bg-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: "40px", height: "40px" }}>
          <span className="text-primary fs-4">⚡</span>
        </div>
        <h5 className="fw-bold mb-0 tracking-tight">ENERGY<span className="text-info">SMART</span></h5>
      </div>

      {/* Navigation */}
      <nav className="nav flex-column px-3 flex-grow-1">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`nav-link d-flex align-items-center rounded-3 mb-2 px-3 py-3 transition-all ${
              location.pathname === item.path 
                ? "bg-white text-primary shadow fw-bold" 
                : "text-white-50 hover-text-white"
            }`}
            style={{ transition: "0.3s" }}
          >
            <span className="material-icons-outlined me-3" style={{ fontSize: "20px" }}>{item.icon}</span>
            <span>{item.name}</span>
          </Link>
        ))}
      </nav>

      {/* Logout at bottom */}
      <div className="p-4 border-top border-white-10">
        <button onClick={() => auth.signOut()} className="btn btn-outline-light w-100 rounded-pill py-2 border-white-50">
          Logout
        </button>
      </div>
    </div>
  );
}