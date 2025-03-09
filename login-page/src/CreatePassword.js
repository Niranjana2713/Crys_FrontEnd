// import React, { useState } from "react";
// import { useParams } from "react-router-dom"; // Get userId from URL
// import resetPasswordApi from "./API/ResetPasswordAPI";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";


// const CreatePassword = () => {
//   const { userId } = useParams(); // Get userId from URL params
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [error, setError] = useState("");
//   const [successMessage, setSuccessMessage] = useState("");
//   const handleSubmit = async (e) => {
//     e.preventDefault();
  
//     if (password !== confirmPassword) {
//       setError("❌ Passwords do not match!");
//       setSuccessMessage("");
//       return;
//     }
  
//     setError("");
  
//     try {
//       const response = await resetPasswordApi(userId, password, confirmPassword);
  
//       if (!response) {
//         throw new Error("❌ No response received from server.");
//       }
  
//       console.log("📩 API Response Status:", response.status);
  
//       // 🔍 Check response type
//       const contentType = response.headers.get("content-type");
//       console.log("📩 Content-Type:", contentType);
  
//       let data;
//       if (contentType && contentType.includes("application/json")) {
//         data = await response.json();
//       } else {
//         data = { message: await response.text() };
//       }
  
//       console.log("📩 API Response Body:", data);
  
//       if (response.ok) {
//         setSuccessMessage(data.message || "✅ Password reset successfully!");
//       } else {
//         setError(data.message || "❌ Failed to reset password.");
//       }
//     } catch (err) {
//       console.error("❌ Error resetting password:", err.message);
//       setError(err.message || "❌ Something went wrong. Please try again.");
//     }
//   };
  
  


//   return (
//     <div className="create-password-container">
//       <div className="card create-password-card">
//         <h4 className="text-center mt-3" style={{ fontSize: "25px", color: "rgb(13, 23, 134)" }}>
//           Reset Password
//         </h4>
//         <div className="text-center my-3">
//           <i className="bi bi-person-fill-lock" style={{ fontSize: "40px", color: "rgb(11, 153, 248)" }}></i>
//         </div>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-3 mt-1">
//             <label className="form-label">New Password</label>
//             <div className="input-group">
//               <span className="input-group-text"><i className="bi bi-shield-lock-fill"></i></span>
//               <input
//                 type="password"
//                 className="form-control"
//                 placeholder="New Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//             </div>
//           </div>

//           <div className="mb-3 mt-4">
//             <label className="form-label">Confirm Password</label>
//             <div className="input-group">
//               <span className="input-group-text"><i className="bi bi-shield-fill-check"></i></span>
//               <input
//                 type="password"
//                 className="form-control"
//                 placeholder="Repeat Password"
//                 value={confirmPassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//                 required
//               />
//             </div>
//           </div>

//           {error && <p className="text-danger">{error}</p>}
//           {successMessage && <p className="text-success">{successMessage}</p>}

//           <div className="d-flex justify-content-center">
//             <button type="submit" className="btn btn-md log mt-3">Submit</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default CreatePassword;
//**************************************************88 */

// import React, { useState } from "react";
// import { useParams, useNavigate } from "react-router-dom"; // Import useNavigate
// import resetPasswordApi from "./API/ResetPasswordAPI";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";

// const CreatePassword = () => {
//   const { userId } = useParams();
//   const navigate = useNavigate(); // Hook to navigate to another page
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [error, setError] = useState("");
//   const [successMessage, setSuccessMessage] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (password !== confirmPassword) {
//       setError("❌ Passwords do not match!");
//       setSuccessMessage("");
//       return;
//     }

//     setError("");

//     try {
//       const response = await resetPasswordApi(userId, password, confirmPassword);

//       if (!response) {
//         throw new Error("❌ No response received from server.");
//       }

//       console.log("📩 API Response Status:", response.status);
//       const contentType = response.headers.get("content-type");
//       console.log("📩 Content-Type:", contentType);

