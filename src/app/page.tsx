import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";

export default function Home() {
  return (
    <main className="h-screen w-screen overflow-x-hidden bg-gray-100">
      <Navbar />
      <Hero />
      <About />
    </main>
  );
}
