import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import "./cart.css";

function Cart() {

  //get the cart array from localstorage
  const cart = JSON.parse(localStorage.getItem('cart')) || []
  const navigate = useNavigate();
  const [total, setTotal] = useState(0)

  // to calculate the total price
  useEffect(() => {
    const total = cart.reduce((acc, item) => {
      return acc + (item.price * item.quantity)
    }, 0)
    setTotal(total)

  }, [cart])

  //handle + 
  const handleIncrement = (id) => {
    const updatedCart = cart.map(item => {
      if (item.id === id) {
        return {
          ...item,
          quantity: item.quantity + 1
        }
      }
      return item
    })
    localStorage.setItem('cart', JSON.stringify(updatedCart))
    navigate('/cart')
  }

  //handle - 
  const handleDecrement = (id) => {
    const updatedCart = cart.map(item => {
      if (item.id === id && item.quantity > 1) {
        return {
          ...item,
          quantity: item.quantity - 1
        }
      }
      return item
    })
    localStorage.setItem('cart', JSON.stringify(updatedCart))
    navigate('/cart')
  }

  //handle checkout button
  const handleOrder = () => {
    if (cart.length > 0) {
      alert("Your order placed successfully")
    }
    else {
      alert("Cart is Empty");
    }
  }

  //handle remove button
  const removeProduct = (id) => {
    const updatedCart = cart.filter(item => item.id !== id)
    localStorage.setItem('cart', JSON.stringify(updatedCart))
    navigate('/cart')
  }


  //rendering the component

  return (
    <>
      <Header />

      <div className="container container-fluid">
        <h4 className="mt-5">Your Cart : {cart?.length} Items</h4>

        {/* Table for Cart Items */}
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Product</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Total</th>
              <th scope="col">Remove</th>
            </tr>
          </thead>
          <tbody>

            {/* mapping through the cart array */}
            {cart?.map(item => (
              <tr key={item.id}>
                <td>
                  <img src={item.image} alt={item.title} height="90" width="115" />
                  <p>{item.title}</p>
                </td>

                <td>${item.price}</td>

                <td>
                  <div className="stockCounter d-inline">
                    <span
                      className="btn btn-danger minus"
                      onClick={() => handleDecrement(item.id)} style={{ width: '20px', textAlign: 'center' }}
                    > - </span>
                    <span> <input type="number"
                      className="form-control count d-inline"
                      value={item.quantity}
                      readOnly
                    />
                    </span>
                    <span
                      className="btn btn-primary plus"
                      onClick={() => handleIncrement(item.id)} style={{ width: '20px', textAlign: 'center' }}
                    > +   </span>
                      
                  
                  </div>
                </td>

                <td>${item.price * item.quantity}</td>

                <td>
                  <p className="remove-btn" onClick={() => removeProduct(item.id)}>
                    Remove
                  </p>
                </td>

              </tr>
            ))}
          </tbody>
        </table>

        {/* Order Summary */}
        <div className="row justify-content-center mt-4">
          <div className="col-12 col-md-12 col-lg-12">
            <div id="order_summary" className="card">
              <div className="card-body">
                <h4>Order Summary</h4>
                <hr />
                <p>Total-items: <span className="order-summary-values">{cart?.length}</span></p>
                <p>Est. total: <span className="order-summary-values">Rs. {total}</span></p>
                <hr />
                <button
                  id="checkout_btn"
                  className="btn btn-primary btn-block"
                  onClick={handleOrder}
                >
                  Check out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Cart;