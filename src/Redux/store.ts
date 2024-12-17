import { configureStore, combineReducers } from "@reduxjs/toolkit";
import BaseApi from "./baseApi/BaseApi";
import Authslice from "./feature/auth/authSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import CardSlice from "./feature/Cart/CartSlice";
import compareSlice from "./feature/CompareSlice/CompareSlice";

// Persist configurations for auth and cart
const authPersistConfig = {
  key: "auth",
  storage,
};

const cartPersistConfig = {
  key: "cart",
  storage,
};
const ComparePersistConfig = {
  key: "compare",
  storage,
};

// Combine reducers
const rootReducer = combineReducers({
  [BaseApi.reducerPath]: BaseApi.reducer,
  auth: persistReducer(authPersistConfig, Authslice.reducer), // Persisted
  cart: persistReducer(cartPersistConfig, CardSlice.reducer), // Persisted
  compare: persistReducer(ComparePersistConfig, compareSlice.reducer), // Persisted
});

// Configure the store
const Store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare().concat(BaseApi.middleware),
});

// Create a persistor
const Persistor = persistStore(Store);

export const persistor = Persistor;
export default Store;
