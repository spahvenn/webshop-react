import React, { Component } from 'react';
import { createStore, compose } from 'redux'
import { Provider } from 'react-redux';
import { persistStore, autoRehydrate } from 'redux-persist'
import reducers from './reducers/index'
import App from './App';

const store = compose(autoRehydrate())(createStore)(reducers)

export default class AppProvider extends Component {

  constructor() {
    super();
    this.state = { rehydrated: false };
  }

  componentWillMount(){
    persistStore(store, {}, () => {
      this.setState({ rehydrated: true })
    });
  }

  render() {
    if(!this.state.rehydrated){
      return <div></div>
    }
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}