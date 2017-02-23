import React, {Component} from 'react';
import { Link } from 'react-router';

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
        <div class="row">
          <div class="col-md-12">
            <h1>Shopping Cart</h1>
            <p className={!this.state.hasShoppingCartItems ? 'hidden' : ''}>Your shopping cart items:</p>
          </div>
        </div>
        <div class='row'>
          <div class="col-md-9">
            <div className={this.state.hasShoppingCartItems ? 'hidden' : ''}>Your shopping cart is empty! Browse our <Link to="/phones">products</Link>.</div>
          </div>
          <div class="col-md-3">

          </div>
        </div>
      </div>

    )
  }
}

export default ShoppingCart;
