import React, { useEffect, useState } from "react";
import logo from "./assets/logo.png";
import { Link } from "react-router-dom";
import "./Tickets.css";
import "bootstrap/dist/css/bootstrap.min.css";
import getTotalTickets from "./API/TicketAPI";
import getClosedTickets from "./API/TicketClosedAPI";
import getInProgressTickets from "./API/TicketOpenAPI";
import getAllTickets from "./API/ListOfTicketDataAPI";
import { useNavigate } from "react-router-dom";

const Tickets = () => {
  const [tickets, setTickets] = useState([]); // Store ticket data
  const [totalTickets, setTotalTickets] = useState(0);
  const [closedTickets, setClosedTickets] = useState(0);
  const [inProgressTickets, setInProgressTickets] = useState(0);
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const navigate = useNavigate();
  // Fetch ticket data
  useEffect(() => {
    const fetchData = async () => {
      const ticketData = await getAllTickets();
      setTickets(ticketData);

      const total = await getTotalTickets();
      setTotalTickets(total);

      const closed = await getClosedTickets();
      setClosedTickets(closed);

      const inProgress = await getInProgressTickets();
      setInProgressTickets(inProgress);
    };

    fetchData();

    // Auto-refresh every 10 seconds
    const interval = setInterval(fetchData, 10000);
    return () => clearInterval(interval);
  }, []);

  // Update Date & Time Every Second
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formattedDate = currentDateTime.toDateString();
  const formattedTime = currentDateTime.toLocaleTimeString();

  return (
    <div className="container">
      <img src={logo} alt="Logo" className="logo" />
      {/* Breadcrumbs */}
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/home">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="/support">Support</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Tickets
          </li>
        </ol>
      </nav>
      <div className="cards-container">
        <div className="card name">
          <span>Total Tickets: </span>
          <span className="count-number">{totalTickets}</span>
        </div>
        <div className="card name">
          <span>Tickets Closed: </span>
          <span className="count-number">{closedTickets}</span>
        </div>
        <div className="card name">
          <span>Tickets In-Progress: </span>
          <span className="count-number">{inProgressTickets}</span>
        </div>
      </div>
      <div className="table-header">
        <h4 className="table-head">List Of Tickets</h4>
        <button className="add-ticket-button" onClick={() => navigate("/add-ticket")}>Add Ticket </button>
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Ticket Number</th>
              <th>Ticket Subject</th>
              <th>Ticket Creation Date/Time</th>
              <th>Ticket Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
  {tickets.map((ticket, index) => (
    <tr key={ticket.icrystal_ticket_id || index}> {/* Assigning a unique key */}
      <td>{index + 1}</td>
      <td>{ticket.icrystal_ticket_number}</td>
      <td>{ticket.icrystal_ticket_subject}</td>
      <td>{new Date(ticket.icrystal_ticket_creation_date).toLocaleString()}</td>
      <td>{ticket.icrystal_ticket_status_name}</td>
      <td>
        <a href={`/ticket/${ticket.icrystal_ticket_id}`} className="view-link">View</a>
      </td>
    </tr>
  ))}
</tbody>


        </table>
        <div className="login-footer">
          <p>
            Copyright (c) 2020 All Rights Reserved | Designed and Developed By  
            <a href="https://www.zaubacorp.com/CRYSTREE-SOLUTIONS-PRIVATE-LIMITED-U72900TN2018PTC126504" target="_blank" rel="noopener noreferrer">
              Crystree Solutions Private Limited
            </a>. {formattedDate} {formattedTime} | iCrystalCRM Application Ver. 7.0 | DB Ver. 7.7
          </p>
        </div>
      </div>
    </div>
  );
};
export default Tickets;

