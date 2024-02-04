import React from "react";
import OfferingsBanner from "../resources/OfferingsBanner.jpg";
import "../style/OfferingStyle.css";
import OfferingsCard from "../components/OfferingsCard";
import RealtorCoachingAndTraining from "../resources/RealtorCoachingAndTraining.svg";
import RealtorBranding from "../resources/RealtorBranding.svg";
import RealtorDM from "../resources/RealtorDM.svg";
import RealtorSMM from "../resources/RealtorSMM.svg";
import RealtorWebDev from "../resources/RealtorWebDev.svg";

const Offerings = ({ FadeIn }) => {
  const offerings = [
    {
      title: "Coaching & Training",
      image: RealtorCoachingAndTraining,
      desc: "Seamlessly integrating the latest industry trends and AI insights, our virtual coaching ensures you stay ahead in real estate. Whether you're a seasoned pro or starting fresh, our online sessions cover marketing, customer engagement, and AI tools for enhanced productivity. Led by industry experts, our program fosters a community driven by excellence. Ready to embark on this online journey of mastery ?",
    },
    {
      title: "Branding",
      image: RealtorBranding,
      desc: "Transform your real estate brand with World Realtor Solutions' AI-driven strategies. We merge cutting-edge technology with innovative branding to set your presence apart. From dynamic visuals to optimized messaging, our service enhances your brand's impact. Whether you're a seasoned pro or just starting, our tailored approach adapts to your unique needs. Lead the way with trends and efficiency, and redefine your brand effortlessly. Ready to explore the future of real estate branding with AI precision ?",
    },
    {
      title: "Social Media Management",
      image: RealtorSMM,
      desc: "Elevate your real estate presence with AI-powered Social Media Management. Seamlessly streamline your content, optimize posting schedules, and engage your audience effortlessly. AI algorithms analyze trends, ensuring your content remains relevant. Explore the future of realtor social media ...",
    },
    {
      title: "Website Development",
      image: RealtorWebDev,
      desc: "Transform your real estate online presence with AI-driven Web Development. Craft dynamic, user-friendly websites that adapt to market trends. AI optimizes layouts, enhances user experience, and ensures responsiveness. Ready to redefine your digital storefront ? Explore the future of realtor web development now !",
    },
    {
      title: "Digital Marketing",
      image: RealtorDM,
      desc: "Transform your real estate online presence with AI-driven Web Development. Craft dynamic, user-friendly websites that adapt to market trends. AI optimizes layouts, enhances user experience, and ensures responsiveness. Ready to redefine your digital storefront ? Explore the future of realtor web development now !",
    },
  ];

  return (
    <div>
      <FadeIn>
        <img
          src={OfferingsBanner}
          alt=""
          className="absolute top-0"
          style={{
            minHeight: "100vh",
          }}
        />
      </FadeIn>
      <div className="offerings-cards">
        {offerings?.map((item, idx) => {
          return (
            <OfferingsCard
              key={idx}
              title={item.title}
              image={item.image}
              desc={item.desc}
              isLeftSide={idx % 2 === 0}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Offerings;
