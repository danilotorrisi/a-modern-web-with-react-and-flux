import React from 'react';
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';
import ContactStore from './stores/ContactStore';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        // Set the state of the component with a dummy array of contacts.
        this.state = {contacts: ContactStore.getContacts() };

        // Listen to store changes.
        ContactStore.listen(this.onChange.bind(this));
    }

    onChange(newContacts) {

        // On store change, we have the new contacts array and we can update the state.
        this.setState({contacts: newContacts});
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
