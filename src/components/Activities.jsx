import React from "react";
import activ from "../constant"; // Correct way to import named export
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./com.css";
import { title } from "framer-motion/client";

const cards = [
  {
    image: activ[0],
    title: "Volunteering",
    description: "Join Us! Help recycle temple flowers into eco-friendly products. Volunteer today!",
    text: `Welcome to the Sushirmala Foundation Volunteering Program `,
    dtext:'Are you passionate about making a difference in your community? Join the Sushirmala Foundation as a volunteer and be a part of a movement dedicated to creating positive change. By volunteering with us, you can contribute to meaningful work that directly benefits those in need, help strengthen and support various community initiatives, and gain valuable experience while enhancing your skills. Whether you have a few hours a week or can commit to longer-term projects, your time and efforts can make a significant impact. We welcome individuals of all ages and backgrounds who are enthusiastic about social work. Please fill out the volunteer registration form below with your details and areas of interest. Our team will review your application and get in touch with you regarding upcoming volunteer opportunities. Thank you for your interest in volunteering with the Sushirmala Foundation. Together, we can make a difference!',
  },
  {
    image: activ[1],
    title: "Branch Opening",
    description: "Become a Branch Opener! Let’s recycle temple flowers into useful products and make a difference together!",
    text: "Welcome to the Sushirmala Foundation",
    dtext:"If you’re inspired to bring the mission of Sushirmala Foundation closer to your community, consider opening a branch in your area. By establishing a branch, you’ll help extend our outreach, providing vital support and resources to those who need them most. Opening a branch allows you to be at the forefront of our efforts, making a tangible difference locally while being part of a larger network of change-makers. To get started, simply fill out the form below to express your interest, and we’ll reach out to discuss how we can collaborate in bringing Sushirmala Foundation's vision to life in your community.",
    
  },
  {
    image: activ[2],
    title: "Distributor",
    description: "Spread the Green! Help us distribute eco-friendly products made from recycled flowers. Get involved!",
    text: "Welcome to the Sushirmala Foundation",
    dtext:"If you're passionate about making a positive impact and want to help spread the reach of Sushirmala Foundation's initiatives, consider becoming a distributor for our products. By joining our network, you'll play a crucial role in ensuring our products reach communities in need, helping to empower and uplift those around you. Simply fill out the form below to express your interest, and we will connect with you to explore how we can work together to create meaningful change.",
  },
  {
    image: activ[3],
    title: "Donation",
    description: "Support Us! Donate to help us recycle temple flowers into sustainable products. Every bit counts!",
    text: "Welcome to the Sushirmala Foundation",
    dtext:'The Sushirmala Foundation is dedicated to donate clothes, money and medicines to old age homes, etc. Your support is crucial in helping us achieve our mission and make a lasting impact. By donating, you join us in our efforts to create positive change and improve lives. Please fill out the form below to contribute and support our cause. Thank you for your generosity!',
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
                    navigate("/form", { state: { text: card.text, dtext: card.dtext } });
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
