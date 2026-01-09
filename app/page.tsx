import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Stats } from "@/components/Stats";
import { Philosophy } from "@/components/Philosophy";
import { Conditions } from "@/components/Conditions";
import { Legacy } from "@/components/Legacy";
import { Treatments } from "@/components/Treatments";
import { WhyChooseUs } from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About className="scroll-mt-24" />
        <Treatments className="scroll-mt-24" />
        <Philosophy />
        <Conditions className="scroll-mt-24" />
        <WhyChooseUs />
        <Stats />
        <Legacy />
        <Contact className="scroll-mt-24" />
      </main>
      <Footer />
    </div>
  );
}
