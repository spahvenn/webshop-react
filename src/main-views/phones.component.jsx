import React, {Component} from 'react';
import Axios from 'axios';
// TODO: get kutsu phones.json

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phones: []
    };
  }

  componentDidMount() {
    var self = this;
    this.serverRequest =
    Axios.get("phones-data/phones.json")
    .then(function(result) {
      self.setState({
        phones: result.data
      });
    })
  }

  componentWillUnmount() {
    this.serverRequest.abort();
  }

  render(){
    return(
      <div>
        <div className="row">
          {
            this.state.phones.map(function(phone) {
              return (
                <div key={phone.id} className="thumbnail phone-list-item col-md-3">
                  <a href="#!/phones/{phone.id}" className="thumb">
                    <img src={phone.imageUrl} alt={phone.name} />
                  </a>
                  <a href="#!/phones/{phone.id}">{phone.name}</a>
                  <p>{phone.snippet}</p>
                </div>
              )
            })
          }
        </div>
      </div>
    );
  }
}

export default Main
