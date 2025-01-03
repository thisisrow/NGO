import React from "react";
import { useNavigate } from "react-router-dom";
import "./com.css";

const Support = () => {
  const navigate = useNavigate();
  return (
    <div id="donation" className="container-fluid text-center py-5"style={{backgroundColor:'pink'}} >
      <h1 className="mb-4">Support Our Mission Today!</h1>
      <p className="mb-4">
        Your contributions help us make a positive impact. Join us in our mission to create a better tomorrow.
      </p>
      <div className="d-flex justify-content-center gap-3">
        <button className="btn btn-primary btn-lg rounded-pill px-4z"  onClick={()=>{
                    navigate("/form");
                  }}>
          Donate Used Clothes
        </button>
        <button className="btn btn-secondary btn-lg rounded-pill px-4"  onClick={()=>{
                    navigate("/form");
                  }}>
          Donate Medicines
        </button>
      </div>
    </div>
  );
};

export default Support;
