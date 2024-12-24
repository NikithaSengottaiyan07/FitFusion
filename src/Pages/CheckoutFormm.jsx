import React from 'react';
import './Bill.css'

const CheckoutFormm = () => {
    const handleSubmit = () => {
        alert("Purchase Successfull!!");
    }
  return (
    <div className="row">
      <div className="col-75">
        <div className="container">
          <form action="/action_page.php">


              <div className="col-50">
                <h3>Payment</h3>
                <label htmlFor="fname">Accepted Cards</label>
                <div className="icon-container">
                  <i className="fa fa-cc-visa" style={{ color: 'navy' }}></i>
                  <i className="fa fa-cc-amex" style={{ color: 'blue' }}></i>
                  <i className="fa fa-cc-mastercard" style={{ color: 'red' }}></i>
                  <i className="fa fa-cc-discover" style={{ color: 'orange' }}></i>
                </div>
                <label htmlFor="cname">Name on Card</label>
                <input type="text" id="cname" name="cardname" placeholder="Your Name here" />
                <label htmlFor="ccnum">Credit card number</label>
                <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444" />
                <label htmlFor="expmonth">Exp Month</label>
                <input type="text" id="expmonth" name="expmonth" placeholder="April" />

                <div className="row">
                  <div className="col-50">
                    <label htmlFor="expyear">Exp Year</label>
                    <input type="text" id="expyear" name="expyear" />
                  </div>
                  <div className="col-50">
                    <label htmlFor="cvv">CVV</label>
                    <input type="text" id="cvv" name="cvv" placeholder="Enter your CVV" />
                  </div>
                </div>
              </div>

           
              <button onClick={handleSubmit} className='btn'>Continue to Checkout</button>
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
          <p>Plan 1<span className="price">$34.99</span></p>
          <hr />
          <p>Total <span className="price" style={{ color: 'black' }}><b>$34.99</b></span></p>
        </div>
      </div>
    </div>
  );
}

export default CheckoutFormm;