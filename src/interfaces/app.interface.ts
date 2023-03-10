export type ThemeType = "light" | "dark";
export type LocalesType = "en" | "th";
export type MenuType =
  | "home"
  | "about"
  | "contact"
  | "experience"
  | "portfolio";

export interface IApp {
  themeMode: ThemeType;
  locale: string;
  currentMenu: string;
  openMenu: boolean;
}
