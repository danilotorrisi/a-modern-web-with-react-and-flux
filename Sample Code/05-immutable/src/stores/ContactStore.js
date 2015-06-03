import Reflux from 'reflux';
import Actions from '../actions/ContactActions';
import Immutable from 'immutable';

// The contact store is built using the Reflux.createStore method.
const ContactStore = Reflux.createStore({

	// Called to initialize the store.
	// We will prepare the contacts store with some dummy data.
	init() {

		// Set the contacts array. This time we get the JS array and convert it to an Immutable.List.
		this.contacts = Immutable.fromJS([
            {firstName: 'Danilo', lastName: 'Torrisi', phoneNumber: '09219012'},
            {firstName: 'Mario', lastName: 'Rossi', phoneNumber: '51412241'},
            {firstName: 'Giovanni', lastName: 'Coco', phoneNumber: '2512124'}
		]);

		// The ContactStore wants to listen to contacts actions.
		this.listenToMany(Actions);
	},

	// This function will be called when a new addContact Action has been dispatched.
	onAddContact(newContact) {

		// Push a new contact to the contacts array. This time, immutable returns a new array so
		// we have to get the new value and replace it.
		this.contacts = this.contacts.push(newContact);

		// And emit a change event.
		this.trigger(this.getContacts());
	},

	// This function will be called when a new removeContact Action has been dispatched.
	onRemoveContact(index) {

		// Remove one element at the given index
		this.contacts = this.contacts.splice(index, 1);

		// And emit a change event.
		this.trigger(this.getContacts());
	},

	onUpdateContact(index, newValues) {

		// Update it.
		this.contacts = this.contacts.update(index, (prev) => { return prev.merge(newValues); } );

		// And emit a change event.
		this.trigger(this.getContacts());
	},

	// A simple function to retrieve the contacts.
	getContacts() {
		return this.contacts.toJS();
	}

});

export default ContactStore;
