//C:\Users\Admin\Desktop\Project\NGO\src\components\Cart.jsx
import React,{useState} from 'react'

const Cart = () => {
    const [cart, setcart] = useState([]);
  return (
    <>
    <div className="container mt-5">
        <h3>Shopping Cart</h3>
        <div className="row">
          {pcart.length > 0 ? (
            pcart.map((cartItem, index) => (
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
            ))
          ) : (
            <p>Your cart is empty.</p>
          )}
        </div>
      </div>
    </>
    
  )
}

export default Cart