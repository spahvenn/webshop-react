import React, { Component } from 'react';
import { render } from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import Home from './main-views/home.component.jsx'
import Main from './main-views/main.component.jsx'


class App extends Component {
  render() {
      return(
        <Router history={browserHistory}>
            <Route component={Main}>
                <Route path="/" component={Home}/>
            </Route>
        </Router>
      )
    }
  };

export default App;
