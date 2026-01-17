import HeroSection from "@/components/parts/HeroSection";
import Second from "@/components/parts/Second";
import Third from "@/components/parts/Third";
import Contact from "@/components/parts/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      {/* <HeroSection /> */}
      <Second />
      <Third />
      <Contact />
    </main>
  );
}
