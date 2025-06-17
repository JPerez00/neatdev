import Image from 'next/image';
import { MotionDiv } from "./MotionWrapper";

const jobs = [
  {
    company: "v0",
    description: "Founding Engineer – AI-Powered UI Generation",
    stack: ["React", "LangChain", "Tailwind CSS"],
    date: "2024 - Present",
    link: "#",
    logo: "/logos/v0.svg",
  },
  {
    company: "Next.js", 
    description: "Core Contributor – Next.js Compiler & Edge Runtime",
    stack: ["Next.js", "TypeScript", "Edge Functions"],
    date: "2023 - 2024",
    link: "#",
    logo: "/logos/next.svg",
  },
  {
    company: "Apple",
    description: "Staff Engineer – Core OS & Secure Enclave Architecture",
    stack: ["Swift", "Secure Enclave", "Cryptography"],
    date: "2022 - 2023",
    link: "#",
    logo: "/logos/apple.svg",
  }
];

export default function RecentWork() {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
    >
      <div className="space-y-3">
        <h2 className="font-semibold text-base text-stone-900 dark:text-stone-100 mb-3 tracking-tight">
          Recent Work
        </h2>
        
        <div className="space-y-3">
          {jobs.map((project) => (
            <a
              key={project.company}
              href={project.link}
              className="block bg-white dark:bg-stone-900/90 backdrop-blur-sm rounded-2xl border border-stone-100 dark:border-stone-800/50 p-4 hover:bg-white/80 dark:hover:bg-stone-800/60 hover:border-stone-200 dark:hover:border-stone-700/50 hover:shadow-sm dark:shadow-stone-900/20 group"
            >
              <div className="flex items-start gap-3 mb-2.5">
                <Image 
                  src={project.logo}
                  alt={`${project.company} logo`}
                  width={32}
                  height={32}
                  className="rounded-xl p-1 mt-0.5 bg-stone-800 dark:bg-stone-600"
                />
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-stone-900 dark:text-stone-100 text-sm group-hover:text-stone-700 dark:group-hover:text-stone-200">
                        {project.company}
                      </h3>
                      <p className="font-medium text-stone-600 dark:text-stone-300 text-xs leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                    <span className="text-xs text-stone-400 dark:text-stone-500 font-medium whitespace-nowrap pl-2">
                      {project.date}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 mt-2">
                {project.stack.map((stack) => (
                  <span 
                    key={stack}
                    className="px-2 py-0.5 bg-stone-200/70 dark:bg-stone-700/50 text-stone-600 dark:text-stone-300 text-xs rounded-lg font-medium border border-stone-100 dark:border-stone-700/50"
                  >
                    {stack}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </MotionDiv>
  );
}
