import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import sendUserIdApi from "./API/SendMailAPI";
import "./App.css";

const SendMail = () => {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSendUserId = async (e) => {
    e.preventDefault();
    if (!input) {
      setError("Please enter email, username, or phone number.");
    } else {
      try {
        await sendUserIdApi(input, setError);
        navigate("/"); // Navigate to login page after successful submission
      } catch (error) {
        console.error("Error sending email:", error);
      }
    }
  };

  return (
    <div className="create-password-container">
      <div className="card create-password-card">
        <h4 className="text-center mt-3" style={{ color: "rgb(13, 23, 134)" }}>
          Enter your Email
        </h4>
        <form onSubmit={handleSendUserId}>
          <div className="mb-3">
            <label className="form-label mt-2">Email Address</label>
            <div className="input-group mt-1">
              <span className="input-group-text">
                <i className="bi bi-envelope-fill"></i>
              </span>
              <input
                type="input"
                className="form-control"
                placeholder="UserName or Email or PhoneNo"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="d-flex justify-content-center">
            {error && <p className="text-danger">{error}</p>}
            <button type="submit" className="btn btn-md log mt-3">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SendMail;