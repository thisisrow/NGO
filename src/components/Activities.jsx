import React from "react";
import activ from "../constant"; // Correct way to import named export
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./com.css";

const cards = [
  {
    image: activ[0],
    title: "Volunteering",
    description: "Join Us! Help recycle temple flowers into eco-friendly products. Volunteer today!",
    text: "Fill Volunteering form",
  },
  {
    image: activ[1],
    title: "Branch Opening",
    description: "Become a Branch Opener! Let’s recycle temple flowers into useful products and make a difference together!",
    text: "Fill Branch Opening form",
  },
  {
    image: activ[2],
    title: "Distributor",
    description: "Spread the Green! Help us distribute eco-friendly products made from recycled flowers. Get involved!",
    text: "Fill Distributor form",
  },
  {
    image: activ[3],
    title: "Donation",
    description: "Support Us! Donate to help us recycle temple flowers into sustainable products. Every bit counts!",
    text: "Fill Donation form",
  },
];

const Activities = () => {
  const navigate = useNavigate();

  return (
    <div id="activities" className="container-fluid py-5">
      <h1 className="text-center mb-4">Activities</h1>
      <div className="row g-4 justify-content-center">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className="col-sm-12 col-md-6 col-lg-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="card h-100 shadow-lg">
              <img src={card.image} className="card-img-top activity-img" alt={card.title} />
              <div className="card-body text-center">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text">{card.description}</p>
                <button
                  className="btn btn-primary rounded-pill px-4"
                  onClick={() => {
                    navigate("/form", { state: { text: card.text } });
                  }}
                >
                  Join
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Activities;
