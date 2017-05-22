import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import Axios from 'axios';
import { Link } from 'react-router';

class HomeCarousel extends Component {

  constructor(props) {
    super(props);
    this.state = {
      interval: 3500,
      pauseOnHover: false
    };
  }

  componentWillMount() {
    var self = this;
    Axios.get(process.env.PUBLIC_URL+'/phones-data/droid-2-global-by-motorola.json')
      .then(function(result) {
        Axios.get(process.env.PUBLIC_URL+'/phones-data/motorola-atrix-4g.json')
          .then(function(result2) {
            Axios.get(process.env.PUBLIC_URL+'/phones-data/nexus-s.json')
              .then(function(result3) {
                self.setState({
                  phones: [result.data, result2.data, result3.data],

                });
              });
          });
      });
  }

  render() {

    if (!this.state.phones) {
      return <div>Loading...</div>
    }

    var carouselImages = this.state.phones.map(function(phone, i) {
      return (
        <Carousel.Item key={i}>
          <div className="text-center">
            <Link to={"/phones/"+ phone.id}>
              <img src={process.env.PUBLIC_URL+'/'+phone.images[0]} alt={phone.name} />
            </Link>
          </div>
        </Carousel.Item>
      )
    });

    return (
      <div>
        <Carousel
          interval={this.state.interval}
          pauseOnHover={this.state.pauseOnHover}
        >
          { carouselImages }
        </Carousel>
      </div>
    )
  }
}

export default HomeCarousel
