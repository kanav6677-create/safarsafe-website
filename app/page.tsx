import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Features } from "@/components/features";
import { HowItWorks } from "@/components/how-it-works";
import { Achievements } from "@/components/achievements";
import { Team } from "@/components/team";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Features />
        <HowItWorks />
        <Achievements />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
