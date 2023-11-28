// src/reducers/cartReducer.js

const initialState = {
    items: [], // Your cart items from JSON data
  };
  
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'INCREASE_QUANTITY':
        // Implement logic to increase quantity
        return state;
  
      case 'DECREASE_QUANTITY':
        // Implement logic to decrease quantity
        return state;
  
      default:
        return state;
    }
  };
  
  export default cartReducer;
  