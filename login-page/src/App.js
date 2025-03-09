import CreatePassword from "./CreatePassword";
import './App.css';
import Login from './Login';
import Home from './Home';
import { Routes, Route } from "react-router-dom";
import React from "react";
import SendMail from "./SendMail";
 import Tickets from "./Tickets";
import ViewTicket from "./ViewTicket";
import AddTicket from "./AddTicket";


function App() {
  return (
    <Routes>
     <Route path="/" element={<Login />} />
     <Route path="/home" element={<Home />} />
     <Route path="/support" element={<Tickets />} />
     <Route path="/forgot-password" element={<SendMail />} />
     <Route path="/reset-password/:userId" element={<CreatePassword />} />
     <Route path="/ticket/:ticketId" element={<ViewTicket />} />
     <Route path="/send-mail" element={<SendMail/>}/>
     <Route path="/add-ticket" element={<AddTicket />}/>
     
    </Routes>
  );
}

export default App;




