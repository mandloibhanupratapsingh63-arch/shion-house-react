import React from "react";
import "./Services.css";

const ServicesFeature = () => {
  const data = [
    {
      icon: "fa-truck",
      title: "Free Shipping",
      desc: "For all orders over $99",
    },
    {
      icon: "fa-rotate-left",
      title: "Money Back Guarantee",
      desc: "If goods have problems",
    },
    {
      icon: "fa-headset",
      title: "Online Support 24/7",
      desc: "Dedicated support",
    },
    {
      icon: "fa-shield-halved",
      title: "Secure Payment",
      desc: "100% secure checkout",
    },
  ];

  return (
    <section className="service-section">
      {data.map((item, index) => (
        <div className="service-box" key={index}>
          <i className={`fa-solid ${item.icon} service-icon`}></i>
          <div>
            <h5>{item.title}</h5>
            <p>{item.desc}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ServicesFeature;