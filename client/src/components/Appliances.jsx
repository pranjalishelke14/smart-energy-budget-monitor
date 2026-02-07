import React, { useState } from "react";

export default function Appliances() {
  // Local state to simulate turning devices on/off
  const [devices, setDevices] = useState([
    { id: 1, name: "Air Conditioner", status: true, consumption: "1.5 kWh", cost: 3200 },
    { id: 2, name: "Refrigerator", status: true, consumption: "0.2 kWh", cost: 800 },
    { id: 3, name: "Washing Machine", status: false, consumption: "0.5 kWh", cost: 450 },
    { id: 4, name: "Geyser", status: false, consumption: "2.0 kWh", cost: 1200 },
  ]);

  const toggleDevice = (id) => {
    setDevices(devices.map(device => 
      device.id === id ? { ...device, status: !device.status } : device
    ));
  };

  return (
    <div className="p-4">
      <div className="card border-0 shadow-sm p-4 rounded-4 bg-white">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h4 className="fw-bold mb-0">🔌 Connected Appliances</h4>
          <span className="badge bg-primary-subtle text-primary px-3 py-2 rounded-pill">
            {devices.filter(d => d.status).length} Active
          </span>
        </div>

        <div className="table-responsive">
          <table className="table table-hover align-middle">
            <thead className="text-muted small">
              <tr>
                <th>APPLIANCE</th>
                <th>CONSUMPTION</th>
                <th>EST. MONTHLY COST</th>
                <th>STATUS</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {devices.map((device) => (
                <tr key={device.id}>
                  <td className="fw-bold">{device.name}</td>
                  <td>{device.consumption}</td>
                  <td className="text-primary fw-bold">₹{device.cost}</td>
                  <td>
                    <span className={`badge rounded-pill ${device.status ? 'bg-success' : 'bg-secondary'}`}>
                      {device.status ? "Active" : "Off"}
                    </span>
                  </td>
                  <td>
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        checked={device.status}
                        onChange={() => toggleDevice(device.id)}
                        style={{ cursor: "pointer" }}
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-4 p-3 bg-light rounded-4 border-0">
          <p className="mb-0 small text-muted">
            💡 <strong>Pro Tip:</strong> Turning off the <strong>{devices[0].name}</strong> for 2 hours daily could save you approximately ₹600 this month.
          </p>
        </div>
      </div>
    </div>
  );
}