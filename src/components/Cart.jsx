import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";

const Cart = () => {
  const { addToCart,cart,getButtonClass } = useContext(CartContext);

  return (
    <div className="container mt-5">
      <div className="row">
        {cart.length > 0 ? (
          cart.map((cartItem, index) => (
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
  );
};

export default Cart;
