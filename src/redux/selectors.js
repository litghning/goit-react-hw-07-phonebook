import { createSelector } from "@reduxjs/toolkit";
export const selectContacts = state => state.contacts.items;
export const selectFilter = state => state.filter;
export const selectIsloading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, searchFilter) => {
  const fiterContacts = searchFilter
    ? contacts.filter(contact =>
        contact.name.toLowerCase().includes(searchFilter)
      )
    : contacts;

  return fiterContacts;
}
);