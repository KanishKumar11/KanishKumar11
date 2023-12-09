import React, { useEffect, useState } from "react";

const useThemeSwitcher = () => {
  const preferDarkQuery = "(prefers-color-scheme: dark)";
  const [mode, setMode] = useState("");
  const handleChange = () => {
    const userPref = window.localStorage.getItem("theme");

    const check = userPref || mediaQuery.matches ? "dark" : "light";
    setMode(check);
    document.documentElement.classList.toggle("dark", check === "dark");
    window.localStorage.setItem("theme", check);
  };
  useEffect(() => {
    const mediaQuery = window.matchMedia(preferDarkQuery);
    const userPref = window.localStorage.getItem("theme");

    handleChange();
    mediaQuery.addEventListener("change", handleChange);
    if (userPref) {
      setMode(userPref);
      document.documentElement.classList.toggle("dark", userPref === "dark");
    }

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (mode === "dark") {
      window.localStorage.setItem("theme", "dark");
    }
    if (mode === "light") {
      window.localStorage.setItem("theme", "light");
    }
    document.documentElement.classList.toggle("dark", mode === "dark");
  }, [mode]);

  return [mode, setMode];
};

export default useThemeSwitcher;
