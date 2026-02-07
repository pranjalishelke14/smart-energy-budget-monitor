import React, { useState } from "react";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebase"; // Ensure googleProvider is exported from firebase.js
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Email/Password Login
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Login successful");
      navigate("/dashboard");
    } catch (error) {
      toast.error(error.message);
    }
  };

  // Google Login Function
  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      toast.success("Google Login Successful");
      navigate("/dashboard");
    } catch (error) {
      toast.error("Google login failed");
    }
  };

  return (
    <div className="container-fluid bg-light d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
      <div className="card shadow-lg p-4 border-0" style={{ width: "100%", maxWidth: "450px", borderRadius: "20px" }}>
        <div className="card-body text-center">
          <h2 className="fw-bold mb-4">Login</h2>
          
          <form onSubmit={handleSubmit} className="text-start">
            <div className="mb-3">
              <label className="form-label fw-bold small">Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                value={email}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary w-100 py-2 fw-bold mb-3">
              Submit
            </button>
          </form>

          {/* --- OR DIVIDER --- */}
          <div className="d-flex align-items-center my-3">
            <hr className="flex-grow-1" />
            <span className="mx-2 text-muted small">OR</span>
            <hr className="flex-grow-1" />
          </div>

          {/* --- GOOGLE BUTTON --- */}
          <button 
            onClick={handleGoogleLogin} 
            className="btn btn-outline-dark w-100 py-2 fw-bold d-flex align-items-center justify-content-center gap-2"
          >
            <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" width="20" alt="G" />
            Continue with Google
          </button>

          <p className="mt-4 mb-0" style={{ fontSize: "0.9rem" }}>
            New user? <Link to="/register" className="text-decoration-none fw-bold">Register Here</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;