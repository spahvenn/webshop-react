import * as types from '../actions/action-types';
import _ from 'underscore';

const initialState = {
  shoppingCart: {
    shoppingCartItems: [],
    shoppingCartItemAmount: 0,
  }
};

const shoppingCartReducer = function(state = initialState, action) {

  switch(action.type) {
    case types.ADD_ITEM_TO_SHOPPING_CART:
      let newShoppingCartItems = state.shoppingCart.shoppingCartItems.slice();
      let itemData;
      if (newShoppingCartItems) {
        itemData = _.find(newShoppingCartItems, function(item) {
          return item.phoneId === action.itemId;
        });
      }

      // increase item amount or add item to shopping cart
      if (itemData) {
        itemData.amount += 1;
      } else {
        itemData = {phoneId: action.itemId, amount: 1 };
        newShoppingCartItems.push(itemData);
      }

      // update item amount
      let newShoppingCartItemAmount = state.shoppingCart.shoppingCartItemAmount + 1;

      return {
        shoppingCart: {
          shoppingCartItems: newShoppingCartItems,
          shoppingCartItemAmount: newShoppingCartItemAmount
        }
      }
    default:
      console.log('Action not defined: ' + action.type);
  }

  return state;

}

export default shoppingCartReducer;
