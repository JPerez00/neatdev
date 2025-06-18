
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { MotionDiv } from "./MotionWrapper";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "Mobile Banking App",
    description: "Secure financial platform with biometric authentication and real-time transactions",
    year: "2024",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop",
    link: '/',
    demo: '/',
  },
  {
    title: "AI Content Generator",
    description: "Machine learning platform that generates marketing copy and social media content",
    year: "2024", 
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop",
    link: '/',
    demo: '/',
  },
  {
    title: "Smart Home Dashboard",
    description: "IoT control center for managing connected devices and automation routines",
    year: "2023",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop",
    link: '/',
    demo: '/',
  },
  {
    title: "Fitness Tracker Pro",
    description: "Advanced workout planning and nutrition tracking with social features",
    year: "2023",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
    link: '/',
    demo: '/',
  },
  {
    title: "Video Streaming Platform",
    description: "Netflix-style streaming service with recommendation algorithms",
    year: "2023",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&h=600&fit=crop",
    link: '/',
    demo: '/',
  },
  {
    title: "Crypto Trading Bot",
    description: "Automated trading system with advanced risk management and portfolio optimization",
    year: "2022",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop",
    link: '/',
    demo: '/',
  }
];

export default function SignatureProjects() {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5, ease: 'easeOut' }}
    >
      <div className="space-y-4">
        <h2 className="font-semibold text-base text-stone-900 dark:text-stone-100 mb-4 tracking-tight">Signature Projects</h2>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {projects.map((project) => (
              <CarouselItem key={project.title} className="pl-2 md:pl-4 basis-4/5 md:basis-1/2">
                <Card className="bg-white dark:bg-stone-900/90 backdrop-blur-sm border border-stone-100 dark:border-stone-800/50 hover:bg-white/80 dark:hover:bg-stone-800/60 hover:border-stone-200 dark:hover:border-stone-700/50 hover:shadow-sm dark:shadow-stone-900/20 transition-all duration-300 group h-full">
                  <CardContent className="p-4 flex flex-col h-full">
                    {/* Project Image */}
                    <div className="relative w-full aspect-video bg-stone-100 dark:bg-stone-800 rounded-xl mb-3 overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority={false}
                      />
                    </div>
                    
                    {/* Project Title */}
                    <h3 className="font-semibold text-stone-900 dark:text-stone-100 text-sm group-hover:text-stone-700 dark:group-hover:text-stone-200 transition-colors mb-2">
                      {project.title}
                    </h3>
                    
                    {/* Project Description */}
                    <p className="text-stone-600 dark:text-stone-300 text-xs mb-3 leading-relaxed flex-grow line-clamp-3">
                      {project.description}
                    </p>
                    
                    {/* Buttons */}
                    <div className="mt-auto flex gap-2">
                      <Link href={project.link} className="flex-1">
                        <Button 
                          size="sm" 
                          className="w-full text-xs h-8 bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 hover:bg-stone-800 dark:hover:bg-stone-200 cursor-pointer"
                        >
                          Read More
                        </Button>
                      </Link>

                      {project.demo && (
                        <Link href={project.demo} className="flex-1">
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="w-full text-xs h-8 bg-white dark:bg-stone-800 border-stone-200 dark:border-stone-700 hover:bg-stone-50 dark:hover:bg-stone-700 cursor-pointer flex items-center justify-center gap-1"
                          >
                            Live Demo
                            <ArrowRight className="h-2 w-2" />
                          </Button>
                        </Link>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
        
        {/* Mobile swipe hint */}
        <p className="text-xs text-stone-300 dark:text-stone-600 text-center md:hidden mt-2">
          Swipe to see more projects
        </p>
      </div>
    </MotionDiv>
  );
}