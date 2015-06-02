import React from 'react';
import Actions from '../actions/ContactActions';

export default class ContactList extends React.Component {

  onRemove(index) {

    // Call the remove contact action
    Actions.removeContact(index);
  }

  render() {

    // First, map the contacts array to generate the table rows.
    const contacts = this.props.contacts.map((contact, index) => {
        return (
            <tr key={index}>
                <td>{contact.firstName}</td>
                <td>{contact.lastName}</td>
                <td>{contact.phoneNumber}</td>
                <td><a href="#" onClick={this.onRemove.bind(this, index)}><i className='fa fa-trash-o' /></a></td>
            </tr>
        );
    });

    // Then return the table, we use the {syntax} to print
    // the contacts variable inside the JSX table.
    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Phone Number</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {contacts}
            </tbody>
        </table>
    );
  }
}
