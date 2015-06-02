import Reflux from 'reflux';
import Actions from '../actions/ContactActions';

// The contact store is built using the Reflux.createStore method.
const ContactStore = Reflux.createStore({

	// Called to initialize the store.
	// We will prepare the contacts store with some dummy data.
	init() {

		// Set the contacts array.
		this.contacts = [
            {firstName: 'Danilo', lastName: 'Torrisi', phoneNumber: '09219012'},
            {firstName: 'Mario', lastName: 'Rossi', phoneNumber: '51412241'},
            {firstName: 'Giovanni', lastName: 'Coco', phoneNumber: '2512124'}
		];

		// The ContactStore wants to listen to contacts actions.
		this.listenTo(Actions.addContact, this.onAddContact);
		this.listenTo(Actions.removeContact, this.onRemoveContact);
	},

	// This function will be called when a new addContact Action has been dispatched.
	onAddContact(newContact) {

		// Push a new contact to the contacts array.
		this.contacts.push(newContact);

		// And emit a change event.
		this.trigger(this.contacts);
	},

	// This function will be called when a new removeContact Action has been dispatched.
	onRemoveContact(index) {

		// Remove one element at the given index
		this.contacts.splice(index, 1);

		// And emit a change event.
		this.trigger(this.contacts);
	},

	// A simple function to retrieve the contacts.
	getContacts() {
		return this.contacts;
	}

});

export default ContactStore;
