import React, { useState } from "react";

export default function Dashboard() {
  // 1. Devices State (This allows the list to grow)
  const [devices, setDevices] = useState([
    { id: 1, name: "Living Room AC", icon: "ac_unit", usage: "3.2 kWh", cost: "₹45", color: "bg-info" },
    { id: 2, name: "Kitchen Fridge", icon: "kitchen", usage: "0.8 kWh", cost: "₹12", color: "bg-success" },
    { id: 3, name: "Main Geyser", icon: "water_drop", usage: "4.5 kWh", cost: "₹60", color: "bg-warning" }
  ]);

  // 2. State for the input fields inside the popup
  const [newName, setNewName] = useState("");
  const [newCost, setNewCost] = useState("");

  // 3. Function to add the appliance to the list
  const addAppliance = () => {
    if (!newName || !newCost) return alert("Please enter name and cost");
    
    const newEntry = {
      id: Date.now(), // Unique ID for deleting
      name: newName,
      icon: "settings", 
      usage: "0.0 kWh",
      cost: `₹${newCost}`,
      color: "bg-primary"
    };

    setDevices([...devices, newEntry]); // This updates the UI
    setNewName(""); // Resets fields
    setNewCost("");
  };

  // 4. Function to remove an appliance
  const removeAppliance = (id) => {
    setDevices(devices.filter(device => device.id !== id));
  };

  return (
    <div className="p-4 bg-light min-vh-100">
      <div className="mb-4">
        <h3 className="fw-bold text-dark">Energy Intelligence</h3>
        <p className="text-muted">Real-time monitoring of your smart home budget.</p>
      </div>

      {/* Top Row Stats - Position Unchanged */}
      <div className="row g-4 mb-4">
        {[
          { label: "Today's Cost", val: "₹120", color: "#4e73df", icon: "today" },
          { label: "Predicted Bill", val: "₹4,250", color: "#1cc88a", icon: "trending_up" },
          { label: "Active Nodes", val: "08", color: "#36b9cc", icon: "sensors" },
          { label: "Budget Left", val: "₹750", color: "#f6c23e", icon: "account_balance_wallet" }
        ].map((stat, i) => (
          <div key={i} className="col-xl-3 col-md-6">
            <div className="card border-0 shadow-sm rounded-4 overflow-hidden h-100">
              <div className="card-body p-4 border-start border-5" style={{ borderColor: stat.color }}>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <div className="text-xs fw-bold text-uppercase mb-1" style={{ color: stat.color, fontSize: "0.75rem" }}>{stat.label}</div>
                    <div className="h5 mb-0 fw-bold text-gray-800">{stat.val}</div>
                  </div>
                  <span className="material-icons-outlined text-gray-300 fs-1 opacity-25" style={{ color: stat.color }}>{stat.icon}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="row g-4">
        {/* Main Budget Progress - Position Unchanged */}
        <div className="col-lg-5">
          <div className="card border-0 shadow-sm rounded-4 p-4 h-100 text-center bg-white">
            <h6 className="fw-bold text-muted mb-5">BUDGET CONSUMPTION</h6>
            <div className="mx-auto mb-4" style={{ position: "relative", width: "200px", height: "200px" }}>
              <svg viewBox="0 0 36 36" className="w-100 h-100" style={{ transform: "rotate(-90deg)" }}>
                <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#eee" strokeWidth="3" />
                <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#4e73df" strokeWidth="3" strokeDasharray="85, 100" />
              </svg>
              <div className="position-absolute top-50 start-50 translate-middle">
                <h2 className="fw-bold mb-0">85%</h2>
                <small className="text-muted">Used</small>
              </div>
            </div>
            <p className="fw-bold mb-0 mt-2 text-danger">⚠️ Low Budget Warning</p>
            <p className="text-muted small">₹4,250 of ₹5,000 spent</p>
          </div>
        </div>

        {/* Device List Table - Logic Added */}
        <div className="col-lg-7">
          <div className="card border-0 shadow-sm rounded-4 p-4 bg-white h-100">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h5 className="fw-bold mb-0">Smart Control Center</h5>
              {/* TRIGGER BUTTON: This must have data-bs attributes to open the modal */}
              <button 
                className="btn btn-primary btn-sm rounded-pill px-3 fw-bold shadow-sm"
                data-bs-toggle="modal" 
                data-bs-target="#addApplianceModal"
              >
                + Add Device
              </button>
            </div>
            <div className="table-responsive">
              <table className="table table-borderless align-middle">
                <tbody>
                  {devices.map((device) => (
                    <tr key={device.id} className="border-bottom">
                      <td className="ps-0 py-3">
                        <div className="d-flex align-items-center">
                          <div className={`${device.color} text-white p-2 rounded-3 me-3 d-flex align-items-center`}>
                            <span className="material-icons-outlined" style={{ fontSize: "18px" }}>{device.icon}</span>
                          </div>
                          <span className="fw-bold text-dark">{device.name}</span>
                        </div>
                      </td>
                      <td className="text-muted small">{device.usage}</td>
                      <td className="fw-bold text-dark">{device.cost}</td>
                      <td className="text-end pe-0">
                         <div className="d-flex align-items-center justify-content-end">
                            <div className="form-check form-switch d-inline-block me-3">
                              <input className="form-check-input" type="checkbox" defaultChecked />
                            </div>
                            {/* DELETE BUTTON: Red 'X' icon */}
                            <span 
                              className="text-danger fw-bold ms-2" 
                              style={{ cursor: "pointer", fontSize: "1.2rem" }}
                              onClick={() => removeAppliance(device.id)}
                            >
                              &times;
                            </span>
                         </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* --- ADD APPLIANCE MODAL (Popup) --- */}
      <div className="modal fade" id="addApplianceModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content border-0 shadow rounded-4">
            <div className="modal-header border-0 p-4 pb-0">
              <h5 className="fw-bold">Add New Device</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body p-4">
              <div className="mb-3">
                <label className="form-label small fw-bold text-muted">APPLIANCE NAME</label>
                <input 
                  type="text" 
                  className="form-control bg-light border-0 py-2" 
                  placeholder="e.g. Microwave" 
                  value={newName} 
                  onChange={(e) => setNewName(e.target.value)} 
                />
              </div>
              <div className="mb-4">
                <label className="form-label small fw-bold text-muted">DAILY COST (₹)</label>
                <input 
                  type="number" 
                  className="form-control bg-light border-0 py-2" 
                  placeholder="e.g. 50" 
                  value={newCost} 
                  onChange={(e) => setNewCost(e.target.value)} 
                />
              </div>
              <button 
                className="btn btn-primary w-100 rounded-pill py-2 fw-bold" 
                onClick={addAppliance} 
                data-bs-dismiss="modal"
              >
                Connect Appliance
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}