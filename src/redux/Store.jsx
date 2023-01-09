import { configureStore } from "@reduxjs/toolkit";
import { persistStore, FLUSH, REHYDRATE,PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import { persistedReducer } from "./Actions";

export const store = configureStore({
  reducer: {
    contacts: persistedReducer,
  },
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);