import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaRocket, FaCogs, FaMobileAlt, FaUsers } from "react-icons/fa";
import viteLogo from "/vite.svg";
import reactLogo from "./assets/react.svg";
import "./App.css";

const LandingPage = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="landing-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">Code</div>
        <ul className="nav-links">
          <li><a href="#">Features</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Get Started</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <div className="hero">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to My Landing Page 🚀
        </motion.h1>
      </div>
    </div>
  );
};

export default LandingPage;
