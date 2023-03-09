import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { IApp, ThemeType, MenuType } from "@/interfaces";

// Define the initial state using that type
const initialState: IApp = {
  themeMode: "light",
  locale: Cookies.get("LOCALE") ? (Cookies.get("LOCALE") as string) : "en",
  currentMenu: Cookies.get("CURRENT_MENU")
    ? (Cookies.get("CURRENT_MENU") as string)
    : "home",
  openMenu: Cookies.get("OPEN_MOBILE_MENU")
    ? Cookies.get("OPEN_MOBILE_MENU") === "true"
      ? true
      : false
    : false,
};
// const initialState: IApp = {
//   themeMode: "light",
//   locale: "en",
//   currentMenu: "home",
//   openMenu: false,
// };

export const counterSlice = createSlice({
  name: "appTheme",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setThemeMode: (state, action: PayloadAction<ThemeType>) => {
      state.themeMode = action.payload;
    },
    toggleLocale: (state) => {
      if (state.locale === "en") {
        state.locale = "th";
        Cookies.set("LOCALE", "th");
      } else {
        state.locale = "en";
        Cookies.set("LOCALE", "en");
      }
    },
    updateAvtiveMenu: (state, action: PayloadAction<MenuType>) => {
      state.currentMenu = action.payload;
      state.openMenu = false;

      Cookies.set("CURRENT_MENU", action.payload);
      Cookies.set("OPEN_MOBILE_MENU", "false");
    },
    toggleOpenMobileMenu: (state) => {
      state.openMenu = !state.openMenu;
      Cookies.set(
        "OPEN_MOBILE_MENU",
        !state.openMenu === true ? "true" : "false"
      );
    },
    openMobileMenu: (state) => {
      state.openMenu = true;
      Cookies.set("OPEN_MOBILE_MENU", "true");
    },
    closeMobileMenu: (state) => {
      state.openMenu = false;
      Cookies.set("OPEN_MOBILE_MENU", "false");
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
