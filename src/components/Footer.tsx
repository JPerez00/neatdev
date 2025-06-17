import Link from 'next/link'

export function Footer() {
  return (
    <footer className='max-w-lg mx-auto'>
      <div className="flex flex-col items-center px-4 py-6 md:py-8 sm:flex-row-reverse sm:justify-between border-t border-stone-200 dark:border-stone-800">
        <p className="text-stone-600 dark:text-stone-300 text-xs sm:mt-0">
          Developed by <Link href="https://www.jorge-perez.dev/" 
          className="hover:text-stone-700 hover:dark:text-stone-200 hover:underline" target="_blank" rel="noopener noreferrer">
            Jorge Perez</Link>
        </p>
        <div className="mt-4 md:mt-0 flex gap-x-4 font-bold text-stone-600 dark:text-stone-300 text-xs">
          NeatDev
        </div>
      </div>
    </footer>
  )
}