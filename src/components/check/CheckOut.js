import React from "react";

const CheckOut = () => {
  return (
    <div className="container b">
      <h1>Billing Details</h1>
      <div className="bill">
        <div className="left">
          <form action="#">
            <p htmlFor="">First Name</p>
            <input type="text" />
            <p htmlFor="">Street Address</p>
            <input type="text" />
            <p htmlFor="">Apartment, floor, etc. (optional)</p>
            <input type="text" />
            <p htmlFor="">Phone Number</p>
            <input type="number" />
            <div className="check">
              <input type="checkbox" />
              <label>
                Save this information for faster check-out next time
              </label>
            </div>
          </form>
        </div>
        <div className="right">
          <div className="cost">
            <h2>Subtotal:</h2>
            <h2></h2>
          </div>
          <hr />
          <div className="cost">
            <h2>Shipping:</h2>
            <h2></h2>
          </div>
          <hr />
          <div className="cost">
            <h2>Total:</h2>
            <h2></h2>
          </div>
          <button className="code">Coupon Code</button>
          <button className="apply">Apply Coupon</button>
          <button className="order">Place Order</button>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
