import { configureStore, ThunkAction } from "@reduxjs/toolkit";
import { Action } from "redux";
import { createWrapper } from "next-redux-wrapper";
import AppThemeReducer from "@/features/store/reducers/app-theme";

// Create store
const makeStore = () =>
  configureStore({
    reducer: {
      appThemes: AppThemeReducer,
    },
    devTools: true,
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
// export type AppDispatch = ReturnType<AppStore["dispatch"]>;
export type AppDispatch = AppStore["dispatch"];

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

export const wrapper = createWrapper<AppStore>(makeStore);
