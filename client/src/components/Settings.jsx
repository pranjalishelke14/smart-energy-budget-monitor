import React, { useState } from "react";
// Go UP one folder to find firebase
import { auth } from "../firebase"; 

export default function Settings() {
  const [budget, setBudget] = useState(5000);

  const handleLogout = async () => {
    await auth.signOut();
  };

  return (
    <div className="p-4">
      <div className="card border-0 shadow-sm p-4 rounded-4 bg-white" style={{ maxWidth: "500px" }}>
        <h4 className="fw-bold mb-4">⚙️ Settings</h4>
        
        <div className="mb-4">
          <label className="form-label fw-bold text-muted small">SET MONTHLY BUDGET</label>
          <div className="input-group">
            <span className="input-group-text bg-light border-0">₹</span>
            <input 
              type="number" 
              className="form-control bg-light border-0" 
              value={budget} 
              onChange={(e) => setBudget(e.target.value)}
            />
          </div>
        </div>

        <button className="btn btn-danger w-100 rounded-pill fw-bold" onClick={handleLogout}>
          Logout Account
        </button>
      </div>
    </div>
  );
}