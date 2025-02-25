import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Pujaa from "./Pujaa";
import Jewellery from "./Jewellery";
import Cart from "./Cart";
import Kits from "./Kits";
import Navbar from "./Navbar";
import "./Product.css";

const AllProduct = () => {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const section = params.get("section");

    if (section) {
      const target = document.getElementById(section);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div>
      {/* <Navbar /> */}
      <h1 className="bg-light p-4">All Products</h1>
      <button
        className="btn btn-primary position-fixed bottom-0 end-0 z-3"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasScrolling"
        aria-controls="offcanvasScrolling"
      >
        See Cart Item
      </button>

      <div
        className="offcanvas offcanvas-start"
        data-bs-scroll="true"
        data-bs-backdrop="false"
        tabIndex="-1"
        id="offcanvasScrolling"
        aria-labelledby="offcanvasScrollingLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasScrollingLabel">
            Shopping Cart
          </h5>
          
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <Cart />
        </div>
      </div>

      <Pujaa />
      <Jewellery />
      <Kits />
    </div>
  );
};

export default AllProduct;
