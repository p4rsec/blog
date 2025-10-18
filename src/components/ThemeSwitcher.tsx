import React, { useState, useEffect } from "react";
import {
  getTheme,
  setTheme,
  initializeTheme,
  type Theme,
} from "../config/theme";

export const ThemeSwitcher: React.FC = () => {
  const [currentTheme, setCurrentTheme] = useState<Theme>("dark");
  const [isThemeReady, setIsThemeReady] = useState(false);

  useEffect(() => {
    // Initialize theme on client side
    initializeTheme();
    const theme = getTheme();
    setCurrentTheme(theme);

    // Mark theme as ready after a brief moment to ensure DOM is updated
    const timer = setTimeout(() => {
      setIsThemeReady(true);
    }, 10);

    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    const newTheme: Theme = currentTheme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    setCurrentTheme(newTheme);
  };

  // Don't render anything until theme is determined, but reserve space to prevent layout shift
  if (!isThemeReady) {
    return (
      <div className="w-12 h-6" aria-hidden="true">
        {/* Reserved space to prevent layout shift */}
      </div>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="theme-switcher relative w-12 h-6 rounded-full transition-all duration-200 focus:outline-none flex items-center border"
      style={
        {
          borderColor: "var(--switcher-border)",
          "--hover-border": "var(--switcher-hover-border)",
          "--focus-ring": "var(--switcher-focus-ring)",
        } as React.CSSProperties
      }
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "var(--switcher-hover-border)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "var(--switcher-border)";
      }}
      onFocus={(e) => {
        e.currentTarget.style.borderColor = "var(--switcher-hover-border)";
      }}
      aria-label={`Switch to ${
        currentTheme === "dark" ? "light" : "dark"
      } theme`}
      title={`Switch to ${currentTheme === "dark" ? "light" : "dark"} theme`}
    >
      <div
        className="w-4 h-4 rounded-full shadow-md transition-all duration-200 flex items-center justify-center border"
        style={{
          backgroundColor: "var(--switcher-icon-bg)",
          borderColor: "var(--switcher-icon-border)",
          marginLeft: currentTheme === "dark" ? "1.75rem" : "0.25rem",
        }}
      >
        <span className="text-xs leading-none">
          {currentTheme === "dark" ? "🌙" : "☀️"}
        </span>
      </div>
    </button>
  );
};
