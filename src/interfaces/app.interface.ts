export type ThemeType = "light" | "dark";
export type LocalesType = "en" | "th";

export interface IApp {
  themeMode: ThemeType;
  locale: LocalesType;
  currentMenu: "home" | "about" | "contact" | "experience" | "skill";
  openMenu: boolean;
}
