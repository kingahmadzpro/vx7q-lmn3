import React from "react";
import { useTheme } from "../context/theme-context";
import { BsSun, BsMoon } from "react-icons/bs";

const ThemeSwitch: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="theme-switch-container relative">
      <input
        className="tgl tgl-style"
        id="toggle-theme"
        type="checkbox"
        onChange={toggleTheme}
        checked={theme === "dark"}
      />
      <label className={`tgl-btn ${theme}`} htmlFor="toggle-theme">
        <span className={`icon-wrapper ${theme}`}>
          {theme === "dark" ? (
            <BsMoon className="text-white text-base" />
          ) : (
            <BsSun className="text-black text-base" />
          )}
        </span>
      </label>
    </div>
  );
};

export default ThemeSwitch;