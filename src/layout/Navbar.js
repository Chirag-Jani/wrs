import React from "react";
import logo from "../resources/logo.svg";

import "../style/NavbarStyle.css";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = ({ selectedMenu, setSelectedMenu }) => {
  return (
    <Box className="nav">
      <Box>
        <Link
          to={"/"}
          onClick={() => {
            setSelectedMenu("/");
          }}
        >
          <img
            src={logo}
            alt="WRS"
            style={{
              width: "40px",
              height: "auto",
              margin: "0 30px",
              cursor: "pointer",
            }}
          />
        </Link>
      </Box>
      <Box className="nav_elements">
        <Link className={`ele ${selectedMenu === "/about-us" ? "active" : ""}`}>
          About us
        </Link>
        <Link
          to={"/offerings"}
          className={`ele ${selectedMenu === "/offerings" ? "active" : ""}`}
          onClick={() => {
            setSelectedMenu("/offerings");
          }}
        >
          Offerings
        </Link>
        <Link className={`ele ${selectedMenu === "/pricing" ? "active" : ""}`}>
          Pricing
        </Link>
        <Link
          className={`ele ${selectedMenu === "/contact-us" ? "active" : ""}`}
        >
          Contact us
        </Link>
      </Box>
    </Box>
  );
};

export default Navbar;
