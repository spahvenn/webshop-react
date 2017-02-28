import React, {Component} from 'react';

export default function(props) {
  return (
    <button onClick={props.addItemToShoppingCart} className="add-to-cart-btn btn btn-primary">Add to cart</button>
  );
}

/*
import React, {Component} from 'react';

class ShoppingCartAddButton extends Component {
  render() {
    return (
      <button onClick={this.props.addItemToShoppingCart} className="add-to-cart-btn btn btn-primary">Add to cart</button>
    )
  }
}
export default ShoppingCartAddButton;
*/
