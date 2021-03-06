import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import HomeCarousel from './carousel.component.jsx'
import { Link } from 'react-router';

class Home extends Component {
  handleRedirect(){
    browserHistory.push('/home');
  }
  render(){
    return(
      <div>

        <div className="row">
          <div className="col-md-12">
            <HomeCarousel></HomeCarousel>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <h2>Phones</h2>
            <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
            <p><Link to="/phones" className="btn btn-primary" role="button">See more »</Link></p>
          </div>
          <div className="col-md-4">
            <h2>Accessories</h2>
            <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
            <p>Accessories coming soon!</p>
          </div>
          <div className="col-md-4">
            <h2>Extended Warranty</h2>
            <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
            <p>Extended Warranties coming soon!</p>
          </div>
        </div>

      </div>

    )
  }
}

export default Home
