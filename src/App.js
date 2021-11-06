import React, { Component } from "react";
import shortid from "shortid";

import contactList from "./phonelist.json";

import ContactList from "./components/ContactList";
import ContactForm from "./components/ContactForm";
import ContactFilter from "./components/ContactFilter";

class App extends Component {
  state = {
    contacts: contactList,
    filter: "",
  };

  addContact = (name, number) => {
    if (this.isInContacts(name)) {
      alert(`${name} is already in contacts`);
      return;
    }
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };

    this.setState((prevState) => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  isInContacts = (name) => {
    name = name.toLowerCase();
    return (
      this.state.contacts.filter((contact) =>
        contact.name.toLowerCase().includes(name)
      ).length > 0
    );
  };

  deleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId
      ),
    }));
  };

  //фильтр,принятие ивента
  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };
  // метод фильтрации массива
  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <ContactFilter onChange={this.changeFilter} value={filter} />
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
export default App;
