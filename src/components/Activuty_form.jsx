import React, { useRef, useState, useEffect } from "react";
import { backgrounds } from "../constant";
import emailjs from "@emailjs/browser";
import { useLocation } from "react-router-dom"; // Import useLocation


const Activuty_form = () => {
  const location = useLocation(); // Retrieve location object
  const { text = "Default Text", dtext = "No additional info" } =
    location.state || {};
  // Extract text from location.state

  const fontSize = window.innerWidth < 780 ? "2rem" : "4rem";
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [notify, setNotify] = useState(false);
  const [notify_Error, setNotify_Error] = useState(false);

  // Scroll to top when the component mounts
  useEffect(() => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

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
          setNotify_Error(true);
          console.log("Error in sending form", error);
        }
      );
  };

  return (
   

      <div className="container my-5">
        {notify && (
          <div
            className="alert alert-primary alert-dismissible fade show"
            role="alert"
          >
            <strong>"Message sent successfully!"</strong> You will receive a
            call on your number shortly.
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
        )}
        {notify_Error && (
          <div
            className="alert alert-danger alert-dismissible fade show"
            role="alert"
          >
            <strong>"Message not sent!"</strong>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
        )}
        <h1 className="display-4">Contact Us</h1>
        <div className="row">
          {/* Form Section */}
          <div className="col-sm-12 col-lg-6">
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
                className="btn btn-primary m-1 w-50 align-self-center"
                disabled={loading}
              >
                {loading ? "Sending..." : "Submit"}
              </button>
            </form>
          </div>

          {/* Dynamic Text Section */}
          <div className="col-sm-12 col-lg-6">
            <div className="text-center">
              <h2>{text || "Default Text"}</h2>
              <h6>{dtext}</h6>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Activuty_form;
