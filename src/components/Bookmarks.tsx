'use client'

import { ExternalLink } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { MotionDiv } from './MotionWrapper';

const Bookmarks = () => {
  const [isHovered, setIsHovered] = useState(false);
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  
  // Calculate the total width for one complete cycle (4 cards now)
  const cardWidth = 192; // w-48 in pixels
  const gap = 12;
  const totalWidth = (cardWidth + gap) * 4; // Updated for 4 cards
  
  const pausedPosition1 = useRef(0);
  const pausedPosition2 = useRef(-totalWidth); // Use calculated totalWidth
  const animationStartTime = useRef(Date.now());
  
  const bookmarks = [
     // Top Row
    [
      {
        title: "Ghostty",
        description: "A lightning-fast, GPU-accelerated terminal for power users.",
        url: "https://ghostty.org/",
        image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=300&fit=crop&crop=entropy&auto=format&q=75"
      },
      {
        title: "Neovim",
        description: "A hyperextensible text editor, built for the 21st century.",
        url: "https://neovim.io/",
        image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop&crop=entropy&auto=format&q=75"
      },
      {
        title: "Motion",
        description: "A modern animation library for React, built by Framer.",
        url: "https://motion.dev/",
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop&crop=entropy&auto=format&q=75"
      },
      {
        title: "Supabase",
        description: "The open source Firebase alternative. Build in minutes, scale to millions.",
        url: "https://supabase.com/",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop&crop=entropy&auto=format&q=75"
      }
    ],
    // Bottom Row
    [
      {
        title: "Naval's Tweetstorm",
        description: "How to get rich (without getting lucky) – a modern philosophy of leverage.",
        url: "https://x.com/naval/status/1002103360646823936",
        image: "https://images.unsplash.com/photo-1592495989226-03f88104f8cc?w=400&h=300&fit=crop&crop=entropy&auto=format&q=75"
      },
      {
        title: "Lovable",
        description: "A toolkit for building humane, joyful, lovable software products.",
        url: "https://lovable.so/",
        image: "https://images.unsplash.com/photo-1557682224-5b8590cd9ec5?w=400&h=300&fit=crop&crop=entropy&auto=format&q=75"
      },
      {
        title: "Next.js 15",
        description: "The React framework for building fast, scalable web apps. Now with Partial Prerendering.",
        url: "https://nextjs.org/blog/next-15",
        image: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?w=400&h=300&fit=crop&crop=entropy&auto=format&q=75"
      },
      {
        title: "Cursor",
        description: "An AI-first code editor designed to accelerate software development.",
        url: "https://www.cursor.so/",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop&crop=entropy&auto=format&q=75"
      }
    ]
  ];
  type Bookmark = {
    title: string;
    description: string;
    url: string;
    image: string;
  };
  
  const BookmarkCard = ({ bookmark }: { bookmark: Bookmark }) => (
    <a
      href={bookmark.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative overflow-hidden rounded-2xl border border-stone-100 dark:border-stone-800/50 hover:border-stone-200 dark:hover:border-stone-700/50 transition-all duration-300 hover:shadow-sm dark:shadow-stone-900/20 block w-48 flex-shrink-0"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-300 ease-out scale-100 group-hover:scale-105"
        style={{ backgroundImage: `url(${bookmark.image})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300" />
      
      {/* Content */}
      <div className="relative h-32 px-3 py-1.5 flex flex-col justify-end">
        <div className="space-y-0">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-white text-sm leading-tight">
              {bookmark.title}
            </h3>
            <ExternalLink size={12} className="text-white/80 group-hover:text-white transition-colors" />
          </div>
          <p className="mt-0.5 text-white text-xs leading-relaxed line-clamp-2">
            {bookmark.description}
          </p>
        </div>
      </div>
    </a>
  );

  useEffect(() => {
    const duration = 20; // Increased speed from 25 to 20 seconds
    
    if (!isHovered) {
      // Resume from paused positions
      controls1.start({
        x: [pausedPosition1.current, pausedPosition1.current - totalWidth],
        transition: {
          duration: duration,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
          repeatDelay: 0
        }
      });
      
      controls2.start({
        x: [pausedPosition2.current, pausedPosition2.current + totalWidth],
        transition: {
          duration: duration,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
          repeatDelay: 0
        }
      });
      
      animationStartTime.current = Date.now();
    } else {
      // Calculate current positions when pausing
      const elapsed = (Date.now() - animationStartTime.current) / 1000;
      const progress = (elapsed % duration) / duration;
      
      // Update paused positions
      pausedPosition1.current = pausedPosition1.current - (progress * totalWidth);
      pausedPosition2.current = pausedPosition2.current + (progress * totalWidth);
      
      // Normalize positions to stay within bounds
      pausedPosition1.current = pausedPosition1.current % -totalWidth;
      pausedPosition2.current = pausedPosition2.current % totalWidth;
      if (pausedPosition2.current > 0) pausedPosition2.current -= totalWidth;
      
      controls1.stop();
      controls2.stop();
    }
  }, [isHovered, controls1, controls2, totalWidth]);

  useEffect(() => {
    // Initialize animations on mount
    controls1.start({
      x: [0, -totalWidth],
      transition: {
        duration: 20, // Increased speed from 25 to 20 seconds
        repeat: Infinity,
        ease: "linear",
        repeatType: "loop"
      }
    });
    
    controls2.start({
      x: [-totalWidth, 0],
      transition: {
        duration: 20, // Increased speed from 25 to 20 seconds
        repeat: Infinity,
        ease: "linear",
        repeatType: "loop"
      }
    });
  }, [controls1, controls2, totalWidth]);

  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="space-y-3">
        <h2 className="font-semibold text-base text-stone-900 dark:text-stone-100 mb-3 tracking-tight">
          Bookmarks
        </h2>
        
        <div className="grid grid-cols-1 gap-3">
          {/* Row 1 - Right to Left */}
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-3"
              animate={controls1}
            >
              {/* Create enough duplicates for seamless loop */}
              {[...bookmarks[0], ...bookmarks[0], ...bookmarks[0]].map((bookmark, index) => (
                <BookmarkCard key={`row1-${index}`} bookmark={bookmark} />
              ))}
            </motion.div>
          </div>

          {/* Row 2 - Left to Right */}
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-3"
              animate={controls2}
            >
              {/* Create enough duplicates for seamless loop */}
              {[...bookmarks[1], ...bookmarks[1], ...bookmarks[1]].map((bookmark, index) => (
                <BookmarkCard key={`row2-${index}`} bookmark={bookmark} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </MotionDiv>
  );
};

export default Bookmarks;