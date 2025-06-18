'use client'

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { MotionDiv } from './MotionWrapper';

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

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate newsletter signup
    setTimeout(() => {
      toast({
        title: "Success!",
        description: "Thank you for subscribing to our newsletter.",
      });
      setEmail('');
      setIsLoading(false);
    }, 1000);
  };

  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="space-y-3">
        <h2 className="font-semibold text-base text-stone-900 dark:text-stone-100 mb-3 tracking-tight">
          Newsletter
        </h2>
        
        <div className="bg-white dark:bg-stone-900/90 backdrop-blur-sm rounded-2xl border border-stone-100 dark:border-stone-800/50 p-4">
          <div className="space-y-3">
            <div className="flex items-start gap-2 mb-1">
              <div className='rounded-lg p-0.5 bg-stone-800 dark:bg-stone-600'>
                <MailIcon className='w-5 h-5 fill-white align-center justify-center' />
              </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <h3 className="font-semibold text-stone-900 dark:text-stone-100 text-md mb-1">
                      Stay Updated!
                    </h3>
                  </div>
                </div>
              </div>
              <p className="text-stone-600 dark:text-stone-300 text-xs leading-relaxed">
                Get the latest insights on web development, design patterns, and tech trends delivered to your inbox.
              </p>
            
            <form onSubmit={handleSubmit} className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 text-xs bg-stone-50 dark:bg-stone-800 border-stone-200 dark:border-stone-700 focus:border-stone-400 dark:focus:border-stone-500 h-8 placeholder:text-xs"
                disabled={isLoading}
              />
              <Button 
                type="submit" 
                size="sm"
                className="text-xs bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 hover:bg-stone-800 dark:hover:bg-stone-200 transition-colors h-8"
                disabled={isLoading}
              >
                {isLoading ? 'Subscribing...' : 'Subscribe'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </MotionDiv>
  );
}