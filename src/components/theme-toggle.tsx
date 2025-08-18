"use client";
import { useEffect, useState } from "react";

function SunIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden {...props}>
      <path fill="currentColor" d="M12 4a1 1 0 0 1 1-1h0a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0zm0 15a1 1 0 0 1 1 1h0a1 1 0 0 1-1 1 1 1 0 0 1-1-1v-1a1 1 0 1 1 2 0zM4 11a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1zm14 0a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2h-1a1 1 0 0 1-1-1zM6.05 6.05a1 1 0 0 1 1.41 0l.71.71a1 1 0 1 1-1.41 1.41l-.71-.71a1 1 0 0 1 0-1.41zm9.78 9.78a1 1 0 0 1 1.41 0l.71.71a1 1 0 0 1-1.41 1.41l-.71-.71a1 1 0 0 1 0-1.41zM6.05 17.95a1 1 0 0 1 1.41-1.41l.71.71a1 1 0 1 1-1.41 1.41l-.71-.71zm9.78-9.78a1 1 0 0 1 1.41-1.41l.71.71a1 1 0 1 1-1.41 1.41l-.71-.71zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10z"/>
    </svg>
  );
}
function MoonIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden {...props}>
      <path fill="currentColor" d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 1 0 9.79 9.79z"/>
    </svg>
  );
}

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setMounted(true);
    const root = document.documentElement;
    const saved = localStorage.getItem("theme");
    const prefers = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (saved === "dark" || (!saved && prefers)) {
      root.classList.add("dark");
      setIsDark(true);
    }
  }, []);

  if (!mounted) return null;

  function toggle() {
    const root = document.documentElement;
    const next = !isDark;
    setIsDark(next);
    root.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  }

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-300 bg-white/80 text-zinc-700 shadow-sm hover:bg-white hover:shadow cursor-pointer transition
                 dark:border-zinc-700 dark:bg-zinc-900/70 dark:text-zinc-200"
    >
      {isDark ? <MoonIcon /> : <SunIcon />}
    </button>
  );
}
