import { Link, Outlet } from "react-router-dom";
import ThemeToggle from "./ThemeToggle.jsx";

export default function Layout() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-slate-100">
      <header className="flex items-center justify-between border-b border-slate-200 px-4 py-2 dark:border-slate-700">
        <Link to="/" className="text-lg font-bold">
          🍽️ El Wero del Sazón
        </Link>
        <ThemeToggle />
      </header>
      <main className="p-4">
        <Outlet />
      </main>
    </div>
  );
}
