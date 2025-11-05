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
import { reducerAllWords } from "./allWords/sliceAllWords";
import { reducerRecommendFilters } from "./recommendFilters/sliceRecFilters";
import { reducerAddTasks } from "./tasks/sliceTasks";
import { uaReducer } from "./ui/uiSlice";
import { userStatisticReducer } from "./userAnswers/sliceUserAnswers";

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
    recommendFilters: reducerRecommendFilters,
    ownWords: reducerOwnWord,
    allWords: reducerAllWords,
    tasks: reducerAddTasks,
    ui: uaReducer,
    statistics: userStatisticReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
