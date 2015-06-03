import React from 'react';
import Actions from '../actions/ContactActions';
import cx from 'classnames';

export default class ContactList extends React.Component {

  onRemove(index) {

    // Call the remove contact action
    Actions.removeContact(index);
  }

  onEdit(index) {

    // What to do here? Are we changing the data or the interface? Just the UI uh?
    if (typeof this.props.onEdit !== 'undefined') {

        // So if the onEdit function is given, call it passing the index.
        this.props.onEdit(index);
    }
  }

  render() {

    // First, map the contacts array to generate the table rows.
    const contacts = this.props.contacts.map((contact, index) => {

        // If the editing row is the current one, highlight it.
        const rowClass = cx({
            'warning': this.props.editingRow === index
        });

        return (
            <tr key={index} className={rowClass}>
                <td>{contact.firstName}</td>
                <td>{contact.lastName}</td>
                <td>{contact.phoneNumber}</td>
                <td>
                    <a href="#" onClick={this.onEdit.bind(this, index)}><i className='fa fa-pencil-square-o' /></a>&nbsp;
                    <a href="#" onClick={this.onRemove.bind(this, index)}><i className='fa fa-trash-o' /></a>
                </td>
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
