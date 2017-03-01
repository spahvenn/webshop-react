import * as types from '../actions/action-types';
import _ from 'underscore';

const initialState = {
  shoppingCartItems: [],
};

const shoppingCartReducer = function(state = initialState, action) {

  switch(action.type) {
    case types.ADD_ITEM_TO_SHOPPING_CART:
      let newShoppingCartItems = state.shoppingCartItems.slice();
      let itemData;
      if (newShoppingCartItems) {
        itemData = _.find(newShoppingCartItems, function(item) {
          return item.phoneId === action.itemId;
        });
      }

      if (itemData) {
        itemData.amount += 1;
      } else {
        itemData = {phoneId: action.itemId, amount: 1 };
        newShoppingCartItems.push(itemData);
      }

      return Object.assign(
        {},
        state,
        { shoppingCartItems: newShoppingCartItems }
      );
    case types.GET_SHOPPING_CART:
      return state.shoppingCartItems;
  }

  return state;

}

export default shoppingCartReducer;
