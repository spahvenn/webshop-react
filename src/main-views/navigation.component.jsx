import React, {Component} from 'react';

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
            <a className="navbar-brand" href="/">Webshop</a>
          </div>
          <div id="navbar" className="navbar-collapse collapse" aria-expanded="false" style={{height: '1px'}}>
            <ul className="nav navbar-nav">
              <li>
                <a href="/phones">Phones</a>
              </li>
              <li>
                <a href="/shopping-cart">
                  Shopping Cart
                  <span className="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span>
                  <span id="shopping-cart-item-amount">TODO item amount</span>
                </a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation
