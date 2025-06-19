'use client'

import { useEffect, useState } from 'react'
import { Button } from './ui/button'

export default function BackToTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const handleWindowScroll = () => {
      setShow(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleWindowScroll)
    return () => window.removeEventListener('scroll', handleWindowScroll)
  }, [])

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (!show) return null

  return (
    <Button
      type="button"
      aria-label="Scroll to top"
      onClick={handleScrollTop}
      className="fixed right-6 bottom-6 z-50 flex items-center justify-center w-8 h-8 rounded-xl bg-stone-100 dark:bg-stone-800 border border-stone-200/60 dark:border-stone-700 transition-all duration-100 group cursor-pointer"
    >
      <svg className="h-4 w-4 fill-stone-600 dark:fill-stone-100" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"
          clipRule="evenodd"
        />
      </svg>
    </Button>
  )
}
