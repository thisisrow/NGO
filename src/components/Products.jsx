import React from "react";
import { card } from "../constant";
import "./com.css";
import bg from "../assets/lotus-product.svg";
import { Link } from "react-router-dom";
const Products = () => {
  return (
    <div id="products" className="container-fluid ">
      <div className="d-flex flex-column justify-content-center align-items-center">
        <h1 className="align-self-center mt-5">Product</h1>
        <p>Buy and support Environment</p>
      </div>

      <div className="row d-flex justify-content-around align-items-center">
        <div className="col-sm-12 col-md-5 d-flex justify-content-around">
          <div className="card product-card">
            <img src={card[0]} className="card-img-top" alt="Product 1" />
            <div className="card-body">
              <h5 className="card-title">Jewellery</h5>

              <Link
                to={{
                  pathname: "/all",
                  search: "?section=jewellery", // Add query for specific section
                }}
                className="btn btn-primary fs-5 rounded-pill align-self-center"
              >
                Buy
              </Link>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-1 d-flex justify-content-center">
          <img src={bg}></img>
        </div>
        <div className="col-sm-12 col-md-5 d-flex justify-content-around">
          <div className="card product-card">
            <img src={card[1]} className="card-img-top" alt="Product 2" />
            <div className="card-body">
              <h5 className="card-title">Puja</h5>

              <Link
                to={{
                  pathname: "/all",
                  search: "?section=puja", // Add query for specific section
                }}
                className="btn btn-primary fs-5 rounded-pill align-self-center"
              >
                Buy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
