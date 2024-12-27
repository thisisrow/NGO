import React, { useContext } from "react";
import { jewellery } from "../constant";
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../Context/CartContext";

const Jewellery = () => {
  const { addToCart, getButtonClass } = useContext(CartContext);

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
    <div id="jewellery">
      <div className="container">
        <h2 className="">Jewellery</h2>
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

export default Jewellery;
