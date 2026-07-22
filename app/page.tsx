import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Projects from "@/components/Projects/Projects";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import PremiumBackground from "@/components/Background/PremiumBackground";
import Intro from "@/components/Intro/Intro";
import ScrollProgress from "@/components/Effects/ScrollProgress";
import MouseSpotlight from "@/components/Effects/MouseSpotlight";
import AuroraBackground from "@/components/Effects/AuroraBackground";
import CustomCursor from "@/components/Effects/CustomCursor";



export default function Home() {
  return (
    <main className="relative overflow-hidden text-white">
      <ScrollProgress />

      {/*<MouseSpotlight />*/}

      {/*<AuroraBackground />*/}

      {/*<CustomCursor />*/}


      <Intro />

      <PremiumBackground />

      <Navbar />

      <Hero />

      <About />
      

      <Projects />

      <Contact />

      <Footer />
    </main>
  );
}