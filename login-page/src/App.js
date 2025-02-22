import CreatePassword from "./CreatePassword";
import './App.css';
import Login from './Login';
import Home from './Home';
import { Routes, Route } from "react-router-dom";
import React from "react";
import SendMail from "./SendMail";

function App() {
  return (
    <Routes>
     <Route path="/" element={<Login />} />
     <Route path="/home" element={<Home />} />
     <Route path="/create-password" element={<CreatePassword />} />
     <Route path="/send-mail" element={<SendMail/>}/>
    </Routes>
  );
}

export default App;




