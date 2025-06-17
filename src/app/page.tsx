import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import ProfileCard from "@/components/ProfileCard";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="max-w-lg mx-auto px-4 py-8 space-y-6 mb-10">
        <ProfileCard />
      </main>
      <Footer />
    </div>
  );
}
