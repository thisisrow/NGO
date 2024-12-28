import React from "react";
import qr from "../assets/QR.jpg";
import "./com.css"; // Add styles for better customization
import bg from "../assets/lotus-product.svg";
const Order = () => {
  return (
    <div id="order" className="container-fluid ">
      {/* Header Section */}
      <div className="d-flex flex-column justify-content-center align-items-center">
        <h1 className="align-self-center mt-5">Payment</h1>
        <p>Buy and support Environment</p>
      </div>

      {/* Card Section */}
      <div className="row d-flex justify-content-around align-items-center ">
        {/* QR Code Card */}
        <div className="col-sm-12 col-md-5 d-flex justify-content-center">
          <div className="card order-card">
            <img src={qr} className="card-img-top qr-img" alt="QR Code" />
            <div className="card-body text-center">
              <h5 className="card-title">UPI ID: prasad.neeta2@ibl</h5>
            </div>
          </div>
        </div>

        {/* Bank Details Card */}
        <div className="col-sm-12 col-md-1 d-flex justify-content-center">
          <img src={bg}></img>
        </div>
        {/* Bank Details Card */}
        <div className="col-sm-12 col-md-5 d-flex justify-content-center">
          <div className="card order-card">
            <div className="card-body text-center">
              <h5 className="card-title">Bank Details</h5>
              <p className="card-text">
                Acc Name: <strong>SUSHIRMALA FOUNDATION</strong> <br />
                Bank Name: <strong>NKGSB</strong> <br />
                Branch Name: <strong>Vasai (E)</strong> <br />
                IFSC Code: <strong>NKGS0000088</strong> <br />
                Account No.: <strong>08811010000306</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
