import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { AppState } from "@/features/store";
import { IApp, ThemeType } from "src/interfaces";

// Define the initial state using that type
const initialState: IApp = {
  themeMode: "light",
  locale: "en",
  currentMenu: "home",
  openMenu: false,
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
    setThemeMode: (state, action: PayloadAction<ThemeType>) => {
      state.themeMode = action.payload;
    },
    toggleLocale: (state) => {
      if (state.locale === "en") state.locale = "th";
      else state.locale = "en";
    },
    toggleOpenMobileMenu: (state) => {
      state.openMenu = !state.openMenu;
    },
  },
});

export const {
  setThemeMode,
  toggleThemeMode,
  toggleLocale,
  toggleOpenMobileMenu,
} = counterSlice.actions;

export default counterSlice.reducer;
