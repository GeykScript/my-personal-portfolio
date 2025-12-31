import { useState } from "react";

export default function DarkMode() {
  const [isDark, setIsDark] = useState(false);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <div
      className="col-span-12 md:col-span-1 flex items-center justify-end md:justify-center gap-2 md:py-6 cursor-pointer mb-4 sm:mb-0"
      onClick={toggleDarkMode}
    >
      <span
        className={`material-icons transition-colors duration-300 ${
          isDark ? "text-blue-500" : "text-gray-400"
        }`}
      >
        dark_mode
      </span>
      
      <span
        className={`material-icons transition-colors duration-300 ${
          !isDark ? "text-yellow-400" : "text-gray-400"
        }`}
      >
        light_mode
      </span>
    </div>
  );
}
