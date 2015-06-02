import React from 'react';

export default class ContactList extends React.Component {
  render() {

    // First, map the contacts array to generate the table rows.
    const contacts = this.props.contacts.map((contact) => {
        return (
            <tr>
                <td>{contact.firstName}</td>
                <td>{contact.lastName}</td>
                <td>{contact.phoneNumber}</td>
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
                </tr>
            </thead>
            <tbody>
                {contacts}
            </tbody>
        </table>
    );
  }
}
