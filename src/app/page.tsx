import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Gameplay from "@/components/Gameplay";
import WorldMap from "@/components/WorldMap";
import About from "@/components/About";
import Roadmap from "@/components/Roadmap";
import Tokenomics from "@/components/Tokenomics";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Gameplay />
        <WorldMap />
        <About />
        <Roadmap />
        <Tokenomics />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
