import React from "react";
import "../style/PricingCard.css";
import { Link } from "react-router-dom";

const PricingCard = ({ img, title }) => {
  return (
    <div className="PricingCard">
      <div className="pricing-img-box">
        <img src={img} alt="" />
      </div>
      <Link to={"/"}>
        <button className="pricing-cta">{title}</button>
      </Link>
    </div>
  );
};

export default PricingCard;
