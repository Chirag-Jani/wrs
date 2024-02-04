import React from "react";
import pricingBanner from "../resources/PricingBanner.png";
import RealtorCoachingAndTraining from "../resources/RealtorCoachingAndTraining.svg";
import RealtorBranding from "../resources/RealtorBranding.svg";
import RealtorCallCenter from "../resources/RealtorCallCenter.svg";
import RealtorDM from "../resources/RealtorDM.svg";
import RealtorSMM from "../resources/RealtorSMM.svg";
import RealtorWebDev from "../resources/RealtorWebDev.svg";
import "../style/PricingStyle.css";
import PricingCard from "../components/PricingCard";

const Pricing = ({ FadeIn }) => {
  const pricings = [
    {
      title: "Realtor Coaching & Training",
      image: RealtorCoachingAndTraining,
    },
    {
      title: "Realtor Call Center",
      image: RealtorCallCenter,
    },
    {
      title: "Realtor Website Development",
      image: RealtorWebDev,
    },
    {
      title: "Realtor Branding",
      image: RealtorBranding,
    },
    {
      title: "Realtor Social Media Management",
      image: RealtorSMM,
    },
    {
      title: "Realtor Digital Marketing",
      image: RealtorDM,
    },
  ];

  return (
    <div>
      <FadeIn>
        <img src={pricingBanner} alt="" className="absolute top-0" />
      </FadeIn>
      <div className="pricing-cards">
        {pricings?.map((item, idx) => {
          return <PricingCard key={idx} title={item.title} img={item.image} />;
        })}
      </div>
    </div>
  );
};

export default Pricing;
