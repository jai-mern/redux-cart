// src/actions/cartActions.js

export const increaseQuantity = (itemId) => ({
    type: 'INCREASE_QUANTITY',
    payload: itemId,
  });
  
  export const decreaseQuantity = (itemId) => ({
    type: 'DECREASE_QUANTITY',
    payload: itemId,
  });
  
  export const loadCartData = () => {
    // ... (your existing code)
  };
  