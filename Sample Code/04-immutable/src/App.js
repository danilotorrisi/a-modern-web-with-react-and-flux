import React from 'react';
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';
import ContactStore from './stores/ContactStore';
import Actions from './actions/ContactActions';

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

    onContactEdit(index) {

        // We have to update the UI in order to let the user edit this contact.
        this.setState({editingIndex: index});
    }

    onSubmit(newValues) {

        // If editing
        if (typeof this.state.editingIndex !== 'undefined') {

            // Call the update contact action.
            Actions.updateContact(this.state.editingIndex, newValues);

            // Reset the editing index.
            this.setState({editingIndex: undefined});

        } else {

            // Add the contact.
            Actions.addContact(newValues);
        }
    }

    getEditingContact() {
        return (typeof this.state.editingIndex !== 'undefined' ? this.state.contacts[this.state.editingIndex] : undefined);
    }

    render() {


        // You always have to return only one top root level component.
        // If you want to return more components, just wrap them into a div.
        return (
            <div className="container">
                <ContactList contacts={this.state.contacts} editingRow={this.state.editingIndex} onEdit={this.onContactEdit.bind(this)}/>
                <hr/>
                <ContactForm values={this.getEditingContact()} onSubmit={this.onSubmit.bind(this)}/>
            </div>
            );
    }
}
