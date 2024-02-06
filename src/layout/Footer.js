import React from "react";
import { AppBar, Container, Toolbar, Typography, Link } from "@mui/material";

const footerStyles = {
  appBar: {
    top: "auto",
    bottom: 0,
    backgroundColor: "#1e1e1e", // You can replace this with your desired color
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px",
  },
  text: {
    color: "#fff", // You can replace this with your desired text color
    textDecoration: "none",
  },
};

const Footer = () => {
  return (
    <AppBar position="static" style={footerStyles.appBar}>
      <Container style={footerStyles.container}>
        <Typography variant="body2" style={footerStyles.text}>
          &copy; {new Date().getFullYear()} World Realtor Solutions
        </Typography>
        <Typography variant="body2" style={footerStyles.text}>
          Developed by{" "}
          <Link href="mailto:chirag@gmail.com" style={footerStyles.text}>
            Chirag Jani
          </Link>
        </Typography>
      </Container>
    </AppBar>
  );
};

export default Footer;
