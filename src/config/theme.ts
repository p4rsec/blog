// Theme configuration
export type Theme = "light" | "dark";

export const THEME_CONFIG = {
  // Default theme
  defaultTheme: "dark" as Theme,

  // Theme storage key
  storageKey: "p4rsec-blog-theme",
} as const;

// Theme utility functions
export const getTheme = (): Theme => {
  if (typeof window === "undefined") {
    return THEME_CONFIG.defaultTheme;
  }

  const stored = localStorage.getItem(THEME_CONFIG.storageKey) as Theme;
  return stored || THEME_CONFIG.defaultTheme;
};

export const setTheme = (theme: Theme): void => {
  if (typeof window === "undefined") {
    return;
  }

  localStorage.setItem(THEME_CONFIG.storageKey, theme);
  document.documentElement.setAttribute("data-theme", theme);
};

export const initializeTheme = (): void => {
  if (typeof window === "undefined") {
    return;
  }

  const theme = getTheme();
  setTheme(theme);
};
