import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Career from "../components/Career";

export default function Home() {
  return (
    <main className="h-screen w-screen flex-col overflow-x-hidden bg-gray-100">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Career />
      <div className="h-[500px] w-full" />
    </main>
  );
}
