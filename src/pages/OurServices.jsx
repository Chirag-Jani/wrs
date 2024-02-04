import React from "react";
import ServicesBanner from "../resources/ServicesBanner.png";

const OurServices = ({ FadeIn }) => {
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

      <h1
        style={{
          position: "absolute",
          top: "134%",
        }}
        className="text-9xl"
      >
        Hello World
      </h1>
    </div>
  );
};

export default OurServices;
