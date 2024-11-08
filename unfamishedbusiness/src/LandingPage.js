import React from "react";
import { useNavigate } from "react-router-dom";
import './App.css';


const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Welcome to UnfamishedBusiness</h1>
      <button onClick={() => navigate("/login")}>Login</button>
      <button onClick={() => navigate("/register")}>Register</button>
    </div>
  );
};

export default LandingPage;
