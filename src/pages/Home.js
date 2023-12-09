import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import logo from "../resources/logo.svg";
import "../style/HomeStyle.css";
import { Button } from "@mui/material";
import rt_smm from "../resources/rt_smm.svg";
import rt_brand from "../resources/rt_brand.svg";
import rt_call from "../resources/rt_call.svg";
import rt_coach from "../resources/rt_coach.svg";
import rt_dm from "../resources/rt_dm.svg";
import rt_web from "../resources/rt_web.svg";

const YourComponent = () => {
  const textContainerStyle = {
    position: "absolute",
    top: "90%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    flexDirection: "column",
  };
  const gradientBackground =
    "linear-gradient(180deg, #DB6041 0%, #BF3328 100%)";

  const whatWeDoInfo = [
    {
      img: rt_coach,
      title: "Coaching & Training",
    },
    {
      img: rt_call,
      title: "Call Center",
    },
    {
      img: rt_web,
      title: "Website Development",
    },
    {
      img: rt_brand,
      title: "Branding",
    },
    {
      img: rt_smm,
      title: "Social Media Management",
    },
    {
      img: rt_dm,
      title: "Digital Marketing",
    },
  ];
  return (
    <Box>
      <Box className="top_home">
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
          We're not just a real estate service provider <br /> we're your
          partners in success. Elevate your real estate game <br /> with our
          comprehensive
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
      <Box className="what_we_do">
        <Typography
          variant="h4"
          sx={{
            color: "rgba(30, 30, 30, 1)",
            fontSize: "50px",
            fontFamily: "sans-serif",
            fontWeight: "bold",
            paddingTop: "50px",
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
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "start",
            width: "100%",
          }}
        >
          {/* First Section */}
          <Box>
            {whatWeDoInfo.slice(0, 3).map((item, index) => (
              <div
                key={index}
                style={{
                  textAlign: "center",
                  margin: "0 10px",
                  marginBottom: "80px",
                }}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  style={{ width: "70%", height: "auto", marginBottom: "15px" }}
                />
                <Typography
                  sx={{
                    width: "95%",
                    margin: "auto",
                  }}
                >
                  <span className="realtor_text">Realtor</span> {item.title}
                </Typography>
              </div>
            ))}
          </Box>

          {/* Second Section */}
          <Box>
            {whatWeDoInfo.slice(3, 6).map((item, index) => (
              <div
                key={index}
                style={{
                  textAlign: "center",
                  margin: "0 10px",
                  marginBottom: "50px",
                }}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  style={{ width: "70%", height: "auto", marginBottom: "15px" }}
                />
                <Typography
                  sx={{
                    width: "95%",
                    margin: "auto",
                  }}
                >
                  <span className="realtor_text">Realtor</span> {item.title}
                </Typography>
              </div>
            ))}
          </Box>
        </Box>
        <Box>
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
      <Box className="how_we_do">
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
        <Box
          sx={{
            textAlign: "left",
            fontFamily: "sans-serif",
            width: "100%",
            margin: "70px",
          }}
        >
          <Typography
            sx={{
              color: "white",
              fontSize: "25px",
            }}
          >
            Simple, With Cutting edge Technology known as
          </Typography>
          <Typography
            className="how_we_do_ai"
            sx={{
              fontFamily: "CaviarDreams-Bold",
              fontSize: "35px",
            }}
          >
            Artificial Intelligence (
            <span
              style={{
                color: "white",
              }}
            >
              AI
            </span>
            )
          </Typography>
        </Box>
        <Box>
          <Typography
            sx={{
              color: "rgba(207, 207, 207, 1)",
              width: "60%",
              textAlign: "justify",
            }}
          >
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Welcome to <span className="wrs_hwd">World Realtor Solutions</span>,
            where success is personalized and powered by cutting-edge AI
            technology. From expert training to AI-driven social media mastery,
            branding, and call center excellence, we've got your real estate
            journey covered. Elevate your online presence with predictive
            analytics, stand out with a unique brand sculpted by AI insights,
            and ensure every client interaction is top-notch. Ready to redefine
            real estate success with the fusion of expertise and AI innovation ?
            Let's get started.
          </Typography>
        </Box>
        <Box
          sx={{
            width: "60%",
          }}
        >
          <Button
            variant="contained"
            sx={{
              background: gradientBackground,
              color: "white", // Set text color to be visible against the gradient background
              "&:hover": {
                background: gradientBackground, // Adjust hover state if needed
              },
              borderRadius: "34.33px",
              width: "30%",
              margin: "50px auto",
              fontFamily: "CaviarDreams-Bold",
            }}
          >
            Get Started
          </Button>
        </Box>
      </Box>
      <Box className="wrs_temp"></Box>
    </Box>
  );
};

export default YourComponent;
