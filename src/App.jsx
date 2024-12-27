import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BlobCursor from "./BlobCursor";
import Navbar from "./components/Navbar";
import Bottum from "./components/Bottum";
import FirstPage from "./FirstPage";
import AllProduct from "./components/AllProduct";
import { CartProvider } from "./Context/CartContext";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <BlobCursor blobType="circle" fillColor="#00f0ff" />
        <Navbar />
        <Routes>
          <Route path="/" element={<FirstPage />} />
          <Route path="/all" element={<AllProduct />} />
        </Routes>
        <Bottum />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
