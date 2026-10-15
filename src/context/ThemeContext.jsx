"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

/**
 * ThemeContext
 * Manages global Dark & Light mode state triggered by the PullCordSwitch component.
 * Defaults to "dark" mode to match the primary neon showcase aesthetic.
 */
const ThemeContext = createContext({
  theme: "dark",
  toggleTheme: () => {},
});

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("dark");
  const [mounted, setMounted] = useState(false);

  // Hydrate theme from localStorage on initial client mount
  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("tanvir-portfolio-theme") || "dark";
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  // Function called when user pulls the cord switch
  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("tanvir-portfolio-theme", nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, mounted }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);