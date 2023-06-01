"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../assets/Goldentail_Logistics_LLC.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);

    document.getElementById("top-bar")!.classList.toggle("opacity-0");
    document.getElementById("middle-bar")!.classList.toggle("rotate-45");
    document.getElementById("middle-bar2")!.classList.toggle("-rotate-45");
    document.getElementById("bottom-bar")!.classList.toggle("opacity-0");
  };

  return (
    <section className="fixed z-50 flex w-full justify-between bg-gray-800 px-3 py-3 lg:w-[calc(100%-17px)] lg:justify-around">
      <Image
        src={logo}
        alt="Goldentail Logistics LLC Logo"
        width={250}
        height={125}
      />

      {/* mobile nav */}
      <div
        onClick={toggleMenu}
        className="my-auto flex h-[30px] flex-col justify-between lg:hidden"
      >
        <div
          id="top-bar"
          className="h-[5px] w-10 rounded bg-gray-100"
        />
        <div
          id="middle-bar"
          className="h-[5px] w-10 translate-y-[4px] rounded bg-gray-100"
        />
        <div
          id="middle-bar2"
          className="h-[5px] w-10 -translate-y-[4px] rounded bg-gray-100"
        />
        <div
          id="bottom-bar"
          className="h-[5px] w-10 rounded bg-gray-100"
        />
      </div>

      {/* desktop nav */}
      <ul className="hidden items-center gap-5 text-white lg:flex">
        <li>
          <a
            href="#about"
            className="block border-2 border-transparent p-2 transition-all hover:border-b-gray-100"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#services"
            className="block border-2 border-transparent p-2 transition-all hover:border-b-gray-100"
          >
            Services
          </a>
        </li>
        <li>
          <a
            href="#career"
            className="block border-2 border-transparent p-2 transition-all hover:border-b-gray-100"
          >
            Career
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="block border-2 border-transparent p-2 transition-all hover:border-b-gray-100"
          >
            Contact
          </a>
        </li>
        <li>
          <Link
            href="/contact"
            className="block rounded bg-blue-700 p-2 text-gray-100 transition-all hover:scale-110"
          >
            Contact Now
          </Link>
        </li>
      </ul>
    </section>
  );
}
