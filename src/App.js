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
              />
            <Route path="/shopping-cart" component={ShoppingCart}/>
            <Route path="/about" component={About}/>
          </Route>
        </Router>
      </Provider>
    )
  }

};

export default App;
