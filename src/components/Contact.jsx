import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./com.css"; // Custom CSS file for styling

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [loading, setLoading] = useState(false);

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
          alert("Message sent successfully!");
          setForm({ name: "", email: "", phone: "", message: "" });
        },
        (error) => {
          setLoading(false);
          console.error("Error sending message:", error);
          alert("Failed to send the message. Please try again.");
        }
      );
  };

  return (
    <div className="container-fluid d-flex m-2">
      <h1 className="contact-title fs-1 m-3">Contact </h1>
      {/* Contact Form */}
      <div className="container">
        <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
          <div className="form-field">
            <label className="form-label">Name</label>
            <input
              type="text"
              name="name"
              className="form-input"
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
              className="form-input"
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
              className="form-input"
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
              className="form-textarea"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="form-button" disabled={loading}>
            {loading ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
