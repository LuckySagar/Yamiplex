// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="navbar">
      <h1 className="logo" >YamiPlex</h1>
      <nav>
        
        <Link to="/home">Home</Link>
        <Link to="/genre">Genres</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </nav>
    </header>
  );
};

export default Navbar;
