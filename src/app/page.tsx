"use client";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Career from "../components/Career";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

import { useState } from "react";

export default function Home() {
  const [test, setTest] = useState("");
  const makeApiCall: any = async () => {
    let thisFetch = await fetch("/api/test", {
      method: "GET",
      body: JSON.stringify({ hello: "world" })
    });

    return thisFetch.json();
  };

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
