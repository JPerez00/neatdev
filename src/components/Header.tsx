'use client'

import { ThemeToggle } from './ThemeToggle';
import Link from 'next/link';
import { Button } from './ui/button';
import { NavWritter } from './NavWritter';

function GitHubIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.475 2 2 6.588 2 12.253c0 4.537 2.862 8.369 6.838 9.727.5.09.687-.218.687-.487 0-.243-.013-1.05-.013-1.91C7 20.059 6.35 18.957 6.15 18.38c-.113-.295-.6-1.205-1.025-1.448-.35-.192-.85-.667-.013-.68.788-.012 1.35.744 1.538 1.051.9 1.551 2.338 1.116 2.912.846.088-.666.35-1.115.638-1.371-2.225-.256-4.55-1.14-4.55-5.062 0-1.115.387-2.038 1.025-2.756-.1-.256-.45-1.307.1-2.717 0 0 .837-.269 2.75 1.051.8-.23 1.65-.346 2.5-.346.85 0 1.7.115 2.5.346 1.912-1.333 2.75-1.05 2.75-1.05.55 1.409.2 2.46.1 2.716.637.718 1.025 1.628 1.025 2.756 0 3.934-2.337 4.806-4.562 5.062.362.32.675.936.675 1.897 0 1.371-.013 2.473-.013 2.82 0 .268.188.589.688.486a10.039 10.039 0 0 0 4.932-3.74A10.447 10.447 0 0 0 22 12.253C22 6.588 17.525 2 12 2Z"
      />
    </svg>
  )
}

export default function Header() {
  return (
    <header className="border-b border-stone-200/60 dark:border-stone-800/60 bg-white/80 dark:bg-stone-950/80 backdrop-blur-xl sticky top-0 z-50">
      <div className="max-w-lg mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Typewritter effect */}
          <NavWritter />
          <div className="flex items-center gap-3 ">
            <Link href='https://github.com/JPerez00/neatdev' target="_blank" rel="noopener noreferrer" className="flex-1">
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full text-xs h-8 rounded-xl bg-stone-100 dark:bg-stone-800 border border-stone-200/60 dark:border-stone-700 cursor-pointer flex items-center justify-center gap-1"
              >
                <GitHubIcon className='h-5 w-5 fill-stone-600 dark:fill-stone-100'/>
                Star on GitHub
              </Button>
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
