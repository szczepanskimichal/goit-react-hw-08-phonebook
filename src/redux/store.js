import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';

const savedContacts = localStorage.getItem('contacts');

const preloadedState = savedContacts
  ? { contacts: JSON.parse(savedContacts) }
  : {};

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
  preloadedState,
});

export default store;

store.subscribe(() => {
  localStorage.setItem('contacts', JSON.stringify(store.getState().contacts));
});
