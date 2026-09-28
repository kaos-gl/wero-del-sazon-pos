import { useTheme } from "../../context/ThemeContext.jsx";

export default function ThemeToggle() {
  const { darkMode, toggleTheme } = useTheme();
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={darkMode ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
      className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-300 bg-white text-xl text-slate-900 hover:bg-slate-100 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700"
    >
      {darkMode ? "☀️" : "🌙"}
    </button>
  );
}
