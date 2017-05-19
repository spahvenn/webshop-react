import React, { Component } from 'react';
import {Router, Route, browserHistory} from 'react-router';

import Home from './main-views/home.component';
import Main from './main-views/main.component';
import Phones from './main-views/phones.component';
import PhoneDetail from './main-views/phone-detail.component';
import About from './main-views/about.component';
import Contact from './main-views/contact.component';
import ShoppingCart from './main-views/shopping-cart.component';

class App extends Component {

  render() {
    const baseUrl = process.env.PUBLIC_URL;
    return (
      <Router history={browserHistory}>
        <Route component={Main}>
          <Route path={baseUrl + '/'} component={Home}/>
          <Route path={baseUrl + '/phones'} component={Phones}/>
          <Route
            path={baseUrl + '/phones/:phoneId'}
            component={PhoneDetail}
            />
          <Route path={baseUrl + '/shopping-cart'} component={ShoppingCart}/>
          <Route path={baseUrl + '/about'} component={About}/>
          <Route path={baseUrl + '/contact'} component={Contact}/>
        </Route>
      </Router>
    )
  }

};

export default App;
