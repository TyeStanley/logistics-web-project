import Navbar from "@components/Navbar";
import Hero from "@/components/Homepage/Hero";
import About from "@/components/Homepage/About";
import Services from "@/components/Homepage/Services";
import Career from "@/components/Homepage/Career";
import ContactForm from "@/components/Homepage/ContactForm";
import Footer from "@components/Footer";

export default function Home() {
  return (
    <main className="h-screen w-screen flex-col overflow-x-hidden bg-gray-100">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Career />
      <ContactForm />
      <Footer />
    </main>
  );
}
