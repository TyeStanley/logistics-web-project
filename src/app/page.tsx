import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";

export default function Home() {
  return (
    <main className="h-screen w-screen overflow-x-hidden bg-gray-100">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <div className="h-[500px] w-full" />
    </main>
  );
}
