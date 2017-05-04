import React, {Component} from 'react';
import {Link} from 'react-router';
import Axios from 'axios';
import { connect } from 'react-redux';
import _ from 'underscore';
import Promise from 'bluebird';

class ShoppingCartItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      phones: []
    };
  }

  componentDidMount() {

    let shoppingCartItems = this.props.shoppingCartItems.slice();

    var itemIds = _.pluck(shoppingCartItems, 'phoneId');
    let promises = [];

    _.each(itemIds, function (itemId) {
      promises.push(Axios.get('phones-data/' + itemId + '.json'));
    });

    Promise.all(promises)
      .then((responses) => {
        let phones = [];
        _.each(responses, (response) => {
          phones.push(response.data);
          let extendedShoppingCartItems = _.filter(phones, (phone) => {
            return _.find(shoppingCartItems, (item) => {
              if (phone.id === item.phoneId) {
                phone.amount = item.amount;
                return true;
              }
            });
          });
          this.setState({
            phones: extendedShoppingCartItems
          });
        });
      });
  }

  render() {
    return (
      <div>
        <div>
          {
            this.state.phones.map(function (phone) {
              return (
                <div key={phone.id} className="thumbnail row">

                  <div className="col-md-2">
                    <Link to={"phones/" + phone.id}>
                      <img src={phone.images[0]} alt={phone.name}/>
                    </Link>
                  </div>

                  <div className="col-md-8">
                    <Link to={"phones/" + phone.id}>{phone.name}</Link>
                    <p>{phone.description}</p>
                  </div>

                  <div className="col-md-2 bg-info">
                    <p>Price {phone.amount} x {phone.price}</p>
                    <p>Total: <span className="amount">{ phone.amount * phone.price }</span></p>
                  </div>

                </div>
              );
            })
          }
        </div>
      </div>
    );
  }

}

const mapStateToProps = function(store) {
  return {
    shoppingCartItems: store.shoppingCartState.shoppingCart.shoppingCartItems
  };
};

export default connect(mapStateToProps)(ShoppingCartItem);