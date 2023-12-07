import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import logo from "../resources/logo.svg";
import handCity from "../resources/handCity.png";
import "../style/HomeStyle.css";

const YourComponent = () => {
  const boxStyle = {
    position: "relative",
    width: "fit-content",
    height: "auto",
  };

  const imageStyle = {
    width: "100%",
    height: "auto",
  };

  const textContainerStyle = {
    position: "absolute",
    top: "100%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    flexDirection: "column",
  };

  return (
    <Box>
      <Box
        className="top_home"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <img
          src={logo}
          alt=""
          style={{
            height: "150px",
            width: "auto",
            margin: "10px 0",
          }}
        />
        <Typography
          variant="h4"
          className="top_home_title"
          sx={{ color: "white", textAlign: "center", fontSize: "50px" }}
        >
          <span className="firstLetter">W</span>orld{" "}
          <span className="firstLetter">R</span>ealtor{" "}
          <span className="firstLetter">S</span>olution
        </Typography>
        <Typography
          sx={{
            color: "white",
            width: "60%",
            textAlign: "center",
            fontSize: "25px",
            margin: "20px 0",
            fontFamily: "sans-serif",
          }}
        >
          We're not just a real estate service provider we're your partners in
          success. Elevate your real estate game with our comprehensive
          <span
            className="firstLetter"
            style={{
              fontFamily: "sans-serif",
            }}
          >
            {" "}
            360° solutions{" "}
          </span>
          tailored for modern realtors.
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "fit-content",
          backgroundColor: "rgb(209,209,209)",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: "rgba(30, 30, 30, 1)",
            fontSize: "50px",
            fontFamily: "sans-serif",
            fontWeight: "bold",
            marginTop: "50px",
          }}
        >
          <span
            className="firstLetter"
            style={{
              fontFamily: "sans-serif",
              fontWeight: "bold",
            }}
          >
            W
          </span>
          hat we do?{" "}
        </Typography>
        <Box style={boxStyle}>
          <img src={handCity} alt="" style={imageStyle} />
          <Box style={textContainerStyle}>
            <p
              className="ai_powered"
              style={{
                margin: 0,
              }}
            >
              AI Powered
            </p>
            <p
              className="realtor_solutions"
              style={{
                margin: 0,
              }}
            >
              Realtor Solutions
            </p>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          height: "fit-content",
          backgroundColor: "rgb(209,209,209)",
        }}
        className="ai_home "
      >
        <Typography
          variant="h4"
          sx={{
            fontSize: "50px",
            fontFamily: "sans-serif",
            fontWeight: "bold",
            marginTop: "50px",
            color: "rgba(255, 255, 255, 1)",
          }}
        >
          <span
            className="firstLetter"
            style={{
              fontFamily: "sans-serif",
              fontWeight: "bold",
            }}
          >
            H
          </span>
          ow we do?{" "}
        </Typography>
        {/* <img src={aiImage} alt="" style={imageStyle} /> */}
      </Box>
    </Box>
  );
};

export default YourComponent;
