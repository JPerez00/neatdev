import Image from 'next/image';
import SocialIcons from './SocialIcons';
import { MotionDiv } from './MotionWrapper';

export default function ProfileCard() {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut'}}
    >
      <div className="bg-white dark:bg-stone-900/90 rounded-3xl border border-stone-100 dark:border-stone-800/50 p-6 shadow-sm hover:shadow-md dark:shadow-stone-900/20">
        <div className="flex items-start lg:gap-5 gap-4">
          <Image
            src="/headshot.jpg"
            alt="Profile Headshot"
            width={120}
            height={120}
            className="rounded-2xl flex-shrink-0"
            priority
          />
          <div className="flex-1 min-w-0">
            <h1 className="font-bold text-xl text-stone-900 dark:text-stone-50 mb-1 tracking-tight">
              John Doe
            </h1>
            <p className="text-stone-600 dark:text-stone-300 text-sm mb-2 leading-relaxed">
              Full-stack developer crafting digital experiences with React, TypeScript, and modern web stacks.
            </p>
            <SocialIcons />
          </div>
        </div>
      </div>
    </MotionDiv>
  );
}
