// src/components/Cart.js

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { increaseQuantity, decreaseQuantity, loadCartData } from '../actions/cartActions';

const Cart = ({ cart, increaseQuantity, decreaseQuantity, loadCartData }) => {
  useEffect(() => {
    // Load initial data when the component mounts
    loadCartData();
  }, [loadCartData]);

  // Implement your cart rendering logic using the Redux state
  return (
    <div>
      {cart.items.map((item) => (
        <div key={item.id}>
          <p>Item: {item.name}</p>
          <p>Per-item Price: ${item.price}</p>
          <p>Per-item Quantity: {item.quantity}</p>
          {/* Additional details or styling as needed */}
        </div>
      ))}

      <p>Total Quantity: {/* Calculate total quantity from cart items */}</p>
      <p>Total Amount: ${/* Calculate total amount from cart items */}</p>

      {/* Additional UI for increasing/decreasing quantity, etc. */}
    </div>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps, { increaseQuantity, decreaseQuantity, loadCartData })(Cart);
