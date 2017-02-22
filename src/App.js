import React, { Component } from 'react';
import { render } from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import Home from './main-views/home.component.jsx';
import Main from './main-views/main.component.jsx';
import Phones from './main-views/phones.component.jsx';
import PhoneDetail from './main-views/phone-detail.component.jsx';


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
        </Router>
      )
    }
  };

export default App;
