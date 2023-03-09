import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IApp, ThemeType, MenuType } from "src/interfaces";

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
    updateAvtiveMenu: (state, action: PayloadAction<MenuType>) => {
      state.currentMenu = action.payload;
      state.openMenu = false;
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
    openMobileMenu: (state) => {
      state.openMenu = true;
    },
    closeMobileMenu: (state) => {
      state.openMenu = false;
    },
  },
});

export const {
  setThemeMode,
  updateAvtiveMenu,
  toggleLocale,
  toggleOpenMobileMenu,
  openMobileMenu,
  closeMobileMenu,
} = counterSlice.actions;

export default counterSlice.reducer;