//       let data;
//       if (contentType && contentType.includes("application/json")) {
//         data = await response.json();
//       } else {
//         data = { message: await response.text() };
//       }

//       console.log("📩 API Response Body:", data);

//       if (response.ok) {
//         setSuccessMessage(data.message || "✅ Password reset successfully!");

//         // Redirect to login page after 2 seconds
//         setTimeout(() => {
//           navigate("/");
//         }, 2000);
//       } else {
//         setError(data.message || "❌ Failed to reset password.");
//       }
//     } catch (err) {
//       console.error("❌ Error resetting password:", err.message);
//       setError(err.message || "❌ Something went wrong. Please try again.");
//     }
//   };

//   return (
//     <div className="create-password-container">
//       <div className="card create-password-card">
//         <h4 className="text-center mt-3" style={{ fontSize: "25px", color: "rgb(13, 23, 134)" }}>
//           Reset Password
//         </h4>
//         <div className="text-center my-3">
//           <i className="bi bi-person-fill-lock" style={{ fontSize: "40px", color: "rgb(11, 153, 248)" }}></i>
//         </div>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-3 mt-1">
//             <label className="form-label">New Password</label>
//             <div className="input-group">
//               <span className="input-group-text"><i className="bi bi-shield-lock-fill"></i></span>
//               <input
//                 type="password"
//                 className="form-control"
//                 placeholder="New Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//             </div>
//           </div>

//           <div className="mb-3 mt-4">
//             <label className="form-label">Confirm Password</label>
//             <div className="input-group">
//               <span className="input-group-text"><i className="bi bi-shield-fill-check"></i></span>
//               <input
//                 type="password"
//                 className="form-control"
//                 placeholder="Repeat Password"
//                 value={confirmPassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//                 required
//               />
//             </div>
//           </div>

//           {error && <p className="text-danger">{error}</p>}
//           {successMessage && <p className="text-success">{successMessage}</p>}

//           <div className="d-flex justify-content-center">
//             <button type="submit" className="btn btn-md log mt-3">Submit</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default CreatePassword;
import React, { useState, useEffect, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import resetPasswordApi from "./API/ResetPasswordAPI";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const CreatePassword = () => {
  const { userId } = useParams();
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = useCallback(async (e) => {
    if (e) e.preventDefault(); // Handle both manual submit & key press

    if (password !== confirmPassword) {
      setError("❌ Passwords do not match!");
      setSuccessMessage("");
      return;
    }

    setError("");

    try {
      const response = await resetPasswordApi(userId, password, confirmPassword);

      if (!response) {
        throw new Error("❌ No response received from server.");
      }

      console.log("📩 API Response Status:", response.status);
      const contentType = response.headers.get("content-type");
      console.log("📩 Content-Type:", contentType);

      let data;
      if (contentType && contentType.includes("application/json")) {
        data = await response.json();
      } else {
        data = { message: await response.text() };
      }

      console.log("📩 API Response Body:", data);

      if (response.ok) {
        setSuccessMessage(data.message || "✅ Password reset successfully!");

        // Redirect to login page after 2 seconds
        setTimeout(() => {
          navigate("/");
        }, 2000);
      } else {
        setError(data.message || "❌ Failed to reset password.");
      }
    } catch (err) {
      console.error("❌ Error resetting password:", err.message);
      setError(err.message || "❌ Something went wrong. Please try again.");
    }
  }, [userId, password, confirmPassword, navigate]);

  // Add keyboard event listener for Ctrl + S
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.ctrlKey && e.key === "s") {
        e.preventDefault(); // Prevent browser save
        handleSubmit(); // Call form submit function
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleSubmit]); // ✅ Now handleSubmit is stable & doesn't cause re-renders

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
              <span className="input-group-text"><i className="bi bi-shield-lock-fill"></i></span>
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
              <span className="input-group-text"><i className="bi bi-shield-fill-check"></i></span>
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
          {successMessage && <p className="text-success">{successMessage}</p>}

          <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-md log mt-3">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePassword;
