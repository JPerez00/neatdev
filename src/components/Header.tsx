'use client'

import { ThemeToggle } from './ThemeToggle';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="border-b border-stone-200/60 dark:border-stone-800/60 bg-white/80 dark:bg-stone-950/80 backdrop-blur-xl sticky top-0 z-50">
      <div className="max-w-lg mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Name */}
          <Link href="/" className="font-bold text-base text-stone-900 dark:text-stone-100 tracking-tight hover:text-stone-700 dark:hover:text-stone-200 transition-colors">
            NeatDev
          </Link>
          <div className="flex items-center gap-4 ">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
