import React, {Component} from 'react';
import {Link} from 'react-router';


class Navigation extends Component {
  render(){
    return(
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link to="/" className="navbar-brand">Webshop</Link>
          </div>
          <div id="navbar" className="navbar-collapse collapse" aria-expanded="false" style={{height: '1px'}}>
            <ul className="nav navbar-nav">
              <li>
                <Link to="/phones">Phones</Link>
              </li>
              <li>
                <Link to="/shopping-cart">
                  Shopping Cart
                  <span className="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span>
                  <span id="shopping-cart-item-amount">TODO item amount</span>
                </Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation
