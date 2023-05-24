import Image from "next/image";
import Link from "next/link";
import logo from "../assets/Goldentail_Logistics_LLC.png";

export default function Navbar() {
  return (
    <section className="absolute flex w-full justify-around pt-4">
      <Image
        src={logo}
        alt="Goldentail Logistics LLC Logo"
        width={250}
        height={125}
        className=""
      />

      <ul className=" flex items-center gap-4 text-white">
        <li className="hover:text-gray-400">
          <Link href="/about">About</Link>
        </li>
        <li className="hover:text-gray-400">
          <Link href="/services">Services</Link>
        </li>
        <li className="hover:text-gray-400">
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </section>
  );
}
