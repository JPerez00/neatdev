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
        <div className="flex gap-x-4">
          <Link href="#" className="group" aria-label="X Profile">
            <svg
              className="h-5 w-5 fill-stone-600 group-hover:fill-stone-700 dark:fill-stone-400 dark:group-hover:fill-stone-300"
              aria-hidden="true"
              viewBox="0 0 24 24"
            >
              <path d="M13.3174 10.7749L19.1457 4H17.7646L12.7039 9.88256L8.66193 4H4L10.1122 12.8955L4 20H5.38119L10.7254 13.7878L14.994 20H19.656L13.3171 10.7749H13.3174ZM11.4257 12.9738L10.8064 12.0881L5.87886 5.03974H8.00029L11.9769 10.728L12.5962 11.6137L17.7652 19.0075H15.6438L11.4257 12.9742V12.9738Z" />
            </svg>
          </Link>
          <Link href="#" className="group" aria-label="GitHub Profile">
            <svg
              className="h-5 w-5 fill-stone-600 group-hover:fill-stone-700 dark:fill-stone-400 dark:group-hover:fill-stone-300"
              aria-hidden="true"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
            </svg>
          </Link>
          <Link href="#" className="group" aria-label="LinkedIn Profile">
            <svg
              className="mt-0.5 ml-0.5 h-4 w-4 fill-stone-600 group-hover:fill-stone-700 dark:fill-stone-400 dark:group-hover:fill-stone-300"
              aria-hidden="true"
              viewBox="0 0 16 16"
            >
              <path d="M14.82 0H1.18A1.169 1.169 0 000 1.154v13.694A1.168 1.168 0 001.18 16h13.64A1.17 1.17 0 0016 14.845V1.15A1.171 1.171 0 0014.82 0zM4.744 13.64H2.369V5.996h2.375v7.644zm-1.18-8.684a1.377 1.377 0 11.52-.106 1.377 1.377 0 01-.527.103l.007.003zm10.075 8.683h-2.375V9.921c0-.885-.015-2.025-1.234-2.025-1.218 0-1.425.966-1.425 1.968v3.775H6.233V5.997H8.51v1.05h.032c.317-.601 1.09-1.235 2.246-1.235 2.405-.005 2.851 1.578 2.851 3.63v4.197z" />
            </svg>
          </Link>
        </div>
      </div>
    </footer>
  )
}