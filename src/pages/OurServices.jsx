import React from "react";
import ServicesBanner from "../resources/ServicesBanner.png";
import BrandExposure from "../resources/services/BrandExposure.svg";
import CommunityBuilding from "../resources/services/CommunityBuilding.svg";
import LeadGeneration from "../resources/services/LeadGeneration.svg";
import Engagement from "../resources/services/Engagement.svg";
import socials from "../resources/services/socials.svg";
import EngagementStrategies from "../resources/services/EngagementStrategies.svg";
import Ads from "../resources/services/Ads.svg";
import ContentCreation from "../resources/services/ContentCreation.svg";
import PlatformOptimization from "../resources/services/PlatformOptimization.svg";
import OurServicesImg from "../resources/services/OurServicesImg.svg";

import { Grid, Typography } from "@mui/material";
import "../style/HomeStyle.css";

const OurServices = ({ FadeIn }) => {
  const whyData = [
    {
      title: "Brand Exposure",
      desc: "Social media allows realtors to reach a wider audience and increase brand visibility. Whether you're a seasoned agent or just starting out, a strong social media presence can set you apart from the competition.",
      img: BrandExposure,
    },
    {
      title: "Lead Generation",
      desc: "Social platforms provide a fertile ground for lead generation. By strategically targeting potential buyers and sellers, realtors can attract qualified leads and convert them into clients.",
      img: LeadGeneration,
    },
    {
      title: "Engagement",
      desc: "Engaging content keeps your audience interested and encourages interaction. From property tours to market insights, social media allows realtors to connect with clients on a personal level.",
      img: Engagement,
    },
    {
      title: "Community Building",
      desc: "Establishing yourself as a local expert is crucial. Use social media to highlight neighborhood features, share local events, and demonstrate your commitment to the community.",
      img: CommunityBuilding,
    },
  ];

  const servicesData = [
    {
      title: "Content Creation",
      desc: "Our talented writers craft compelling content tailored to your brand. From blog posts to social media updates, we ensure your message resonates with your target audience.",
      img: ContentCreation,
    },
    {
      title: "Platform Optimization",
      desc: "Not all social platforms are created equal. We analyze your business goals and recommend the best channels for your real estate business. Whether it's Instagram, Facebook, or LinkedIn, we've got you covered",
      img: PlatformOptimization,
    },
    {
      title: "Advertising Campaigns",
      desc: "Building a loyal following requires consistent engagement. We develop strategies to keep your audience interested, including timely responses, polls, and interactive posts.",
      img: Ads,
    },
    {
      title: "Engagement Strategies",
      desc: "Establishing yourself as a local expert is crucial. Use social media to highlight neighborhood features, share local events, and demonstrate your commitment to the community.",
      img: EngagementStrategies,
    },
  ];

  return (
    <div
      style={{
        backgroundColor: "#1e1e1e",
      }}
    >
      <FadeIn>
        <img
          src={ServicesBanner}
          alt=""
          className="absolute top-0"
          style={{
            width: "100%",
            zIndex: "-3",
          }}
        />
      </FadeIn>

      <div
        style={{
          position: "absolute",
          top: "123%",
          backgroundColor: "#1e1e1e",
          width: "100%",
        }}
      >
        <div>
          <h1
            className="font-gradiant"
            style={{
              fontFamily: "CaviarDreams-Regular",
              fontSize: "50px",
              margin: "70px auto",
              textAlign: "center",
            }}
          >
            “ Unlock Your Realtor's Social Media Potential ”
          </h1>
        </div>
        <div>
          <img
            src={socials}
            alt=""
            style={{
              width: "80%",
              margin: "50px auto",
              marginBottom: 0,
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            fontFamily: "DMSANS-SEMIBOLD",
            color: "white",
          }}
        >
          <h1
            className="font-gradiant"
            style={{
              fontSize: "350px",
              textAlign: "center",
              textTransform: "uppercase",
            }}
          >
            Why
          </h1>
          <p
            style={{
              marginTop: "-100px",
              fontSize: "40px",
            }}
          >
            Social Media Matters for Realtors ?
          </p>
          <p
            style={{
              fontFamily: "DMSans-Italic",
              fontSize: "20px",
              color: "#A0A0A0",
              width: "70%",
              margin: "50px auto",
              textAlign: "center",
            }}
          >
            In today's digital age, social media is more than just a platform
            for sharing cat videos and vacation photos. It's a powerful tool for
            real estate professionals to connect with clients, showcase
            properties, and build their brand. Here's why social media matters
            for realtors:
          </p>
        </div>

        {whyData?.map((item, index) => {
          return (
            <Grid
              container
              sx={{
                margin: "100px 0",
                borderWidth: "0px 0px 0px 5px",
                borderStyle: "solid",
                borderImage: "linear-gradient(to bottom,  #F68C59, #5E0000)",
                borderImageSlice: "1",
              }}
            >
              <Grid
                item
                xs={12}
                md={9}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "DMSans-Regular",
                    fontSize: "20px",
                    color: "#A0A0A0",
                    textAlign: "justify",
                    width: " 60%",
                    margin: "0 auto",
                  }}
                >
                  <h1
                    style={{
                      fontFamily: "DMSans-SemiBoldItalic",
                      color: "white",
                      fontSize: "35px",
                      margin: "10px 0",
                    }}
                  >
                    {index + 1}. {item.title} :
                  </h1>
                  {item.desc}
                </Typography>
              </Grid>
              <Grid item xs={12} md={3}>
                <img
                  src={item.img}
                  alt=""
                  style={{
                    width: "50%",
                  }}
                />
              </Grid>
            </Grid>
          );
        })}

        <img
          src={OurServicesImg}
          alt=""
          style={{
            width: "30%",
            margin: "50px auto",
          }}
        />

        {servicesData?.map((item, index) => {
          return (
            <Grid
              container
              sx={{
                margin: "100px 0",
                borderWidth: "0px 0px 0px 5px",
                borderStyle: "solid",
                borderImage: "linear-gradient(to bottom,  #0280D0, #548FF9)",
                borderImageSlice: "1",
              }}
            >
              <Grid
                item
                xs={12}
                md={9}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "DMSans-Regular",
                    fontSize: "20px",
                    color: "#A0A0A0",
                    textAlign: "justify",
                    width: " 60%",
                    margin: "0 auto",
                  }}
                >
                  <h1
                    style={{
                      fontFamily: "DMSans-SemiBoldItalic",
                      color: "white",
                      fontSize: "35px",
                      margin: "10px 0",
                    }}
                  >
                    {index + 1}. {item.title} :
                  </h1>
                  {item.desc}
                </Typography>
              </Grid>
              <Grid item xs={12} md={3}>
                <img
                  src={item.img}
                  alt=""
                  style={{
                    width: "50%",
                  }}
                />
              </Grid>
            </Grid>
          );
        })}
      </div>
    </div>
  );
};

export default OurServices;
