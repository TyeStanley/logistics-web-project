import Image from "next/image";
import Link from "next/link";
import logo from "../assets/Goldentail_Logistics_LLC.png";

export default function Navbar() {
  return (
    <section className="fixed flex w-[calc(100%-17px)] justify-around bg-gray-800 py-3">
      <Image
        src={logo}
        alt="Goldentail Logistics LLC Logo"
        width={250}
        height={125}
      />

      <ul className="flex items-center gap-5 text-white">
        <li>
          <Link
            href="/about"
            className="block border-2 border-transparent p-2 transition-all hover:border-b-gray-100"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/services"
            className="block border-2 border-transparent p-2 transition-all hover:border-b-gray-100"
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            href="/career"
            className="block border-2 border-transparent p-2 transition-all hover:border-b-gray-100"
          >
            Career
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className="block border-2 border-transparent p-2 transition-all hover:border-b-gray-100"
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            href="/quote"
            className="block rounded bg-blue-700 p-2 text-gray-100 transition-all hover:scale-110"
          >
            Quote Now
          </Link>
        </li>
      </ul>
    </section>
  );
}
