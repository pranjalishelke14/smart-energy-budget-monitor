import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase"; // Ensure these are exported from your firebase.js
import { setDoc, doc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      // 1. Create user in Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // 2. Store extra details (Name) in Firestore
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          firstName: fname,
          lastName: lname,
          photo: ""
        });
      }
      
      toast.success("User Registered Successfully!!", { position: "top-center" });
      navigate("/login");
    } catch (error) {
      toast.error(error.message, { position: "bottom-center" });
    }
  };

  return (
    // Centering the card perfectly on the screen
    <div className="container-fluid bg-light d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
      <div className="card shadow-lg p-4 border-0" style={{ width: "100%", maxWidth: "500px", borderRadius: "20px" }}>
        <div className="card-body">
          <h2 className="fw-bold text-center mb-4">Sign Up</h2>
          
          <form onSubmit={handleRegister}>
            <div className="mb-3">
              <label className="form-label fw-bold small">First name</label>
              <input
                type="text"
                className="form-control"
                placeholder="First name"
                onChange={(e) => setFname(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-bold small">Last name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Last name"
                onChange={(e) => setLname(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-bold small">Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-4">
              <label className="form-label fw-bold small">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary w-100 py-2 fw-bold mb-3">
              Sign Up
            </button>
          </form>

          <p className="text-center mt-2 mb-0" style={{ fontSize: "0.9rem" }}>
            Already registered? <Link to="/login" className="text-decoration-none fw-bold">Login Here</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;