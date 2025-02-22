

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css"; // Import custom CSS for animated background
import background from "./assets/background.png";
import logo from "./assets/logo.png"; // Import your logo or any image


const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const savedUsername = localStorage.getItem("savedUsername");
    if (savedUsername) {
      setUsername(savedUsername);
      setRememberMe(true);
    }
  
      // Update time every second
      const interval = setInterval(() => {


        setCurrentDateTime(new Date());
      }, 1000);
  
      return () => clearInterval(interval);
    }, []);
  
    const formattedDate = currentDateTime.toDateString(); // Example: "Sun Feb 16 2025"
    const formattedTime = currentDateTime.toLocaleTimeString(); 
  

  const backgroundStyle = {
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "password") {
      alert("Login Successful!");
      setError("");

      if (rememberMe) {
        localStorage.setItem("savedUsername", username);
      } else {
        localStorage.removeItem("savedUsername");
      }

      navigate("/home");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="login-container" style={backgroundStyle}>
      <div className="card p-4 shadow-lg login-box cards">
        {/* Image added at the top */}
        <div className="text-center">
          <img src={logo} alt="Logo" className="login-logo" />
        </div>
<div className="heading"><h5 className="text-center mb-4">ICrystal CRM Application</h5></div>
        
        {error && <div className="alert alert-danger">{error}</div>}
        <form onSubmit={handleSubmit}>
  {/* Username Field */}
  <div className="mb-4">
    <label className="form-label">Username</label>
    <div className="input-group">
      <span className="input-group-text">
        <i className="bi bi-people-fill"></i> {/* Bootstrap People Icon */}
      </span>
      <input
        type="text"
        className="form-control"
        placeholder="Enter your username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
        disabled={rememberMe}
      />
    </div>
  </div>
          {/* Password Field */}
  <div className="mb-4">
    <label className="form-label">Password</label>
    <div className="input-group">
      <span className="input-group-text">
        <i className="bi bi-fingerprint ii"></i> {/* Bootstrap Lock Icon */}
      </span>
      <input
        type="password"
        className="form-control"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
    </div>
  </div>
          <div className="mb-3 d-flex justify-content-between align-items-center">
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input mt-3"
                id="rememberMe"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <label className="form-check-label mt-2" htmlFor="rememberMe">
                Remember Me
              </label>
            </div>
            <a href="/forgot-password" className="text-primary text-decoration-none mt-2">
              Forgot Password?
            </a>
          </div>
          <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-md log mt-2">
              Login
            </button>
          </div>
        </form>
      </div>
  {/* Footer */}
  <div className="login-footer">
  <p>
    Copyright (c) 2020 All Rights Reserved | Designed and Developed By{" "}
    <a
      href="https://www.zaubacorp.com/CRYSTREE-SOLUTIONS-PRIVATE-LIMITED-U72900TN2018PTC126504"
      target="_blank"
      rel="noopener noreferrer"
    >
      Crystree Solutions Private Limited
    </a>.
    {formattedDate} {formattedTime} | iCrystalCRM Application Ver. 7.0 | DB Ver. 7.7
  </p>
</div>

    </div>
  );
};

export default Login;
