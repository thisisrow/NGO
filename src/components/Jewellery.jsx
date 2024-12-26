// C:\Users\Admin\Desktop\Project\NGO\src\components\Jewellery.jsx

import React, { useState } from "react";
import { jewellery } from "../constant";  
import { FaShoppingCart } from "react-icons/fa";  
import './Product.css'
const Pujaa = () => {
  const [jcart, setCart] = useState([]);  

  const addToCart = (item) => {
    setCart((prevCart) => {
      
      const existingItem = prevCart.find((cartItem) => cartItem.code === item.code);
      
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
      img: jewellery[0],
      title: "BIG BEZEL GOLDEN SET (BLUE FLOWER)",
      code: "SNFS001",
      price: "220",
    },
    {
      img: jewellery[1],
      title: "BIG BEZEL GOLDEN SET (BLUE ORCHID PETALS)",
      code: "SNFS002",
      price: "220",
    },
    {
      img: jewellery[2],
      title: "SMALL SILVER BEZEL SET (LIGHT BLUE PETALS)",
      code: "SNFS003",
      price: "200",
    },
    {
      img: jewellery[3],
      title: "GOLDEN BRACELET (BLUE FLOWER)",
      code: "SNFB001",
      price: "150",
    },
    {
      img: jewellery[4],
      title: "GOLDEN PENDANT WITH CHAIN (BLUE ORCHID PETAL)",
      code: "SNFP001",
      price: "120",
    },
    {
      img: jewellery[5],
      title: "SILVER PENDANT WITH CHAIN (RED PETAL)",
      code: "SNFP002",
      price: "120",
    },
    {
      img: jewellery[6],
      title: "GOLDEN BRACELET (BLUE ORCHID)",
      code: "SNFB002",
      price: "150",
    },
    {
      img: jewellery[7],
      title: "GOLDEN BRACELET (BLUE ORCHID)",
      code: "SNFB003",
      price: "150",
    },
    {
      img: jewellery[8],
      title: "GOLDEN RING (BLUE ORCHID)",
      code: "SNFR001",
      price: "100",
    },
    {
      img: jewellery[9],
      title: "GOLDEN RING (WHITE PETALS)",
      code: "SNFR001",
      price: "100",
    },
    {
      img: jewellery[10],
      title: "SMALL SILVER EARRINGS (BLUE SILVER GLITTER)",
      code: "SNFE001",
      price: "120",
    },
    {
      img: jewellery[11],
      title: "SMALL SILVER EARRINGS (BLUE PETALS)",
      code: "SNFE002",
      price: "120",
    },
    {
      img: jewellery[12],
      title: "SMALL SILVER EARRINGS (ROSE PETALS)",
      code: "SNFE003",
      price: "120",
    },
    {
      img: jewellery[13],
      title: "BIG SILVER EARRINGS (YELLOW FLOWER)",
      code: "SNFE004",
      price: "170",
    },
    {
      img: jewellery[14],
      title: "BIG SILVER EARRINGS (BLUE GREEN FLOWER)",
      code: "SNFE005",
      price: "170",
    },
    {
      img: jewellery[15],
      title: "LUGGAGE TAGS (ROSE PETALS)",
      code: "SNFT001",
      price: "200",
    },
    {
      img: jewellery[16],
      title: "GOLDEN HANGING EARRINGS (PINK FLOWER)",
      code: "SNFE006",
      price: "170",
    },
    {
      img: jewellery[17],
      title: "SMALL BEZEL SILVER SET (BLUE ORCHIDS)",
      code: "SNFS004",
      price: "180",
    },
    {
      img: jewellery[18],
      title: "SMALL BEZEL SILVER SET (ROSE PETALS)",
      code: "SNFS004",
      price: "180",
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
          {jcart.length > 0 ? (
            jcart.map((cartItem, index) => (
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
