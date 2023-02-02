import { createSlice } from '@reduxjs/toolkit';

const contacts = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    addContact(state, action) {
      const alertContacts = state.filter(contact =>
        contact.name.toLowerCase().includes(action.payload.name.toLowerCase())
      );
      alertContacts.length
        ? alert(`${action.payload.name} is already in contacts`)
        : state.push(action.payload);
    },
    deleteContact(state, action) {
      const index = state.findIndex(task => task.id === action.payload);
      state.splice(index, 1);
    },
  },
});

// Експортуємо генератори екшенів та редюсер
export const { addContact, deleteContact } = contacts.actions;
export const contactsReducer = contacts.reducer;