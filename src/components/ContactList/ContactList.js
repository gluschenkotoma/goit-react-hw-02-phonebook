import React from "react";
import s from "./ContactList.module.scss";

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul className={s.list}>
    {contacts.map(({ id, name, phoneNumber }) => (
      <li key={id} className={s.list__item}>
        <span className={s.list__text}>{name}</span>
        <span className={s.list__text}>{phoneNumber}</span>
        <button type="button" onClick={() => onDeleteContact(id)}>
          Delete
        </button>
      </li>
    ))}
  </ul>
);
export default ContactList;
