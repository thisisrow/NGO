import React, { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext";
import emailjs from "@emailjs/browser";
import "bootstrap/dist/css/bootstrap.min.css";

const Cart = () => {
  const { cart } = useContext(CartContext);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [notify, setNotify] = useState(false);
  const [notify_Erroe, setNotify_Erroe] = useState(false);
  const handleBuy = () => {
    setShowModal(true);
    const cartDetails = cart
      .map(
        (item) =>
          `Title: ${item.title}, Code: ${item.code}, Quantity: ${item.quantity}, Total: ${item.total}`
      )
      .join("\n");
    setForm({ ...form, message: cartDetails });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.EMAILJS_SERVICE_ID,
        import.meta.env.EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          phone: form.phone,
          message: form.message,
        },
        import.meta.env.EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          setNotify(true);
          setForm({ name: "", email: "", phone: "", message: "" });
          setShowModal(false);
        },
        (error) => {
          setLoading(false);
          setNotify(true);
        }
      );
  };

  return (
    <div className="container mt-5">
      <div className="row">
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
        {cart.length > 0 ? (
          <>
            {cart.map((cartItem, index) => (
              <div key={index} className="col-12">
                <div className="card mb-3">
                  <div className="card-body">
                    <h5 className="card-title">{cartItem.title}</h5>
                    <p className="card-text">Code: {cartItem.code}</p>
                    <p className="card-text">Price: {cartItem.price}</p>
                    <p className="card-text">Quantity: {cartItem.quantity}</p>
                    <p className="card-text">Total: {cartItem.total}</p>
                  </div>
                </div>
              </div>
            ))}
            <div className="col-12 text-center mt-3">
              <button
                className="btn btn-primary btn-lg"
                onClick={handleBuy}
              >
                Buy
              </button>
            </div>
          </>
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal show d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Order Details</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Phone</label>
                    <input
                      type="text"
                      className="form-control"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Message</label>
                    <textarea
                      className="form-control"
                      value={form.message}
                      readOnly
                      rows="5"
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary" disabled={loading}>
                    {loading ? "Sending..." : "Order Now"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
