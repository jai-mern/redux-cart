// src/components/Product.js

import React from 'react';

const Product = ({ id, name, price, quantity, increaseQuantity, decreaseQuantity }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>Price: ${price}</p>
      <p>Quantity: {quantity}</p>
      <button onClick={() => increaseQuantity(id)}>Increase Quantity</button>
      <button onClick={() => decreaseQuantity(id)}>Decrease Quantity</button>
    </div>
  );
};

export default Product;
