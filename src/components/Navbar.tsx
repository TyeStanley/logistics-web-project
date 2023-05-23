import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <section className="flex justify-between border border-slate-200 py-2">
      <Image
        src={require("../assets/Goldentail_Logistics_LLC.png")}
        alt="Goldentail Logistics LLC Logo"
        width={250}
        height={125}
        className="ml-5"
      />

      <ul className="mr-5 flex items-center gap-2 text-white">
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
