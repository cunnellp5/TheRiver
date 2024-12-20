import { browser } from "$app/environment";
import { writable } from "svelte/store";

const THEME_LIGHT = "light";
const THEME_DARK = "dark";

type Theme = typeof THEME_LIGHT | typeof THEME_DARK;

const userTheme = browser && localStorage.getItem("color-scheme");

// this was only used because of TS
const checkUserTheme = userTheme === THEME_LIGHT || userTheme === THEME_DARK ? userTheme : THEME_DARK;

export const theme = writable<Theme>(checkUserTheme);

export function toggleTheme() {
  theme.update((currentTheme) => {
    const newTheme = currentTheme === THEME_LIGHT ? THEME_DARK : THEME_LIGHT;

    document.documentElement.setAttribute("color-scheme", newTheme);

    localStorage.setItem("color-scheme", newTheme);

    return newTheme;
  });
}

// can now be used anywhere in the app to toggle the theme
export function setTheme(newTheme: Theme) {
  theme.set(newTheme);
}
