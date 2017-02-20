import React, {Component} from 'react';
import Navigation from './navigation.component.jsx';

class Main extends Component {
  render(){
    return(
      <div>
        <Navigation></Navigation>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Main
