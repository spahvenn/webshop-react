import React, {Component} from 'react';
import ContactForm from "../components/contact-form/contact-form.component.jsx";

class About extends Component {

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <p>Demo for some form validations (required fields, email field), does not actually submit the form anywhere.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <ContactForm/>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
