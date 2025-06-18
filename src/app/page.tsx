import Bookmarks from "@/components/Bookmarks";
import FeaturedPost from "@/components/FeaturedPost";
import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import Newsletter from "@/components/Newsletter";
import ProfileCard from "@/components/ProfileCard";
import RecentWork from "@/components/RecentWork";
import SignatureProjects from "@/components/SignatureProjects";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="max-w-lg mx-auto px-4 py-8 space-y-6 mb-20">
        <ProfileCard />
        <RecentWork />
        <SignatureProjects />
        <FeaturedPost />
        <Bookmarks />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
