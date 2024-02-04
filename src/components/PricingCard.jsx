import React from "react";
import "../style/PricingCard.css";
import { Link } from "react-router-dom";

const PricingCard = ({ img, title }) => {
  return (
    <div className="PricingCard">
      <div className="pricing-img-box">
        <img src={img} alt="" />
      </div>
      <Link to={"our-services"}>
        <button className="pricing-cta">{title}</button>
      </Link>
    </div>
  );
};

export default PricingCard;
