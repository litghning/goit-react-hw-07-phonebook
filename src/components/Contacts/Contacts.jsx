import React from 'react';
import PropTypes from 'prop-types';
import css from './Contacts.module.css';
import { useSelector, useDispatch } from 'react-redux';

import { deleteContact } from 'redux/contacts';
import { selectFilteredContacts } from 'redux/selectors';
const Contacts = () => {
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  const onDelContact = id => {
  dispatch(deleteContact(id));
  };
  return  (<ul className={css.List}>
    {contacts.map(({ id, name, number }) => (
      <li key={id} className={css.ListItem}>
        <p className={css.Info}>
          {name}: {number}
        </p>
        <button
          type="button"
          onClick={() => onDelContact(id)}
          className={css.Btn}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>)
};
Contacts.prototype = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
export default Contacts;