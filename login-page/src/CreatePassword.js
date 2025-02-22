import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const CreatePassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match!");
    } else {
      setError("");
      alert("Password Set Successfully!");
    }
  };

  return (
    <div className="create-password-container">
      <div className="card create-password-card">
        <h4 className="text-center mt-3" style={{ fontSize: "25px", color: "rgb(13, 23, 134)" }}>
          Reset Password
        </h4>
        <div className="text-center my-3">
          <i className="bi bi-person-fill-lock" style={{ fontSize: "40px", color: "rgb(11, 153, 248)" }}></i>
        </div>
        <form onSubmit={handleSubmit}>
        <div className="mb-3 mt-1">
  <label className="form-label">New Password</label>
  <div className="input-group">
    <span className="input-group-text">
      <i className="bi bi-shield-lock-fill"></i> {/* Lock icon */}
    </span>
    <input
      type="password"
      className="form-control"
      placeholder="New Password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      required
    />
  </div>
</div>

<div className="mb-3 mt-4">
  <label className="form-label">Confirm Password</label>
  <div className="input-group">
    <span className="input-group-text">
      <i className="bi bi-shield-fill-check"></i> {/* Lock icon */}
    </span>
    <input
      type="password"
      className="form-control"
      placeholder="Repeat Password"
      value={confirmPassword}
      onChange={(e) => setConfirmPassword(e.target.value)}
      required
    />
  </div>
</div>

          {error && <p className="text-danger">{error}</p>}
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

export default CreatePassword;

// import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./Login";
// const CreatePassword = () => {
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (password !== confirmPassword) {
//       setError("Passwords do not match!");
//     } else {
//       setError("");
//       alert("Password Set Successfully!");
//     }
//   };

//   return (
//     <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
//       <div className="card p-4 shadow-lg contain" style={{ width: "350px" }} >
//         <h4 className="text-center" style={{ fontSize: "25px", color: "rgb(13, 23, 134)" }}>Create Password</h4>
//         <div className="text-center my-3">
//           <i className="bi bi-person-fill-lock" style={{ fontSize: "35px", color: "rgb(17, 11, 84)" }}></i>
//         </div>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-3 mt-3">
//             <label className="form-label">New Password</label>
//             <input
//               type="password"
//               className="form-control"
             
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           <div className="mb-3 mt-4">
//             <label className="form-label">Confirm Password</label>
//             <input
//               type="password"
//               className="form-control"
             
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               required
//             />
//           </div>
//           {error && <p className="text-danger">{error}</p>}
//           <div className="d-flex justify-content-center mt-4 btn btn-md"> <button type="submit" className="btn btn-primary w-50 flex-center">
//             Submit
//           </button></div>
         
//         </form>
//       </div>
//     </div>
//   );
// };

// export default CreatePassword;
