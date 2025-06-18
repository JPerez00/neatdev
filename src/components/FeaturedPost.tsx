import Link from "next/link";
import { MotionDiv } from "./MotionWrapper";

const FeaturedPost = () => {
  // Dummy demo data for featured posts
  const posts = [
    {
      title: "Building Scalable React Applications",
      slug: "building-scalable-react-applications",
      description: "Learn how to structure and architect React applications that can grow with your team and requirements.",
      date: "2024-01-15",
      readTime: "8 min read"
    },
    {
      title: "Modern TypeScript Patterns",
      slug: "modern-typescript-patterns", 
      description: "Explore advanced TypeScript patterns and techniques to write more robust and maintainable code.",
      date: "2024-01-10",
      readTime: "6 min read"
    },
    {
      title: "The Art of Code Review",
      slug: "art-of-code-review",
      description: "Best practices for conducting effective code reviews that improve code quality and team collaboration.",
      date: "2024-01-05",
      readTime: "5 min read"
    }
  ];

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="space-y-3">
        <h2 className="font-semibold text-base text-stone-900 dark:text-stone-100 mb-3 tracking-tight">Curated Writings</h2>
        {posts.map((post) => (
          <Link
            key={post.title}
            href={`/blog/${post.slug}`}
            className="block bg-white dark:bg-stone-900/90 backdrop-blur-sm rounded-2xl border border-stone-100 dark:border-stone-800/50 p-4 hover:bg-white/80 dark:hover:bg-stone-800/60 hover:border-stone-200 dark:hover:border-stone-700/50 hover:shadow-sm dark:shadow-stone-900/20 group"
          >
            <div className="space-y-3">
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-semibold text-stone-900 dark:text-stone-100 text-sm group-hover:text-stone-700 dark:group-hover:text-stone-200 leading-snug flex-1">
                  {post.title}
                </h3>
                <div className="text-xs text-stone-400 dark:text-stone-500 font-medium">
                  {formatDate(post.date)}
                </div>
              </div>
              <p className="text-stone-600 dark:text-stone-300 text-xs leading-relaxed">
                {post.description}
              </p>
              <div className="flex justify-between items-center">
                <span className="text-xs text-stone-400 dark:text-stone-500">
                  {post.readTime}
                </span>
                <span className="text-xs text-stone-500 dark:text-stone-400 group-hover:text-stone-700 dark:group-hover:text-stone-300 transition-colors">Read More →</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </MotionDiv>
  );
};

export default FeaturedPost;