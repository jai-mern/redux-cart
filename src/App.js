// src/App.js

import React from 'react';
import { Provider } from 'react-redux';
import store from './store'; // Make sure you provide the correct path to your Redux store
import Cart from './components/Cart';
import ProductContainer from './containers/ProductContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Your React Redux Cart</h1>
        <Cart />
        <hr />
        <h2>Product List</h2>
        <ProductContainer id={1} />
        <ProductContainer id={2} />
        {/* Add more ProductContainer components as needed */}
      </div>
    </Provider>
  );
}

export default App;
