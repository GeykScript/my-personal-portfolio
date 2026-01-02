import { useEffect, useState } from "react";

export default function DarkMode() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    return (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [isDark]);

  return (
    <div className="col-span-12 md:col-span-1 flex items-center justify-end md:justify-center gap-2 md:py-6">
      <button
        type="button"
        onClick={() => setIsDark(true)}
        className={`material-icons transition-colors duration-300 cursor-pointer hover:text-sky-400 ${
          isDark ? "text-sky-500" : "text-gray-400"
        }`}>
        dark_mode
      </button>

      <button
        type="button"
        onClick={() => setIsDark(false)}
        className={`material-icons transition-colors duration-300 cursor-pointer hover:text-yellow-300 ${
          !isDark ? "text-yellow-400" : "text-gray-400"
        }`}>
        light_mode
      </button>
    </div>
  );
}
