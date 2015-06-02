import React from 'react';
import ContactList from './components/ContactList';

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

    // Render the contact list component passing the contacts as a prop.
    return <ContactList contacts={this.state.contacts}/>;
  }
}
