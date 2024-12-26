import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BlobCursor from "./BlobCursor";
import Navbar from "./components/Navbar";
import Bottum from "./components/Bottum";
import Pujaa from "./components/Pujaa";
import Jewellery from "./components/Jewellery";
import FirstPage from "./FirstPage";
function App() {
  return (
    <BrowserRouter>
      <BlobCursor blobType="circle" fillColor="#00f0ff" />
      <Navbar />
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/pujaa" element={<Pujaa />} />
        <Route path="/jewellery" element={<Jewellery />} />
      </Routes>
      <Bottum />
    </BrowserRouter>
  );
}

export default App;
