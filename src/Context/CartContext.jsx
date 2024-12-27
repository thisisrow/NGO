import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [buttonStates, setButtonStates] = useState({}); // Track button states

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

    // Handle button state changes
    setButtonStates((prevStates) => ({
      ...prevStates,
      [item.code]: "btn btn-success", // Change to success
    }));

    setTimeout(() => {
      setButtonStates((prevStates) => ({
        ...prevStates,
        [item.code]: "btn btn-primary", // Revert back to primary
      }));
    }, 500);
  };

  const getButtonClass = (itemCode) => {
    return buttonStates[itemCode] || "btn btn-primary"; // Default to primary
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, getButtonClass }}>
      {children}
    </CartContext.Provider>
  );
};
