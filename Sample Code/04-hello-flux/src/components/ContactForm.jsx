import React from 'react';
import Actions from '../actions/ContactActions';

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);

    // Alwyas set an empty state otherwise this.state will be undefined.
    this.state = {firstName: '', lastName: '', phoneNumber: ''};
  }

  onChange(event) {

    // event.target will be the input that triggered the event. We can
    // obtaint he input name and the input current value.
    // To update the input with the new value we have to set the new state.
    const name = event.target.name;
    const value = event.target.value;

    // setState takes a dictionary with the new values to set. In this case
    // the name is the field name ( firstName, lastName or phoneNumber )
    // and value will contain the new value. After the new state is set,
    // React will render the component again and then update the DOM.
    this.setState({ [name]: value});
  }

  onSubmit(event) {
    event.preventDefault();

    // Add the contact.
    Actions.addContact(this.state);

    // And reset the form.
    this.setState({firstName: '', lastName: '', phoneNumber: ''});
  }

  render() {

    // Render the boostrap form, basically three input and one submit button.
    return (
        <div>
            <form className="form-inline row" onSubmit={this.onSubmit.bind(this)}>
              <div className="form-group col-xs-2">
                <label className="sr-only">First Name</label>
                <input type="text" name="firstName" className="form-control" placeholder="First Name" value={this.state.firstName} onChange={this.onChange.bind(this)} />
              </div>
              <div className="form-group col-xs-2">
                <label className="sr-only">Last Name</label>
                <input type="text" name="lastName" className="form-control" placeholder="Last Name" value={this.state.lastName} onChange={this.onChange.bind(this)} />
              </div>
              <div className="form-group col-xs-2">
                <label className="sr-only">Phone Name</label>
                <input type="number" name="phoneNumber" className="form-control" placeholder="Phone Number" value={this.state.phoneNumber} onChange={this.onChange.bind(this)} />
              </div>
              <div className="col-xs-6">
                <button type="submit" className="btn btn-primary pull-right">Add Contact</button>
              </div>
            </form>
        </div>
    );
  }
}
