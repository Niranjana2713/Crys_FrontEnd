import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";



const SendMail = () => {
  const [email, setEmail] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Mail sent to: ${email}`);
  };

  return (
    <div className="create-password-container">
           <div className="card create-password-card">
   
      
        <h4 className="text-center mt-3" style={{ color: "rgb(13, 23, 134)" }}>
         Enter your Email
        </h4>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label mt-3">Email Address</label>
            <div className="input-group mt-3">
              <span className="input-group-text ">
                <i className="bi bi-envelope-fill"></i>
              </span>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="d-flex justify-content-center">
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
