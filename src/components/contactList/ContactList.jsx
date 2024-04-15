import Contact from '../contact/Contact';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';

const ContactList = () => {
  const getContacts = state => state.contacts.items;
  const getFilters = state => state.filters.name;
  const selectNameFilter = createSelector(
    [getContacts, getFilters],
    (contacts, filters) => {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filters.toLowerCase())
      );
    }
  );
  const visibleContacts = useSelector(selectNameFilter);

  return (
    <ul className={css.list}>
      {visibleContacts.map(contact => {
        return (
          <li key={contact.id} className={css.item}>
            <Contact {...contact} />
          </li>
        );
      })}
    </ul>
  );
};
export default ContactList;
