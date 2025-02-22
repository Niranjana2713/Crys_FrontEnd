import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css"; // Ensure you create this file for styling

const Home = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isMasterOpen, setIsMasterOpen] = useState(false);
  return (

   
    <div className="d-flex flex-column">
       {/* Top Bar */}
   
       <div className="top-bar">    
        <i className="bi bi-search" style={{ color: "black", marginRight: "5px",fontSize: "15px", color: "rgb(6, 41, 64)" }}></i>
       <i className="bi bi-chevron-down" style={{ color: "black", marginRight: "25px" }}></i>
          <input
            type="text"
            className="search-box"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
     
        <hr className="custom-line" />
      {/* Sidebar */}
      <div
        className={`sidebar ${isExpanded ? "expanded" : ""}`}
        
      >
        <ul className="list-unstyled">
        
          <h4 className="h4 d-flex justify-content-between align-items-center">
 
  ICrystal
  <i className="bi bi-person-lines-fill" style={{ color: "white", marginRight: "15px" }}></i>
</h4>
        
          <p className="h6">
            <u>Navigation</u></p>
          
       <p className="dash">   <i className="bi bi-grid-fill" style={{ color: "white", marginRight: "20px",marginLeft:"6px",fontSize:"20px" }}></i>Dashboard</p>
      
       
          {/* Master Dropdown */}
          <li className="sidebar-item">
            <div 
             
              onClick={() => setIsMasterOpen(!isMasterOpen)}>
                <i className="bi bi-unity" style={{ color: "white", marginRight: "20px",marginLeft:"-35px",fontSize:"20px" }}></i>  
                Master
              <i
                className={`bi bi-chevron-${isMasterOpen ? "down" : "right"}`}
                style={{ marginLeft: "80px" }}
              ></i>
            </div>
            {isMasterOpen && (
              <ul className="list-unstyled submenu sum">
                <li className="mt-3" style={{ marginLeft: "30px" }}>
                  <Link to="/company-master">
                  <i className="bi bi-sourceforge lik" style={{ color: "white", marginRight: "20px",marginLeft:"-35px" }}></i>  
                  Company Master</Link>
                </li>
                <li className="mt-3" style={{ marginLeft: "30px" }}>
                  <Link to="/doctor-master">
                  <i className="bi bi-mortarboard-fill" style={{ color: "white", marginRight: "20px",marginLeft:"-35px" }}></i>  Doctor Master</Link>
                </li>
                <li className="mt-3" style={{ marginLeft: "30px" }}>
                  <Link to="/patients-master">
                  <i className="bi bi-person-wheelchair" style={{ color: "white", marginRight: "20px",marginLeft:"-35px" }}></i>  Patients Master</Link>
                </li>
                <li className="mt-3" style={{ marginLeft: "30px" }}>
                  <Link to="/drug-master">
                  <i className="bi bi-capsule" style={{ color: "white", marginRight: "20px",marginLeft:"-35px" }}></i>  Drug Master</Link>
                </li>
              </ul>
            )}
          </li>


          <li className="sidebar-item"><Link to="/transactions"><i className="bi bi-graph-up-arrow" style={{ color: "white", marginRight: "20px",marginLeft:"-35px",fontSize:"20px"  }}></i>Transactions <i
                className={`bi bi-chevron-${isMasterOpen ? "down" : "right"}`}
                style={{ marginLeft: "37px" }}
              ></i></Link></li>
          <li className="sidebar-item"><Link to="/reports"><i className="bi bi-layers-half" style={{ color: "white", marginRight: "20px",marginLeft:"-35px",fontSize:"20px"  }}></i>Reports</Link></li>
          <li className="sidebar-item"><Link to="/support"><i className="bi bi-hand-thumbs-up" style={{ color: "white", marginRight: "20px",marginLeft:"-35px",fontSize:"20px" }}></i>Support</Link></li>
        </ul>
      </div>

      {/* Main Content */}
      
    </div>
    
  );
};

export default Home;
