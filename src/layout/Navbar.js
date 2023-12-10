import React, { useState, useEffect } from "react";
import logo from "../resources/logo.svg";
import "../style/NavbarStyle.css";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = ({ selectedMenu, setSelectedMenu }) => {
  const [isTransparent, setIsTransparent] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 50;
      const shouldSetTransparent = window.scrollY < scrollThreshold;
      setIsTransparent(shouldSetTransparent);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box
      className={`nav ${isTransparent ? "transparent" : ""}`}
      style={{
        backgroundImage: isTransparent
          ? 'url("../resources/homepageBanner.jpg")'
          : "none",
      }}
    >
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
              height: "60px",
              width: "auto",
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
