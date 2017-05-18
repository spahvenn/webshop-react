import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import phoneImage1 from '../img/phones/droid-2-global-by-motorola.0.jpg';
import phoneImage2 from '../img/phones/motorola-atrix-4g.0.jpg';
import phoneImage3 from '../img/phones/nexus-s.0.jpg';

class HomeCarousel extends Component {

  constructor(props) {
    super(props);
    this.state = {
      interval: 3500,
      images: [phoneImage1, phoneImage2, phoneImage3],
      pauseOnHover: false
    };
  }

  render() {
    var carouselImages = this.state.images.map(function(image, i) {
      return (
        <Carousel.Item key={i}>
          <div className="text-center">
            <img src={image} alt={image} />
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
