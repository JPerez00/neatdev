'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useToast } from '@/hooks/use-toast'
import { MotionDiv } from './MotionWrapper'

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function ContactMe() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!name.trim() || !email.trim() || !message.trim()) {
      toast({
        title: 'Error',
        description: 'Please fill in all fields',
        variant: 'destructive',
      })
      return
    }

    setIsLoading(true)

    // Simulate sending message
    setTimeout(() => {
      toast({
        title: 'Message sent!',
        description: 'Thank you for reaching out. I will get back to you soon.',
      })
      setName('')
      setEmail('')
      setMessage('')
      setIsLoading(false)
    }, 1200)
  }

  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="space-y-3">
        <h2 className="font-semibold text-base text-stone-900 dark:text-stone-100 mb-3 tracking-tight">
          Contact Me
        </h2>

        <div className="bg-white dark:bg-stone-900/90 backdrop-blur-sm rounded-2xl border border-stone-100 dark:border-stone-800/50 p-4">
          <div className="space-y-4">
            <div className="flex flex-col items-start gap-2">
              <h3 className="font-semibold text-stone-900 dark:text-stone-100 text-sm group-hover:text-stone-700 dark:group-hover:text-stone-200 leading-snug flex-1">
                Get In Touch
              </h3>
              <p className="text-stone-600 dark:text-stone-300 text-xs leading-relaxed">
                Whether you have a project idea, a question, or just want to say hello, send me a message below.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <Input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-stone-50 dark:bg-stone-800 border-stone-200 dark:border-stone-700 focus:border-stone-400 dark:focus:border-stone-500 h-10 text-sm placeholder:text-xs"
                disabled={isLoading}
                required
              />

              <Input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-stone-50 dark:bg-stone-800 border-stone-200 dark:border-stone-700 focus:border-stone-400 dark:focus:border-stone-500 h-10 text-sm placeholder:text-xs"
                disabled={isLoading}
                required
              />

              <textarea
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="resize-none bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 focus:border-stone-400 dark:focus:border-stone-500 rounded-md p-2 h-24 text-sm placeholder:text-xs text-stone-900 dark:text-stone-100"
                disabled={isLoading}
                required
              />

              <Button
                type="submit"
                size="sm"
                className="text-xs bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 hover:bg-stone-800 dark:hover:bg-stone-200 transition-colors h-8"
                disabled={isLoading}
              >
                {isLoading ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </MotionDiv>
  )
}
