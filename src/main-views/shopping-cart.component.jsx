import React, { Component } from 'react';
import { Link } from 'react-router';
import ShoppingCartItems from '../components/shopping-cart-items.component';
import { connect } from 'react-redux';


class ShoppingCart extends Component {

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <h1>Shopping Cart</h1>
            <p className={this.props.shoppingCartItemAmount.length === 0  ? 'hidden' : ''}>Your shopping cart items:</p>
          </div>
        </div>
        <div className='row'>
          <div className="col-md-9">
            <div className={this.props.shoppingCartItemAmount > 0 ? 'hidden' : ''}>Your shopping cart is empty! Browse our <Link to="/phones">products</Link>.</div>
            <ShoppingCartItems></ShoppingCartItems>
          </div>
          <div className="col-md-3">

          </div>
        </div>
      </div>

    )
  }
}

const mapStateToProps = function(store) {
  return {
    shoppingCartItemAmount: store.shoppingCartState.shoppingCart.shoppingCartItemAmount
  };
};

export default connect(mapStateToProps)(ShoppingCart);
