import React from "react";
import ServicesBanner from "../resources/ServicesBanner.png";
import BrandExposure from "../resources/services/BrandExposure.svg";
import CommunityBuilding from "../resources/services/CommunityBuilding.svg";
import LeadGeneration from "../resources/services/LeadGeneration.svg";
import Engagement from "../resources/services/Engagement.svg";
import socials from "../resources/services/socials.svg";
import { Grid, Typography } from "@mui/material";

const OurServices = ({ FadeIn }) => {
  const servicesData = [
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
          top: "124%",
          backgroundColor: "#1e1e1e",
          width: "100%",
        }}
      >
        <div>
          <img
            src={socials}
            alt=""
            style={{
              width: "80%",
              margin: "50px auto",
            }}
          />
        </div>

        {servicesData?.map((item, index) => {
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
      </div>
    </div>
  );
};

export default OurServices;
