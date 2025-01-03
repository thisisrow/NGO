import Navbar from "./Navbar";
import { backgrounds } from "../constant";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./com.css";
const Activuty_form = () => {
  const fontSize = window.innerWidth < 780 ? "2rem" : "4rem";
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const [notify, setNotify] = useState(false);
  const [notify_Erroe, setNotify_Erroe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          phone: form.phone,
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          setNotify(true);
          setForm({ name: "", email: "", phone: "", message: "" });
        },
        (error) => {
          setLoading(false);
          setNotify_Erroe(true);
          console.log("Error in send ing form",error);
          
        }
      );
  };
  return (
    <>
    {/* <Navbar /> */}
    <div id="hero">
    <div className="position-relative vh-100 overflow-hidden">
      {/* Video background */}
      <video
        src={backgrounds}
        autoPlay
        loop
        muted
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{ objectFit: "cover" }}
      ></video>

      {/* Centered content */}
      <div className="d-flex justify-content-center align-items-center position-relative z-index-1 h-100 text-center">
        <p
          id="glass"
          className="fw-bold  col-9 p-3 "
          style={{ fontSize:`${fontSize}`, zIndex: 2,display:'table-column',color:'black' }}
        >
       <div className="container">
        {notify && (
          <div class="alert alert-primary alert-dismissible fade show" role="alert">
          <strong>"Message sent successfully!"</strong> You will receive Call on your Number in short time
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
        )}
        {notify_Erroe && (
          <div class="alert alert-danger alert-dismissible fade show" role="alert">
          <strong>"Message not sent!"</strong> 
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
        )}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="form-control m-1 d-flex flex-column justify-content-center"
        >
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-field">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-field">
            <label className="form-label">Phone</label>
            <input
              type="tel"
              name="phone"
              className="form-control"
              placeholder="Your Phone Number"
              value={form.phone}
              onChange={handleChange}
            />
          </div>
          <div className="form-field">
            <label className="form-label">Message</label>
            <textarea
              name="message"
              rows="4"
              className="form-control"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="btn btn-primary m-1 w-50  align-self-center"
            disabled={loading}
          >
            {loading ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>
        </p>
      </div>
    </div>
    </div>
    </>
  );
};

export default Activuty_form;
