import React from 'react';
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        // Set the state of the component with a dummy array of contacts.
        this.state = {contacts: [
            {firstName: 'Danilo', lastName: 'Torrisi', phoneNumber: '09219012'},
            {firstName: 'Mario', lastName: 'Rossi', phoneNumber: '51412241'},
            {firstName: 'Giovanni', lastName: 'Coco', phoneNumber: '2512124'}
        ]};
    }

  render() {

    // You always have to return only one top root level component.
    // If you want to return more components, just wrap them into a div.
    return (
        <div className="container">
            <ContactList contacts={this.state.contacts}/>
            <hr/>
            <ContactForm />
        </div>
    );
  }
}
