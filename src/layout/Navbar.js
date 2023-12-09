import React from "react";
import logo from "../resources/logo.svg";

import "../style/NavbarStyle.css";
import { Box } from "@mui/material";

const Navbar = () => {
  return (
    <Box className="nav">
      <Box>
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
      </Box>
      <Box className="nav_elements">
        <p className="ele ">About us</p>
        <p className="ele ">Offerings</p>
        <p className="ele ">Pricing</p>
        <p className="ele ">Contact us</p>
      </Box>
    </Box>
  );
};

export default Navbar;
