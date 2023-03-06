import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/features/store";
import { IApp } from "@/features/interfaces";

// Define the initial state using that type
const initialState: IApp = {
  themeMode: "light",
  locale: "en",
  currentMenu: "home",
};

export const counterSlice = createSlice({
  name: "appTheme",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    toggleThemeMode: (state) => {
      if (state.themeMode === "dark") state.themeMode = "light";
      else state.themeMode = "dark";
    },
    toggleLocale: (state) => {
      if (state.locale === "en") state.locale = "th";
      else state.locale = "en";
    },
  },
});

export const { toggleThemeMode, toggleLocale } = counterSlice.actions;

export default counterSlice.reducer;
