import React, { Component } from 'react';
import { Link } from 'react-router';
import ShoppingCartItem from '../components/shopping-cart-item.component';

class ShoppingCart extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hasShoppingCartItems: false
    };
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <h1>Shopping Cart</h1>
            <p className={!this.state.hasShoppingCartItems ? 'hidden' : ''}>Your shopping cart items:</p>
          </div>
        </div>
        <div className='row'>
          <div className="col-md-9">
            <div className={this.state.hasShoppingCartItems ? 'hidden' : ''}>Your shopping cart is empty! Browse our <Link to="/phones">products</Link>.</div>
            <ShoppingCartItem></ShoppingCartItem>
          </div>
          <div className="col-md-3">

          </div>
        </div>
      </div>

    )
  }
}

export default ShoppingCart;
