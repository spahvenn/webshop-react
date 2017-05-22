import React, {Component} from 'react';
import Axios from 'axios';
import { Link } from 'react-router';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      phones: []
    };
  }

  componentWillMount() {
    var self = this;
    this.serverRequest =
    Axios.get(process.env.PUBLIC_URL+"/phones-data/phones.json")
    .then(function(result) {
      self.setState({
        phones: result.data
      });
    })
  }

  render(){
    return(
      <div>
        <div className="row">
          {
            this.state.phones.map(function(phone) {
              return (
                <div key={phone.id} className="thumbnail phone-list-item col-md-3">
                  <Link to={"/phones/"+ phone.id} className="thumb">
                    <img src={process.env.PUBLIC_URL+'/'+phone.imageUrl} alt={phone.name} />
                  </Link>
                  <Link to={"/phones/"+ phone.id}>{phone.name}</Link>
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
