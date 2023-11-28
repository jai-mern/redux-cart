// src/containers/ProductContainer.js

import { connect } from 'react-redux';
import Product from '../components/Product';
import { increaseQuantity, decreaseQuantity } from '../actions/cartActions';

const mapStateToProps = (state, ownProps) => {
  const product = state.cart.items.find(item => item.id === ownProps.id);

  return {
    id: product.id,
    name: product.name,
    price: product.price,
    quantity: product.quantity,
  };
};

const mapDispatchToProps = {
  increaseQuantity,
  decreaseQuantity,
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
