import React from 'react';

export default function(props) {
  return (
    <button onClick={props.addItemToShoppingCart} className="add-to-cart-btn btn btn-primary">Add to cart</button>
  );
}
