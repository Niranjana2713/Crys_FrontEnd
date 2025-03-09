import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie"; // Import js-cookie for handling cookies
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";
import background from "./assets/background.png";
import logo from "./assets/logo.png";
import loginUser from "./API/LoginpageAPI";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const savedUsername = Cookies.get("savedUsername"); // Get username from cookies
    if (savedUsername) {
      setUsername(savedUsername);
      setRememberMe(true);
    }

    const interval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formattedDate = currentDateTime.toDateString();
  const formattedTime = currentDateTime.toLocaleTimeString();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (rememberMe) {
      Cookies.set("savedUsername", username, { expires: 7 }); // Store for 7 days
    } else {
      Cookies.remove("savedUsername"); // Remove when unchecked
    }

    loginUser(username, password, rememberMe, navigate, setError);
  };

  return (
    <div className="login-container" style={{ backgroundImage: `url(${background})`, backgroundSize: "cover", backgroundPosition: "center", height: "100vh" }}>
      <div className="card p-4 shadow-lg login-box cards">
        <div className="text-center">
          <img src={logo} alt="Logo" className="login-logo" />
        </div>
        <div className="heading">
          <h5 className="text-center mb-4">ICrystal CRM Application</h5>
        </div>

        {error && <div className="alert alert-danger">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="form-label">Username</label>
            <div className="input-group">
              <span className="input-group-text">
                <i className="bi bi-people-fill"></i>
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="form-label">Password</label>
            <div className="input-group">
              <span className="input-group-text">
                <i className="bi bi-fingerprint ii"></i>
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
                className="form-check-input mt-1"
                id="rememberMe"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <label className="form-check-label mt-0" htmlFor="rememberMe">
                Remember Me
              </label>
            </div>
            <p className="forgot-password-link mt-3" style={{ color: "blue", cursor: "pointer" }} onClick={() => navigate("/forgot-password")}>
              Forgot Password?
            </p>
          </div>

          <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-md mt-2">Login</button>
          </div>
        </form>
      </div>

      <div className="login-footer">
        <p>
          Copyright (c) 2020 All Rights Reserved | Designed and Developed By  
          <a href="https://www.zaubacorp.com/CRYSTREE-SOLUTIONS-PRIVATE-LIMITED-U72900TN2018PTC126504" target="_blank" rel="noopener noreferrer">
            Crystree Solutions Private Limited
          </a>. {formattedDate} {formattedTime} | iCrystalCRM Application Ver. 7.0 | DB Ver. 7.7
        </p>
      </div>
    </div>
  );
};

export default Login;

// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { BASE_URL } from "./API/Base";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./Login.css";
// import background from "./assets/background.png";
// import logo from "./assets/logo.png";
// import loginUser from "./API/LoginpageAPI";

// const Login = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [rememberMe, setRememberMe] = useState(false);
//   const [error, setError] = useState("");
//   const navigate = useNavigate();
//   const [currentDateTime, setCurrentDateTime] = useState(new Date());

//   useEffect(() => {
//     const savedUsername = localStorage.getItem("savedUsername");
//     if (savedUsername) {
//       setUsername(savedUsername);
//       setRememberMe(true);
//     }

//     const interval = setInterval(() => {
//       setCurrentDateTime(new Date());
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);

//   const formattedDate = currentDateTime.toDateString();
//   const formattedTime = currentDateTime.toLocaleTimeString();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     loginUser(username, password, rememberMe, navigate, setError);
//   };


//   return (
//     <div className="login-container" style={{ backgroundImage: `url(${background})`, backgroundSize: "cover", backgroundPosition: "center", height: "100vh" }}>
//       <div className="card p-4 shadow-lg login-box cards">
//         <div className="text-center">
//           <img src={logo} alt="Logo" className="login-logo" />
//         </div>
//         <div className="heading">
//           <h5 className="text-center mb-4">ICrystal CRM Application</h5>
//         </div>

//         {error && <div className="alert alert-danger">{error}</div>}
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label className="form-label">Username</label>
//             <div className="input-group">
//               <span className="input-group-text">
//                 <i className="bi bi-people-fill"></i>
//               </span>
//               <input type="text" className="form-control" placeholder="Enter your username" value={username} onChange={(e) => setUsername(e.target.value)} required disabled={rememberMe} />
//             </div>
//           </div>

//           <div className="mb-4">
//             <label className="form-label">Password</label>
//             <div className="input-group">
//               <span className="input-group-text">
//                 <i className="bi bi-fingerprint ii"></i>
//               </span>
//               <input type="password" className="form-control" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} required />
//             </div>
//           </div>

//           <div className="mb-3 d-flex justify-content-between align-items-center">
//             <div className="form-check">
//               <input type="checkbox" className="form-check-input mt-1" id="rememberMe" checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} />
//               <label className="form-check-label mt-0 " htmlFor="rememberMe">Remember Me</label>
//             </div>
//             <p 
//         className="forgot-password-link mt-3"
//         style={{ color: "blue", cursor: "pointer" }}
//         onClick={() => navigate("/forgot-password")}
//       >
//         Forgot Password?
//       </p>
//           </div>

//           <div className="d-flex justify-content-center">
//             <button type="submit" className="btn btn-md log mt-1">Login</button>
//           </div>
//         </form>
//       </div>

//       <div className="login-footer">
//         <p>
//           Copyright (c) 2020 All Rights Reserved | Designed and Developed By 
//           <a href="https://www.zaubacorp.com/CRYSTREE-SOLUTIONS-PRIVATE-LIMITED-U72900TN2018PTC126504" target="_blank" rel="noopener noreferrer">
//             Crystree Solutions Private Limited
//           </a>. {formattedDate} {formattedTime} | iCrystalCRM Application Ver. 7.0 | DB Ver. 7.7
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;