import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Timeline from "@/components/sections/Timeline";
import Skills from "@/components/sections/Skills";
import AlphaSenseSpotlight from "@/components/sections/AlphaSenseSpotlight";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Timeline />
        <Skills />
        <AlphaSenseSpotlight />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
