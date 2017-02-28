import * as types from '../actions/action-types';

export function addItemToShoppingCart(itemId) {
  return {
    type: types.ADD_ITEM_TO_SHOPPING_CART,
    itemId: itemId
  };
}
