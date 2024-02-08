import React from "react";
import ServicesBanner from "../resources/ServicesBanner.png";
import "../style/HomeStyle.css";
import Experties from "../resources/aboutus/Experties.svg";
import Personalize from "../resources/aboutus/Personalize.svg";
import ResultDriven from "../resources/aboutus/ResultDriven.svg";

const AboutUs = ({ FadeIn }) => {
  const data = [
    {
      title: "Expertise",
      desc: "Our talented writers craft compelling content tailored to your brand. From blog posts to social media updates, we ensure your message resonates with your target audience.",
      img: Experties,
    },
    {
      title: "Results - Driven",
      desc: "We measure success by the impact on your business. Our data-driven approach ensures you get the best return on investment.",
      img: ResultDriven,
    },
    {
      title: "Personalized Service",
      desc: "We treat every client as a partner. Your success is our success, and we're committed to helping you achieve your goals.",
      img: Personalize,
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
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            fontFamily: "DMSANS-SEMIBOLD",
            color: "white",
            textAlign: "left",
          }}
        >
          <p
            style={{
              // marginTop: "-100px",
              fontSize: "40px",
            }}
          >
            why
          </p>
          <h1
            className="font-gradiant"
            style={{
              fontSize: "200px",
              textAlign: "left",
              textTransform: "uppercase",
            }}
          >
            Choose us
          </h1>
          {/* <p
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
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
