import React from "react";
import g1 from "../assets/image/jell.jpg";
import g2 from "../assets/image/pooja1.jpg";
import "./com.css";
import bg from "../assets/lotus-product.svg";
import {Link} from "react-router-dom"
const Products = () => {
  return (
    <div id="products" className="container-fluid position-relative">
      <img
        src={bg}
        className="position-absolute "
        style={{top: '40%', left: '40%'}}
      ></img>

      <div className="d-flex flex-column justify-content-center align-items-center">
        <h1 className="align-self-center">Product</h1>
        <p>Buy and support Environment</p>
      </div>

      <div className="row d-flex justify-content-around align-items-center">
        <div className="col-sm-12 col-md-6 d-flex justify-content-around">
          <div className="card product-card">
            <img src={g1} className="card-img-top" alt="Product 1" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <Link to="/all" className="btn btn-primary fs-5 rounded-pill   align-self-center">
                Go Puja
              </Link>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 d-flex justify-content-around">
          <div className="card product-card">
            <img src={g2} className="card-img-top" alt="Product 2" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <Link to="/all" className="btn btn-primary fs-5 rounded-pill  align-self-center">
                Go jewellery
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
