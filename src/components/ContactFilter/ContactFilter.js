import React from 'react';
const ContactFilter = ({ value, onChange }) => (
  <label>
    Filter
    <input type="text" value={value} onChange={onChange}></input>
  </label>
);
export default ContactFilter;
