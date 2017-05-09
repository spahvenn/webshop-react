import React, {Component} from 'react';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subject: '',
      message: '',
      email: '',
      errors: {}
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInputBlur = this.handleInputBlur.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  validateFormInput(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    switch (name) {
      case 'email':
        this.validateEmail(value);
        break;
      case 'message':
        this.validateMessage(value);
        break;
      case 'subject':
        this.validateSubject(value);
        break;
      default:
        console.log('undefined case');
    }
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleInputBlur(event) {
    this.validateFormInput(event);
  }

  validateForm() {
    if (
      this.validateSubject(this.state.subject) &&
      this.validateMessage(this.state.message) &&
      this.validateEmail(this.state.email)
    ) {
      return true;
    }
    return false;
  }

  validateEmail(value) {
    var errors = Object.assign({}, this.state.errors);
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
      errors.email = 'Email is invalid';
      this.setState({
        errors: errors
      });
      return false;
    }

    errors.email = '';
    this.setState({
      errors: errors
    });

    return true;
  }

  validateSubject(value) {
    var errors = Object.assign({}, this.state.errors);
    if (value === '') {
      errors.subject = 'Subject is required';
      this.setState({
        errors: errors
      });
      return false;
    }

    errors.subject = '';
    this.setState({
      errors: errors
    });

    return true;
  }

  validateMessage(value) {
    var errors = Object.assign({}, this.state.errors);
    if (value === '') {
      errors.message = 'Message is required';
      this.setState({
        errors: errors
      });
      return false;
    }

    errors.message = '';
    this.setState({
      errors: errors
    });

    return true;
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.validateForm()) {
      alert('This form was submitted without validation errors');
    } else {
      alert('houston, we have some problems with the form');
    }
  }

  render() {
    return (
      <form id="contact-form" onSubmit={this.handleSubmit}>

        <div className="form-group">
          <label htmlFor="subject">Subject *</label>
          <div
            className={ "bg-danger error " + (!this.state.errors.subject ? 'hidden' : '') }>{this.state.errors.subject}</div>
          <input
            className="form-control"
            name="subject"
            type="text"
            value={this.state.subject}
            onChange={this.handleInputChange}
            onBlur={this.handleInputBlur}/>
        </div>

        <div className="form-group">
          <label htmlFor="message">Message *</label>
          <div
            className={ "bg-danger error " + (!this.state.errors.message ? 'hidden' : '') }>{this.state.errors.message}</div>
          <textarea
            className="form-control"
            name="message"
            value={this.state.message}
            rows="5"
            onChange={this.handleInputChange}
            onBlur={this.handleInputBlur}/>
        </div>

        <div className="form-group">
          <label htmlFor="email">Your email *</label>
          <div
            className={ "bg-danger error " + (!this.state.errors.email ? 'hidden' : '') }>{this.state.errors.email}</div>
          <input
            className="form-control"
            name="email"
            type="text"
            value={this.state.email}
            onChange={this.handleInputChange}
            onBlur={this.handleInputBlur}
          />
        </div>

        <input className="btn btn-default" type="submit" value="Submit"/>
      </form>
    );
  }
}

export default ContactForm;
