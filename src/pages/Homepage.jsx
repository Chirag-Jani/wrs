import React from "react";
// import homepageBanner from "../resources/homepageBanner.jpg";
import homepageBanner from "../resources/TempHomepageBanner.svg";
// import logo from "../resources/logo.svg";
import WhatWeDo from "../resources/TempAiPowered.svg";
// import WhatWeDo from "../resources/handCity.png";
import "../style/HomeStyle.css";
import RealtorCoachingAndTraining from "../resources/RealtorCoachingAndTraining.svg";
import RealtorBranding from "../resources/RealtorBranding.svg";
import RealtorCallCenter from "../resources/RealtorCallCenter.svg";
import RealtorDM from "../resources/RealtorDM.svg";
import RealtorSMM from "../resources/RealtorSMM.svg";
import RealtorWebDev from "../resources/RealtorWebDev.svg";
import { Grid, Typography } from "@mui/material";

const Homepage = ({ FadeIn }) => {
  const whatWeDoData = [
    {
      title: "Coaching & Training",
      image: RealtorCoachingAndTraining,
    },
    {
      title: "Call Center",
      image: RealtorCallCenter,
    },
    {
      title: "Website Development",
      image: RealtorWebDev,
    },
    {
      title: "Branding",
      image: RealtorBranding,
    },
    {
      title: "Social Media Management",
      image: RealtorSMM,
    },
    {
      title: "Digital Marketing",
      image: RealtorDM,
    },
  ];

  return (
    <div>
      <div>
        {/* <div className="relative"> */}
        <FadeIn>
          <img
            src={homepageBanner}
            alt=""
            // className="absolute top-0 z-0"
            style={{
              minHeight: "100vh",
            }}
          />
          {/* <img
            src={homepageBanner}
            alt=""
            className="absolute top-0 z-0"
            style={{
              minHeight: "100vh",
            }}
          /> */}
        </FadeIn>
        {/* <div className="absolute top-0 homepage-top">
          <img src={logo} alt="" className="homepage-top-logo" />
          <h1 className="homepage-top-header">
            <span className="font-gradiant"> W</span>orld
            <span className="font-gradiant"> R</span>ealtor
            <span className="font-gradiant"> S</span>olutions
          </h1>
          <p className="homepage-top-desc">
            We're not just a real estate service provider <br /> we're your
            partners in success. Elevate your real estate game <br /> with our
            comprehensive
            <span className="font-gradiant"> 360° solutions </span>tailored for
            modern realtors.
          </p>
        </div> */}
      </div>
      <div className="homepage-data">
        <img src={WhatWeDo} alt="" className="wwd-img" />
        <Grid
          container
          className="wwd-data"
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              display: "flex",
              justifyContent: "space-around",
              flexDirection: "column",
            }}
          >
            {whatWeDoData.slice(0, 3).map((item, id) => (
              <Grid
                key={id}
                item
                sx={{
                  width: "80%",
                  margin: "10px auto",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <img
                  src={item.image}
                  alt=""
                  style={{
                    width: "60%",
                  }}
                />
                <Typography
                  sx={{
                    margin: "10px auto",
                    fontSize: "20px",
                    fontFamily: "DMSans-Medium",
                  }}
                >
                  <span className="font-gradiant">Realtor </span>
                  {item.title}
                </Typography>
              </Grid>
            ))}
          </Grid>
          {/* <Grid md={4}></Grid> */}
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              display: "flex",
              justifyContent: "space-around",
              flexDirection: "column",
            }}
          >
            {whatWeDoData.slice(3, 6).map((item, id) => (
              <Grid
                key={id}
                item
                sx={{
                  width: "80%",
                  margin: "8px auto",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <img
                  src={item.image}
                  alt=""
                  style={{
                    width: "60%",
                  }}
                />
                <Typography
                  sx={{
                    margin: "10px auto",
                    fontSize: "20px",
                    fontFamily: "DMSans-Medium",
                  }}
                >
                  <span className="font-gradiant">Realtor </span>
                  {item.title}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Homepage;
