import React from 'react';
import ReactDOM from 'react-dom';
import ShoppingCartItemComponent from './shopping-cart-items.component.jsx';
import { shallow } from 'enzyme';

// renders only this component, not the children
it('renders without crashing', () => {
  shallow(<ShoppingCartItemComponent/>);
});

// renders component and its children (used here only for demonstration purposes)
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ShoppingCartItemComponent/>, div);
});