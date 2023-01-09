import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import contactsData from '../contactData/contacts.json'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['items'],
};

export const contactSlice = createSlice({
  name: 'contacts',
  initialState:{
    items: contactsData,
    filter: '',
  },
  reducers: {
    addItems: (state, {payload}) => {
      state.items.push(payload);
    },
    deleteItems: (state, {payload}) => {
      state.items = state.items.filter(item => item.id !== payload);
    },
    updateFilter: (state, {payload}) => {state.filter = payload},
  },
});

export const {addItems, deleteItems, updateFilter} = contactSlice.actions;

export const persistedReducer = persistReducer(persistConfig, contactSlice.reducer);