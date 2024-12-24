import React, { useState } from 'react';
import './Bill.css';

const CheckoutForm = () => {
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform form validation
    const form = event.target;
    const formData = new FormData(form);

    if (!formData.get('cardname') || !formData.get('cardnumber') || !formData.get('expmonth') || !formData.get('expyear') || !formData.get('cvv')) {
      setError('Please fill in all fields.');
      return;
    }

    // If all fields are filled, redirect to another page
    window.location.href = '/checkoutsuccess';
  };

  return (
    <div className="row">
      <div className="col-75">
        <div className="container">
          <form onSubmit={handleSubmit}>
            <div className="col-50">
              <h3>Payment</h3>
              <div className="icon-container">
                <i className="fa fa-cc-visa" style={{ color: 'navy' }}></i>
                <i className="fa fa-cc-amex" style={{ color: 'blue' }}></i>
                <i className="fa fa-cc-mastercard" style={{ color: 'red' }}></i>
                <i className="fa fa-cc-discover" style={{ color: 'orange' }}></i>
              </div>
              <label htmlFor="cname">Name on Card</label>
              <input type="text" id="cname" name="cardname" placeholder="Your Name here" />
              <label htmlFor="ccnum">Credit card number</label>
              <input type="text" id="ccnum" name="cardnumber" required placeholder="1111-2222-3333-4444" />
              <label htmlFor="expmonth">Exp Month</label>
              <input type="text" id="expmonth" required name="expmonth" placeholder="April" />

              <div className="row">
                <div className="col-50">
                  <label htmlFor="expyear">Exp Year</label>
                  <input type="text" id="expyear" required name="expyear" />
                </div>
                <div className="col-50">
                  <label htmlFor="cvv">CVV</label>
                  <input type="text" id="cvv" name="cvv" placeholder="Enter your CVV" required />
                </div>
              </div>
              {error && <p style={{ color: 'red' }}>{error}</p>}
            </div>
            <button className='btn'>Continue to Checkout</button>
          </form>
        </div>
      </div>

      <div className="col-25">
        <div className="container">
          <h4>Cart
            <span className="price" style={{ color: 'black' }}>
              <i className="fa fa-shopping-cart"></i>
              <b>1</b>
            </span>
          </h4>
          <p>Plan 1<span className="price">$5.99</span></p>
          <hr />
          <p>Total <span className="price" style={{ color: 'black' }}><b>$5.99</b></span></p>
        </div>
      </div>
    </div>
  );
}

export default CheckoutForm;
