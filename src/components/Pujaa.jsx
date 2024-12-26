// C:\Users\Admin\Desktop\Project\NGO\src\components\Pujaa.jsx

import React, { useState } from "react";
import { pujaa } from "../constant";
import { FaShoppingCart } from "react-icons/fa";
import "./Product.css";
const Pujaa = () => {
  const [pcart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (cartItem) => cartItem.code === item.code
      );

      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.code === item.code
            ? {
                ...cartItem,
                quantity: cartItem.quantity + 1,
                total: cartItem.total + parseFloat(item.price),
              }
            : cartItem
        );
      } else {
        return [
          ...prevCart,
          {
            title: item.title,
            code: item.code,
            price: parseFloat(item.price),
            quantity: 1,
            total: parseFloat(item.price),
          },
        ];
      }
    });
  };

  const card = [
    {
      img: pujaa[0],
      title: "HAWAN CUBS (8 PC)",
      code: "SNHQ01",
      price: "100",
    },
    {
      img: pujaa[1],
      title: "HAWAN CUPS (3 PC)",
      code: "SNHC01",
      price: "75",
    },
    {
      img: pujaa[2],
      title: "HAWAN DISK (5 NOS)",
      code: "SNHD01",
      price: "50",
    },
    {
      img: pujaa[3],
      title: "FLOWER DIYA (Big)",
      code: "x1",
      price: "250 / Dozen",
    },
    {
      img: pujaa[4],
      title: "FLOWER DIYA (Small)",
      code: "x2",
      price: "150 / Dozen",
    },
    {
      img: pujaa[5],
      title: "FLOWER DIYA (Small)",
      code: "x3",
      price: "100 / Dozen",
    },
    {
      img: pujaa[6],
      title: "FLOWER DIYA (Big)",
      code: "x4",
      price: "200 / Dozen",
    },
    {
      img: pujaa[7],
      title: "HALDI KUMKUM PLATE",
      code: "x5",
      price: "200 /-",
    },
  ];

  return (
    <div>
      <h2 className="mt-5">Puja Items</h2>
      <div className="container">
        <div className="row">
          {card.map((item, index) => (
            <div key={index} className="col-lg-3 col-md-6 col-sm-12 mb-4">
              <div className="card">
                <img src={item.img} alt={item.title} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">Code: {item.code}</p>
                  <p className="card-text">Price: {item.price}</p>
                  <button
                    className="btn btn-primary"
                    onClick={() => addToCart(item)}
                  >
                    <FaShoppingCart /> Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Display Cart */}
      <div className="container mt-5">
        <h3>Shopping Cart</h3>
        <div className="row">
          {pcart.length > 0 ? (
            pcart.map((cartItem, index) => (
              <div key={index} className="col-12">
                <div className="card mb-3">
                  <div className="card-body">
                    <h5 className="card-title">{cartItem.title}</h5>
                    <p className="card-text">Code: {cartItem.code}</p>
                    <p className="card-text">Price: {cartItem.price}</p>
                    <p className="card-text">Quantity: {cartItem.quantity}</p>
                    <p className="card-text">Total: {cartItem.total}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>Your cart is empty.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Pujaa;
