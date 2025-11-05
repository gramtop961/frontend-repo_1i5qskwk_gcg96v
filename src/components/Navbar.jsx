import { useEffect, useState } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const stored = localStorage.getItem('theme');
    const initial = stored ? stored === 'dark' : prefersDark;
    setDark(initial);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [dark]);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#projects', label: 'Projects' },
    { href: '#products', label: 'Products' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-black/40">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <a href="#home" className="flex items-center gap-3">
          <span className="inline-block h-8 w-8 rounded-xl bg-gradient-to-br from-rose-500 to-amber-400" />
          <span className="text-lg font-semibold text-gray-900 dark:text-white">S V IT Hub</span>
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-gray-700 hover:text-rose-600 dark:text-gray-300 dark:hover:text-rose-400 transition-colors"
            >
              {item.label}
            </a>
          ))}
          <button
            aria-label="Toggle theme"
            onClick={() => setDark((d) => !d)}
            className="rounded-full p-2 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-white/5 transition"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
        <div className="flex items-center gap-2 md:hidden">
          <button
            aria-label="Toggle theme"
            onClick={() => setDark((d) => !d)}
            className="rounded-full p-2 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-white/5 transition"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="rounded-full p-2 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-white/5 transition"
          >
            <Menu size={20} />
          </button>
        </div>
      </nav>
      {open && (
        <div className="fixed inset-0 z-50 bg-white dark:bg-black p-6 md:hidden">
          <div className="flex items-center justify-between">
            <a href="#home" className="flex items-center gap-3" onClick={() => setOpen(false)}>
              <span className="inline-block h-8 w-8 rounded-xl bg-gradient-to-br from-rose-500 to-amber-400" />
              <span className="text-lg font-semibold text-gray-900 dark:text-white">S V IT Hub</span>
            </a>
            <button aria-label="Close menu" onClick={() => setOpen(false)} className="p-2">
              <X />
            </button>
          </div>
          <div className="mt-8 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-lg font-medium text-gray-800 hover:text-rose-600 dark:text-gray-200 dark:hover:text-rose-400"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
