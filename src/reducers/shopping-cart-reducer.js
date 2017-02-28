import * as types from '../actions/action-types';

const initialState = {
  shoppingCartItems: [],
};

const shoppingCartReducer = function(state = initialState, action) {

  switch(action.type) {
    case types.ADD_ITEM_TO_SHOPPING_CART:
      // TODO: Replace this with proper shopping cart array structure
      return Object.assign(
        {},
        state,
        { shoppingCartItems: state.shoppingCartItems.concat([action.itemId]) }
      );
    case types.GET_SHOPPING_CART:
      return state.shoppingCartItems;
  }

  return state;

}

export default shoppingCartReducer;
