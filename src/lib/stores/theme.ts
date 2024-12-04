import { browser } from "$app/environment";
import { writable } from "svelte/store";

type Theme = "light" | "dark";

const userTheme = browser && localStorage.getItem("color-scheme");

// this was only used because of TS
const checkUserTheme = userTheme === "light" || userTheme === "dark" ? userTheme : "dark";

export const theme = writable<Theme>(checkUserTheme);

export function toggleTheme() {
  theme.update((currentTheme) => {
    const newTheme = currentTheme === "light" ? "dark" : "light";

    document.documentElement.setAttribute("color-scheme", newTheme);

    localStorage.setItem("color-scheme", newTheme);

    return newTheme;
  });
}

// can now be used anywhere in the app to toggle the theme
export function setTheme(newTheme: Theme) {
  theme.set(newTheme);
}
