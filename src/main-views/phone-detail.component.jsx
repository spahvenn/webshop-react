import React, {Component} from 'react';
import Axios from 'axios';
import ShoppingCartAddButtonContainer from '../components/shopping-cart-add-button/shopping-cart-add-button-container';
import { connect } from 'react-redux';
import _ from 'underscore';

class PhoneDetail extends Component {

  constructor(props) {
    super(props);
    this.state = {
      phone: null,
    };
  }

  componentWillMount() {
    var self = this;
    this.phoneId = this.props.params.phoneId;
    Axios.get('phones-data/' + this.phoneId + '.json')
    .then(function(result) {
      self.setState({
        phone: result.data,
      });
    })
  }

  render() {

    if (!this.state.phone) {
      return (<div>loading ...</div>);
    }

    let itemAmount = 0;
    if (this.props.shoppingCart.shoppingCartItems) {
      let itemData = _.find(this.props.shoppingCart.shoppingCartItems, (item) => {
        return item.phoneId === this.phoneId;
      });
      if (itemData) {
        itemAmount = itemData.amount;
      }
    }

    return (
      <div>
        <div className="row">
          <div className="col-md-6">
            <div className="phone-images">
              <img src={'../' + this.state.phone.images[0]} alt=""/>
            </div>
          </div>
          <div className="col-md-6">
            <h1>{this.state.phone.name}</h1>

            <p>{this.state.phone.description}</p>

            <div>
              <p id="phone-detail-price">Price: { this.state.phone.price }</p>
              <ShoppingCartAddButtonContainer phoneId={ this.phoneId }></ShoppingCartAddButtonContainer>
              <p className="bg-info">Products in cart: { itemAmount }</p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <h2>Specifications</h2>
            <ul className="specs">
              <li>
                <span>Availability and Networks</span>
                <dl>
                  <dt>Availability</dt>
                  <dd></dd>
                </dl>
              </li>
              <li>
                <span>Battery</span>
                <dl>
                  <dt>Type</dt>
                  <dd></dd>
                  <dt>Talk Time</dt>
                  <dd>{this.state.phone.battery.talkTime}</dd>
                  <dt>Standby time (max)</dt>
                  <dd>{this.state.phone.battery.standbyTime}</dd>
                </dl>
              </li>
              <li>
                <span>Storage and Memory</span>
                <dl>
                  <dt>RAM</dt>
                  <dd>{this.state.phone.storage.ram}</dd>
                  <dt>Internal Storage</dt>
                  <dd>{this.state.phone.storage.flash}</dd>
                </dl>
              </li>
              <li>
                <span>Connectivity</span>
                <dl>
                  <dt>Network Support</dt>
                  <dd>{this.state.phone.connectivity.cell}</dd>
                  <dt>WiFi</dt>
                  <dd>{this.state.phone.connectivity.wifi}</dd>
                  <dt>Bluetooth</dt>
                  <dd>{this.state.phone.connectivity.bluetooth}</dd>
                  <dt>Infrared</dt>
                  <dd>{this.state.phone.connectivity.infrared}</dd>
                  <dt>GPS</dt>
                  <dd>{this.state.phone.connectivity.gps}</dd>
                </dl>
              </li>
              <li>
                <span>Android</span>
                <dl>
                  <dt>OS Version</dt>
                  <dd>{this.state.phone.android.os}</dd>
                  <dt>UI</dt>
                  <dd>{this.state.phone.android.ui}</dd>
                </dl>
              </li>
              <li>
                <span>Size and Weight</span>
                <dl>
                  <dt>Dimensions</dt>
                  <dt>Weight</dt>
                  <dd>{this.state.phone.sizeAndWeight.weight}</dd>
                </dl>
              </li>
              <li>
                <span>Display</span>
                <dl>
                  <dt>Screen size</dt>
                  <dd>{this.state.phone.display.screenSize}</dd>
                  <dt>Screen resolution</dt>
                  <dd>{this.state.phone.display.screenResolution}</dd>
                  <dt>Touch screen</dt>
                  <dd>{this.state.phone.display.touchScreen }</dd>
                </dl>
              </li>
              <li>
                <span>Hardware</span>
                <dl>
                  <dt>CPU</dt>
                  <dd>{this.state.phone.hardware.cpu}</dd>
                  <dt>USB</dt>
                  <dd>{this.state.phone.hardware.usb}</dd>
                  <dt>Audio / headphone jack</dt>
                  <dd>{this.state.phone.hardware.audioJack}</dd>
                  <dt>FM Radio</dt>
                  <dd>{this.state.phone.hardware.fmRadio }</dd>
                  <dt>Accelerometer</dt>
                  <dd>{this.state.phone.hardware.accelerometer }</dd>
                </dl>
              </li>
              <li>
                <span>Camera</span>
                <dl>
                  <dt>Primary</dt>
                  <dd>{this.state.phone.camera.primary}</dd>
                  <dt>Features</dt>
                  <dd>{this.state.phone.camera.features.join(', ')}</dd>
                </dl>
              </li>
              <li>
                <span>Additional Features</span>
                <dd>{this.state.phone.additionalFeatures}</dd>
              </li>
            </ul>

          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = function(store) {
  return {
    shoppingCart: store.shoppingCartState
  };
};

export default connect(mapStateToProps)(PhoneDetail);
