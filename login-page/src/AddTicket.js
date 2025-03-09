import logo from "./assets/logo.png";
import React, { useEffect, useState } from "react"; 
import "./AddTicket.css";
const AddTicket = () => {
    const [currentDateTime, setCurrentDateTime] = useState(new Date());
    const formattedDate = currentDateTime.toDateString();
    const formattedTime = currentDateTime.toLocaleTimeString();
    const [formData, setFormData] = useState({
        ticketSubject: "",
        ticketNumber: "",
        ticketStatus: "",
        ticketDescription: "",
        ticketCreationDate: "",
        lastUpdated: "",
        ticketNotes: "",
        createdBy: "",
        attachments: "",
        updatedBy: "",
    });
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentDateTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="container">
        <img src={logo} alt="Logo" className="logo" />
        <div className="table-head">
            <h4>Create Ticket</h4>
        </div>

        {/* Two Column Form */}
        <form className="ticket-form">
            {/* Left Column */}
            <div className="form-column">
                <div className="form-group">
                    <label>Ticket Subject:</label>
                    <input 
                        type="text" 
                        name="ticketSubject" 
                        value={formData.ticketSubject} 
                        onChange={handleChange} 
                    />
                </div>
                <div className="form-group">
                    <label>Ticket Number:</label>
                    <input 
                        type="text" 
                        name="ticketNumber" 
                        value={formData.ticketNumber} 
                        onChange={handleChange} 
                    />
                </div>
                <div className="form-group">
                    <label>Ticket Status:</label>
                    <input 
                        type="text" 
                        name="ticketStatus" 
                        value={formData.ticketStatus} 
                        onChange={handleChange} 
                    />
                </div>
                <div className="form-group">
                    <label>Ticket Description:</label>
                    <input 
                        type="text" 
                        name="ticketDescription" 
                        value={formData.ticketDescription} 
                        onChange={handleChange} 
                    />
                </div>
                <div className="form-group">
                    <label>Creation Date:</label>
                    <input 
                        type="date" 
                        name="ticketCreationDate" 
                        value={formData.ticketCreationDate} 
                        onChange={handleChange} 
                    />
                </div>
            </div>

            {/* Right Column */}
            <div className="form-column">
                <div className="form-group">
                    <label>Last Updated:</label>
                    <input 
                        type="text" 
                        name="lastUpdated" 
                        value={formData.lastUpdated} 
                        onChange={handleChange} 
                    />
                </div>
                <div className="form-group">
                    <label>Ticket Notes:</label>
                    <input 
                        type="text" 
                        name="ticketNotes" 
                        value={formData.ticketNotes} 
                        onChange={handleChange} 
                    />
                </div>
                <div className="form-group">
                    <label>Created By:</label>
                    <input 
                        type="text" 
                        name="createdBy" 
                        value={formData.createdBy} 
                        onChange={handleChange} 
                    />
                </div>
                <div className="form-group">
                    <label>Attachments:</label>
                    <input 
                        type="file" 
                        name="attachments" 
                        onChange={handleChange} 
                    />
                </div>
                <div className="form-group">
                    <label>Last Updated By:</label>
                    <input 
                        type="text" 
                        name="updatedBy" 
                        value={formData.updatedBy} 
                        onChange={handleChange} 
                    />
                </div>
            </div>
        </form>

        {/* Buttons */}
        <div class="button-container">
            <button type="button" className="btn back">Back</button>
            <button type="submit" className="btn save">Save</button>
            <button type="cancel" className="btn cancel">Cancel</button>
      </div>


            {/* Footer */}
            <div className="login-footer">
                <p>
                    Copyright (c) 2020 All Rights Reserved | Designed and Developed By
                    <a href="https://www.zaubacorp.com/CRYSTREE-SOLUTIONS-PRIVATE-LIMITED-U72900TN2018PTC126504" target="_blank" rel="noopener noreferrer">
                        Crystree Solutions Private Limited
                    </a>. {formattedDate} {formattedTime} | iCrystalCRM Application Ver. 7.0 | DB Ver.7.7
                </p>
            </div>
        </div>
    );
};

export default AddTicket;
