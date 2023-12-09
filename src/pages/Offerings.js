import { Box, Button, Typography } from "@mui/material";
import React, { useEffect } from "react";
import "../style/OfferingsStyle.css";
import "../style/HomeStyle.css";
import rt_smm from "../resources/rt_smm.svg";
import rt_brand from "../resources/rt_brand.svg";
import rt_call from "../resources/rt_call.svg";
import rt_coach from "../resources/rt_coach.svg";
import rt_dm from "../resources/rt_dm.svg";
import rt_web from "../resources/rt_web.svg";
import { useLocation } from "react-router-dom";

const Offerings = ({ setSelectedMenu }) => {
  const whatWeDoInfo = [
    {
      img: rt_coach,
      title: "Coaching & Training",
      desc: "Seamlessly integrating the latest industry trends and AI insights, our virtual coaching ensures you stay ahead in real estate. Whether you're a seasoned pro or starting fresh, our online sessions cover marketing, customer engagement, and AI tools for enhanced productivity. Led by industry experts, our program fosters a community driven by excellence. Ready to embark on this online journey of mastery ?",
    },
    {
      img: rt_call,
      title: "Call Center",
      desc: "Welcome to World Realtor Solutions, where success is personalized and powered by cutting-edge AI technology. From expert training to AI-driven social media mastery, branding, and call center excellence, we've got your real estate journey covered. Elevate your online presence with predictive analytics, stand out with a unique brand sculpted by AI insights, and ensure every client interaction is top-notch. Ready to redefine real estate success with the fusion of expertise and AI innovation ? Let's get started.",
    },
    {
      img: rt_web,
      title: "Website Development",
      desc: "Welcome to World Realtor Solutions, where success is personalized and powered by cutting-edge AI technology. From expert training to AI-driven social media mastery, branding, and call center excellence, we've got your real estate journey covered. Elevate your online presence with predictive analytics, stand out with a unique brand sculpted by AI insights, and ensure every client interaction is top-notch. Ready to redefine real estate success with the fusion of expertise and AI innovation ? Let's get started.",
    },
    {
      img: rt_brand,
      title: "Branding",
      desc: "Transform your real estate brand with World Realtor Solutions' AI-driven strategies. We merge cutting-edge technology with innovative branding to set your presence apart. From dynamic visuals to optimized messaging, our service enhances your brand's impact. Whether you're a seasoned pro or just starting, our tailored approach adapts to your unique needs. Lead the way with trends and efficiency, and redefine your brand effortlessly. Ready to explore the future of real estate branding with AI precision ?",
    },
    {
      img: rt_smm,
      title: "Social Media Management",
      desc: "Welcome to World Realtor Solutions, where success is personalized and powered by cutting-edge AI technology. From expert training to AI-driven social media mastery, branding, and call center excellence, we've got your real estate journey covered. Elevate your online presence with predictive analytics, stand out with a unique brand sculpted by AI insights, and ensure every client interaction is top-notch. Ready to redefine real estate success with the fusion of expertise and AI innovation ? Let's get started.",
    },
    {
      img: rt_dm,
      title: "Digital Marketing",
      desc: "Welcome to World Realtor Solutions, where success is personalized and powered by cutting-edge AI technology. From expert training to AI-driven social media mastery, branding, and call center excellence, we've got your real estate journey covered. Elevate your online presence with predictive analytics, stand out with a unique brand sculpted by AI insights, and ensure every client interaction is top-notch. Ready to redefine real estate success with the fusion of expertise and AI innovation ? Let's get started.",
    },
  ];
  const gradientBackground =
    "linear-gradient(180deg, #DB6041 0%, #BF3328 100%)";

  const path = useLocation().pathname;
  useEffect(() => {
    setSelectedMenu(path);
  });

  return (
    <>
      <Box
        className="offerings_banner"
        sx={{
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "10%",
            right: "10%",
            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: "70px",
              fontFamily: "sans-serif",
              fontWeight: 700,
            }}
          >
            <span
              className="firstLetter"
              style={{
                fontSize: "70px",
                fontFamily: "sans-serif",
                fontWeight: 700,
              }}
            >
              O
            </span>
            fferings
          </Typography>
          <Typography
            sx={{
              fontSize: "50px",
              fontFamily: "sans-serif",
              fontWeight: 700,
            }}
          >
            on your palm!
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          backgroundColor: "rgb(23,23,23)",
          color: "white",
          paddingBottom: "300px",
        }}
      >
        {whatWeDoInfo?.map((item, index) => {
          return (
            <Box key={index}>
              <Typography
                sx={{
                  textAlign: "center",
                  padding: "30px",
                  fontSize: "30px",
                  fontWeight: "700",
                }}
              >
                <span
                  className="realtor_text"
                  style={{
                    fontWeight: 700,
                  }}
                >
                  Realtor
                </span>{" "}
                {item.title}
              </Typography>
              <Box
                key={index}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "70%",
                  margin: "auto",
                  flexWrap: "wrap",
                  alignItems: "center",
                }}
              >
                {index % 2 === 0 ? (
                  <>
                    <Box
                      sx={{
                        textAlign: "justify",
                        width: "50%",
                        margin: "",
                      }}
                    >
                      <Typography>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        {item.desc}
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          width: "100%",
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
                            width: "40%",
                            margin: "50px auto",
                            fontFamily: "CaviarDreams-Bold",
                          }}
                        >
                          Explore
                        </Button>
                      </Box>
                    </Box>
                    <img
                      src={item.img}
                      alt=""
                      style={{
                        width: "30%",
                      }}
                    />
                  </>
                ) : (
                  <>
                    <img
                      src={item.img}
                      alt=""
                      style={{
                        width: "30%",
                      }}
                    />
                    <Box
                      sx={{
                        textAlign: "justify",
                        width: "50%",
                      }}
                    >
                      <Typography>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        {item.desc}
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          width: "100%",
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
                            width: "40%",
                            margin: "50px auto",
                            fontFamily: "CaviarDreams-Bold",
                          }}
                        >
                          Explore
                        </Button>
                      </Box>
                    </Box>
                  </>
                )}
              </Box>
            </Box>
          );
        })}
      </Box>
    </>
  );
};

export default Offerings;
