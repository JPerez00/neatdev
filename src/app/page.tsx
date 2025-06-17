import { Footer } from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-950">
      <Header />
      <main className="max-w-lg mx-auto px-4 py-8 space-y-6 mb-10">
        <h1 className="text-3xl font-bold text-center text-stone-800 dark:text-stone-100">
          Hello Dev
        </h1>
      </main>
      <Footer />
    </div>
  );
}
