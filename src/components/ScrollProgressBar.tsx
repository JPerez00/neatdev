'use client'

import { motion, useScroll } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[4px] bg-stone-600 dark:bg-stone-400 origin-left z-[9999]"
      style={{ scaleX: scrollYProgress }}
    />
  )
}
