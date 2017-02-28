import { combineReducers } from 'redux';

import shoppingCartReducer from './shopping-cart-reducer';

var reducers = combineReducers({
    shoppingCartState: shoppingCartReducer
});

export default reducers;
