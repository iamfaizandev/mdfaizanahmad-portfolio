import React from "react";
import "./nav.css";
import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { FcHome, FcGraduationCap } from "react-icons/fc";
import { FaCode, FaUserAlt } from "react-icons/fa";
export default function NavBar() {
  return (
    <div className="container-fluid">
      <nav className="nav d-flex justify-content-center flex-nowrap mt-4">
        <Nav className="nav_links ">
          <NavLink to="/" className="nav_link">
            <FcHome className="nav_icon" />
          </NavLink>
          <NavLink to="/About" className="nav_link">
            <FaUserAlt className="nav_icon" />
          </NavLink>
          <NavLink to="/Education" className="nav_link">
            <FcGraduationCap className="nav_icon" />
          </NavLink>
          <NavLink to="/Skills" className="nav_link">
            <FaCode className="nav_icon" />
          </NavLink>
        </Nav>
      </nav>
    </div>
  );
}
