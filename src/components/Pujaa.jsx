import React, { useContext } from "react";
import { pujaa } from "../constant";
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../Context/CartContext";

const Pujaa = () => {
  const { addToCart ,getButtonClass} = useContext(CartContext);

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
      
      <div className="container" id="puja">
        <h2 className="mt-5">Puja</h2>
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

export default Pujaa;
