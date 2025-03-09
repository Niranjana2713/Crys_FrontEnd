import React, { useEffect, useState } from "react"; 
import { useParams } from "react-router-dom";
import logo from "./assets/logo.png";
import getTicketById from "./API/ViewTicketAPI";
import "./ViewTicket.css";

const ViewTicket = () => {
    const { ticketId } = useParams(); // Get ticketId from URL params
    const [ticket, setTicket] = useState(null);
    const [currentDateTime, setCurrentDateTime] = useState(new Date());

    // ✅ Get user details from localStorage
    const userId = localStorage.getItem("userId");
    const username = localStorage.getItem("username");

    useEffect(() => {
        if (ticketId) {
            const fetchTicket = async () => {
                try {
                    const ticketData = await getTicketById(ticketId);
                    console.log("Fetched Ticket Data:", ticketData);
                    if (ticketData) {
                        // ✅ Add created_by field with username
                        setTicket({ ...ticketData, created_by: username });
                    } else {
                        console.error("No ticket data found!");
                    }
                } catch (error) {
                    console.error("Error fetching ticket:", error);
                }
            };
            fetchTicket();
        }
    }, [ticketId, username]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentDateTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

        const formattedDate = currentDateTime.toDateString();
        const formattedTime = currentDateTime.toLocaleTimeString();

    if (!ticketId) {
        return <p>Error: Ticket ID is missing!</p>;
    }

    return (
        <div className="container">
            <img src={logo} alt="Logo" className="logo" />
            <div className="table-head">
                <strong>View Tickets - </strong>{ticket?.icrystal_ticket_number}
            </div>
            <div className="ticket-container">
    {/* Row 1 - 3 Items */}
    <div className="ticket-row">
        <div className="ticket-detail"><strong>Ticket Subject:</strong> {ticket?.icrystal_ticket_subject || "N/A"}</div>
        <div className="ticket-detail"><strong>Ticket Number:</strong> {ticket?.icrystal_ticket_number || "N/A"}</div>
        <div className="ticket-detail"><strong>Ticket Status:</strong> {ticket?.icrystal_ticket_status_name || "N/A"}</div>
    </div>

    {/* Row 2 - 3 Items */}
    <div className="ticket-row">
        <div className="ticket-detail"><strong>Ticket Description:</strong> {ticket?.icrystal_ticket_description || "N/A"}</div>
        <div className="ticket-detail"><strong>Ticket Creation Date:</strong> {ticket?.icrystal_ticket_creation_date ? new Date(ticket.icrystal_ticket_creation_date).toLocaleString() : "Not Available"}</div>
        <div className="ticket-detail"><strong>Ticket Last Updated:</strong> {ticket?.icrystal_ticket_last_update_date || "N/A"}</div>
    </div>

    {/* Row 3 - 3 Items */}
    <div className="ticket-row">
        <div className="ticket-detail"><strong>Ticket Notes:</strong> {ticket?.icrystal_ticket_notes || "N/A"}</div>
        <div className="ticket-detail"><strong>Ticket Created By:</strong> {ticket?.created_by || "N/A"}</div>
        <div className="ticket-detail"><strong>Ticket Attachments:</strong> {ticket?.icrystal_ticket_attachments || "N/A"}</div>
    </div>

    {/* Row 4 - 1 Item */}
    <div className="ticket-row">
        <div className="ticket-detail"><strong>Ticket Last Updated By:</strong> {ticket?.modified_by || "N/A"}</div>
    </div>
</div>


            {/* Buttons */}
            <div className="button-container">
                <button className="btn btn-md button-backs">Back</button>
                <button className="btn btn-md button-cancels">Cancel</button>
            </div>

            {/* Footer */}
            <div className="login-footer">
                <p>
                    Copyright (c) 2020 All Rights Reserved | Designed and Developed By{" "}
                    <a href="https://www.zaubacorp.com/CRYSTREE-SOLUTIONS-PRIVATE-LIMITED-U72900TN2018PTC126504"
                        target="_blank" rel="noopener noreferrer">
                        Crystree Solutions Private Limited
                    </a>. {formattedDate} {formattedTime} | iCrystalCRM Application Ver. 7.0 | DB Ver.7.7
                </p>
            </div>
        </div>
    );
};

export default ViewTicket;

// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import logo from "./assets/logo.png";
// import getTicketById from "./API/ViewTicketAPI";
// import "./ViewTicket.css";

// const ViewTicket = () => {
//     const { ticketId } = useParams(); // Get ticketId from URL params
//     const [ticket, setTicket] = useState(null);
//     const [currentDateTime, setCurrentDateTime] = useState(new Date());

//     // ✅ Get user details from localStorage
//     const userId = localStorage.getItem("userId");
//     const username = localStorage.getItem("username");
//     // ✅ Ensure all hooks are called unconditionally
//     useEffect(() => {
//         if (ticketId) {
//             const fetchTicket = async () => {
//                 try {
//                     const ticketData = await getTicketById(ticketId);
//                     console.log("Fetched Ticket Data:", ticketData);

//                     if (ticketData) {
//                         // ✅ Add "created_by" if missing
//                         setTicket({
//                             ...ticketData,
//                             created_by: ticketData.created_by || username, // Use localStorage if empty
//                         });
//                     } else {
//                         console.error("No ticket data found!");
//                     }
//                 } catch (error) {
//                     console.error("Error fetching ticket:", error);
//                 }
//             };
//             fetchTicket();
//         }
//     }, [ticketId, username]);


//     useEffect(() => {
//         const interval = setInterval(() => {
//             setCurrentDateTime(new Date());
//         }, 1000);

//         return () => clearInterval(interval);
//     }, []);

//     const formattedDate = currentDateTime.toDateString();
//     const formattedTime = currentDateTime.toLocaleTimeString();

//     // ✅ Move the early return **after** all Hooks
//     if (!ticketId) {
//         return <p>Error: Ticket ID is missing!</p>;
//     }

//     return (
//         <div className="container">
//         <img src={logo} alt="Logo" className="logo" />
//         <div className="table-head">
//             <h3>View Tickets</h3>
//         </div>

//         {/* Two Horizontal Cards */}
//         <div className="ticket-cards">
//             {/* First Card */}
//             <div className="ticket-card">
//                 <h4>Ticket Details</h4>
//                 <div className="ticket-detail">
//                     <strong>Ticket Subject:</strong> {ticket?.icrystal_ticket_subject || "N/A"}
//                 </div>
//                 <div className="ticket-detail">
//                     <strong>Ticket Number:</strong> {ticket?.icrystal_ticket_number || "N/A"}
//                 </div>
//                 <div className="ticket-detail">
//                     <strong>Ticket Status:</strong> {ticket?.icrystal_ticket_status_name || "N/A"}
//                 </div>
//                 <div className="ticket-detail">
//                     <strong>Ticket Description:</strong> {ticket?.icrystal_ticket_description || "N/A"}
//                 </div>
//                 <div className="ticket-detail">
//                     <strong>Ticket Creation Date:</strong>{" "}
//                     {ticket?.icrystal_ticket_creation_date
//                         ? new Date(ticket.icrystal_ticket_creation_date).toLocaleString()
//                         : "Not Available"}
//                 </div>
//             </div>

//             {/* Second Card */}
//             <div className="ticket-card">
//                 <h4>Additional Information</h4>
//                 <div className="ticket-detail">
//                     <strong>Ticket Last Updated:</strong> {ticket?.icrystal_ticket_last_update_date || "N/A"}
//                 </div>
//                 <div className="ticket-detail">
//                     <strong>Ticket Notes:</strong> {ticket?.icrystal_ticket_notes || "N/A"}
//                 </div>
//                 <div className="ticket-detail">
//                     <strong>Ticket Created By:</strong> {ticket?.created_by || "N/A"}  {/* ✅ Updated */}
//                 </div>
//                 <div className="ticket-detail">
//                     <strong>Ticket Attachments:</strong> {ticket?.icrystal_ticket_attachments || "N/A"}
//                 </div>
//                 <div className="ticket-detail">
//                     <strong>Ticket Last Updated By:</strong> {ticket?.modified_by || "N/A"}
//                 </div>
//             </div>
//         </div>

//         {/* Footer */}
//         <div className="login-footer">
//             <p>
//                 Copyright (c) 2020 All Rights Reserved | Designed and Developed By{" "}
//                 <a href="https://www.zaubacorp.com/CRYSTREE-SOLUTIONS-PRIVATE-LIMITED-U72900TN2018PTC126504"
//                     target="_blank" rel="noopener noreferrer">
//                     Crystree Solutions Private Limited
//                 </a>. {formattedDate} {formattedTime} | iCrystalCRM Application Ver. 7.0 | DB Ver.7.7
//             </p>
//         </div>
//     </div>
// );
// };

// export default ViewTicket;
