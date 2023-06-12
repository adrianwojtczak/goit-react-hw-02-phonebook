import React from 'react';
import PropTypes from 'prop-types';

export const ContactItem = ({ contact, onDeleteContact }) => (
  <li>
    {contact.name}: {contact.number}
    <button type="button" onClick={() => onDeleteContact(contact.id)}>
      Delete
    </button>
  </li>
);

ContactItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
