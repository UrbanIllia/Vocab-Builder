import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/sliceAuth";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { categoriesReducer } from "./category/sliceCat";
import { dictionaryFiltersReducer } from "./dictionaryFilters/sliceDicFilters";
import { reducerOwnWord } from "./wordsUser/sliceWordsUser";

const persistConfig = {
  key: "auth",
  version: 1,
  storage,
  whitelist: ["token"],
};

const persistedReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    auth: persistedReducer,
    categories: categoriesReducer,
    dictionaryFilters: dictionaryFiltersReducer,
    ownWords: reducerOwnWord,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
