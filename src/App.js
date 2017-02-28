import React, { Component } from 'react';
import { render } from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import _ from 'underscore';
import { Provider } from 'react-redux';

import Home from './main-views/home.component';
import Main from './main-views/main.component';
import Phones from './main-views/phones.component';
import PhoneDetail from './main-views/phone-detail.component';
import About from './main-views/about.component';
import ShoppingCart from './main-views/shopping-cart.component';

import store from './store';


class App extends Component {

  constructor() {
    super();
    this.state = {
      shoppingCart: [],
      shoppingCartItemAmount: 0,
    }
    this.addItemToCart = this.addItemToCart.bind(this);
  }

  getShoppingCartItemAmount() {
    return this.state.shoppingCartItemAmount;
  }

  addItemToCart(itemId) {
    const shoppingCart = this.state.shoppingCart;

    let item = null;
    let itemData = _.find(shoppingCart, function(item) {
      return item.id === itemId;
    });

    if (!itemData) {
      itemData = { phoneId: itemId, amount: 1 };
    } else {
      itemData.amount += 1;
    }

    this.setState((prevState) => {
      const newShoppingCart = prevState.shoppingCart.concat([itemData]);
      const newShoppingCartItemAmount = prevState.shoppingCartItemAmount + 1;
      return {
        shoppingCart: newShoppingCart,
        shoppingCartItemAmount: newShoppingCartItemAmount
      };
    })
  }

  render() {
    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          <Route component={Main}>
            <Route path="/" component={Home}/>
            <Route path="/phones" component={Phones}/>
            <Route
              path="/phones/:phoneId"
              component={PhoneDetail}
              addItemToCart={this.addItemToCart}
              shoppingCartItemAmount={this.state.shoppingCartItemAmount}
              />
            <Route path="/shopping-cart" component={ShoppingCart}/>
            <Route path="/about" component={About}/>
          </Route>
        </Router>
      </Provider>
    )
  }

};

//App.propTypes

export default App;
