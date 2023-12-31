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

const Home = ({ FadeIn }) => {
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
      <FadeIn>
        <Box className="top_home">
          <img
            src={logo}
            alt=""
            style={{
              height: "200px",
              width: "auto",
              margin: "10px 0",
            }}
          />
          <Typography
            variant="h4"
            className="top_home_title"
            sx={{ color: "white", textAlign: "center", fontSize: "70px" }}
          >
            <span className="firstLetter">W</span>orld{" "}
            <span className="firstLetter">R</span>ealtor{" "}
            <span className="firstLetter">S</span>olutions
          </Typography>
          <Typography
            sx={{
              color: "rgba(196, 196, 196, 1)",
              textAlign: "center",
              fontSize: "35px",
              margin: "20px 0",
              fontFamily: "DMSans-Regular",
            }}
          >
            We're not just a real estate service provider <br /> we're your
            partners in success. Elevate your real estate game <br /> with our
            comprehensive
            <span
              className="firstLetter"
              style={{
                fontFamily: "DMSans-Regular",
              }}
            >
              {" "}
              360° solutions{" "}
            </span>
            tailored for modern realtors.
          </Typography>
        </Box>
      </FadeIn>

      <Box className="what_we_do">
        <Typography
          variant="h4"
          sx={{
            color: "rgba(30, 30, 30, 1)",
            fontSize: "50px",
            fontFamily: "DMSans-Regular",
            fontWeight: "bold",
            paddingTop: "50px",
          }}
        >
          <span
            className="firstLetter"
            style={{
              fontFamily: "DMSans-Regular",
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
            justifyContent: "space-evenly",
            alignItems: "start",
            width: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              width: "100%",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              margin: "40px",
            }}
          >
            {whatWeDoInfo?.map((item, index) => (
              <Box
                key={index}
                sx={{
                  textAlign: "center",
                  margin: "30px",
                  width: "300px",
                }}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  style={{
                    marginBottom: "15px",
                  }}
                />
                <Typography
                  sx={{
                    fontFamily: "DMSans-Regular",
                    fontWeight: "500",
                    margin: "auto",
                    fontSize: "20px",
                  }}
                >
                  <span className="realtor_text">Realtor</span> {item.title}
                </Typography>
              </Box>
            ))}
          </Box>

          {/* First Section */}
          {/* <Box>
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
          </Box> */}

          {/* Second Section */}
          {/* <Box>
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
          </Box> */}
        </Box>
        <Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              margin: "50px auto",
            }}
          >
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
            fontSize: "70px",
            fontFamily: "DMSans-Regular",
            fontWeight: "700",
            marginTop: "50px",
            color: "rgba(255, 255, 255, 1)",
          }}
        >
          <span
            className="firstLetter"
            style={{
              fontFamily: "DMSans-Regular",
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
            fontFamily: "DMSans-Regular",
            fontWeight: "500",
            width: "100%",
            margin: "70px",
          }}
        >
          <Typography
            sx={{
              color: "rgba(207, 207, 207, 1)",
              fontSize: "33px",
            }}
          >
            Simple, With Cutting edge Technology known as
          </Typography>
          <Typography
            className="how_we_do_ai"
            sx={{
              fontFamily: "CaviarDreams-Bold",
              fontWeight: "700",
              fontSize: "71.4px",
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
              width: "59%",
              textAlign: "justify",
              fontSize: "23px",
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
            width: "50%",
          }}
        >
          <Button
            sx={{
              background: "linear-gradient(180deg, #DB6041 0%, #BF3328 100%)",
              color: "white", // Set text color to be visible against the gradient background
              "&:hover": {
                background:
                  "linear-gradient(180deg, #DB6041 50%, #BF3328 100%)", // Adjust hover state if needed
              },
              borderRadius: "34.33px",
              padding: "10px 20px",
              width: "30%",
              margin: "50px auto",
              fontFamily: "CaviarDreams-Bold",
              fontSize: "23px",
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

export default Home;
