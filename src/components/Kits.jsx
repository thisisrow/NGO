import React, { useContext } from "react";
import { kits } from "../constant";
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../Context/CartContext";

const Kits = () => {
  const { addToCart ,getButtonClass} = useContext(CartContext);

  const card = [
    {
      img: kits[0],   
      title: "ALPHABET KEYCHAIN",
      code: "SNKY01",
      price: "90",
    },
    {
      img: kits[1],   
      title: "PERSONALISED NAME KEY CHAIN",
      code: "SNKY02",
      price: "100",
    },
    {
      img: kits[2],   
      title: "HANGING EARRINGS",
      code: "SNEH01",
      price: "80",
    },
    {
      img: kits[3],   
      title: "EARRINGS (TOPS ROUND)",
      code: "SNET01",
      price: "50",
    },
    {
      img: kits[4],   
      title: "EARRINGS (TOPS SQUARE)",
      code: "SNET02",
      price: "50",
    },
    {
      img: kits[5],   
      title: "RAKHI (FLOWER, RICE)",
      code: "SNRR01",
      price: "60",
    },
    {
      img: kits[6],   
      title: "RAKHI (BRO)",
      code: "SNRK01",
      price: "70",
    },
    {
      img: kits[7],   
      title: "HANGING EARRINGS (ROUND PEACH COLOUR)",
      code: "SNEH02",
      price: "80",
    },
    {
      img: kits[8],   
      title: "RAKHI (PERSONALISED NAME)",
      code: "SNRK02",
      price: "75",
    },
    {
      img: kits[9],   
      title: "RAKHI (PERSONALISED PHOTO)",
      code: "SNRK04",
      price: "80",
    },
    {
      img: kits[10],   
      title: "EARRINGS (DROPS HANGING)",
      code: "SNEH03",
      price: "60",
    },
    {
      img: kits[11],   
      title: "RAKHI (RICE FLOWER) RED",
      code: "x1",
      price: "60",
    },
  ];
  
  

  return (
    <div>
      
      <div className="container">
        <h2 className="mt-5">Other</h2>
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
                    className={getButtonClass(item.code)}
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
    </div>
  );
};

export default Kits;
