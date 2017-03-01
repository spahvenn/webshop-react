import React, {Component} from 'react';
import { connect } from 'react-redux';
import _ from 'underscore';
import ShoppingCartAddButton from './shopping-cart-add-button';
import store from '../../store';
import { addItemToShoppingCart } from '../../actions/shopping-cart-actions';

class ShoppingCartAddButtonContainer extends Component {

  constructor(props) {
    super(props);
    this.addItemToShoppingCart = this.addItemToShoppingCart.bind(this);
  }

  // TODO: move this to a reusable location
  addItemToShoppingCart() {
    store.dispatch(addItemToShoppingCart(this.props.phoneId));
  }

  render() {
    return (
      <ShoppingCartAddButton addItemToShoppingCart={this.addItemToShoppingCart} />
    );
  }
}

export default ShoppingCartAddButtonContainer;
