import {
  configureStore,
  ThunkAction,
  Action,
  combineReducers,
} from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
// import { Action, combineReducers } from "redux";
// import storage from "redux-persist/lib/storage";
// import { persistReducer, persistStore } from "redux-persist";

import AppThemeReducer from "@/features/store/reducers/app-theme";

// const persistConfig = {
//   key: "root",
//   storage,
// };

const rootReducers = combineReducers({
  appThemes: AppThemeReducer,
});

// const persistedReducer = persistReducer(persistConfig, rootReducers);

const makeStore = () =>
  configureStore({
    reducer: rootReducers,
    devTools: true,
  });

// export const persistedStore = () => persistStore(makeStore());

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

export const wrapper = createWrapper<AppStore>(makeStore);
