import React, {Component} from 'react';
import ShoppingCartAddButton from './shopping-cart-add-button';
import {addItemToShoppingCart} from '../../actions/shopping-cart-actions';
import { connect } from 'react-redux';

class ShoppingCartAddButtonContainer extends Component {

  constructor(props) {
    super(props);
    this.addItemToShoppingCart = this.addItemToShoppingCart.bind(this);
  }

  addItemToShoppingCart() {
    this.props.addItemToShoppingCart(this.props.phoneId);
  }

  render() {
    return (
      <ShoppingCartAddButton
        addItemToShoppingCart={this.addItemToShoppingCart}
      />
    );
  }

}

// Maps actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    addItemToShoppingCart: item => dispatch(addItemToShoppingCart(item))
  }
};

export default connect(null, mapDispatchToProps)(ShoppingCartAddButtonContainer);