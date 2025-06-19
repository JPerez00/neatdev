'use client'

import Link from 'next/link'
import Typewriter from 'typewriter-effect'

export function NavWritter() {
  return (
    <Link href="/" aria-label="Home">
      <div className="font-semibold text-base text-stone-900 dark:text-stone-100 tracking-tight hover:text-stone-700 dark:hover:text-stone-200 transition-colors">
        <Typewriter
          key="/NeatDev"
          onInit={(typewriter) => {
            typewriter.typeString('/NeatDev').start()
          }}
          options={{
            loop: false,
            deleteSpeed: 0,
            delay: 50,
            cursor: '|',
          }}
        />
      </div>
    </Link>
  )
}
