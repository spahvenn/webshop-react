import React, { Component } from 'react';
import { render } from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import Home from './main-views/home.component';
import Main from './main-views/main.component';
import Phones from './main-views/phones.component';
import PhoneDetail from './main-views/phone-detail.component';
import About from './main-views/about.component';

class App extends Component {
  render() {
      return(
        <Router history={browserHistory}>
            <Route component={Main}>
                <Route path="/" component={Home}/>
            </Route>
            <Route component={Main}>
                <Route path="/phones" component={Phones}/>
            </Route>
            <Route component={Main}>
                <Route path="/phones/:phoneId" component={PhoneDetail}/>
            </Route>
            <Route component={Main}>
                <Route path="/about" component={About}/>
            </Route>
        </Router>
      )
    }
  };

export default App;
