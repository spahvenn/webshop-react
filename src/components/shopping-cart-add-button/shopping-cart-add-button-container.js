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
    console.log('addItemToShoppingCart clicked');
    store.dispatch(addItemToShoppingCart(this.props.phoneId));
  }

  render() {
    return (
      <ShoppingCartAddButton addItemToShoppingCart={this.addItemToShoppingCart} />
    );
  }
}

/*
const mapStateToProps = function(store) {


  let shoppingCartItems = store.shoppingCartState.shoppingCartItems;
  const itemData;
  if (shoppingCartItems) {
      let item = null;
      itemData = _.find(shoppingCartItems, function(item) {
      return item.id === self.phoneId;
    });
  }

  let amount = 0;
  if (itemData) {
    amount = itemData.amount;
  }

  return {
    amount: amount
  };


};
*/
export default ShoppingCartAddButtonContainer;
