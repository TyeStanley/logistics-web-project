import Image from "next/image";
import Link from "next/link";
import logo from "@assets/Goldentail_Logistics_LLC.png";

export default function Footer() {
  return (
    <section className="mt-[150px] flex w-full flex-wrap justify-around bg-gray-800 p-5">
      <div className="flex flex-col justify-center">
        <Link href="/">
          <Image
            src={logo}
            alt="Goldentail Logistics LLC"
            width="300"
            height="150"
          />
        </Link>
        <p className="mt-5 text-[12px] text-white">
          © 2023 Goldentail Logistics LLC. All rights reserved.
        </p>
      </div>

      <div className="flex flex-col items-center justify-center p-5">
        <div className="grid grid-cols-2 gap-x-12 gap-y-2">
          <a
            href="#about"
            className="text-white"
          >
            About
          </a>
          <a
            href="#services"
            className="text-white"
          >
            Services
          </a>
          <a
            href="#career"
            className="text-white"
          >
            Career
          </a>
          <a
            href="#contact"
            className="text-white"
          >
            Contact
          </a>
        </div>
      </div>

      <div className="p-5">
        <div className="mb-1 flex items-center justify-center">
          <Link href="https://www.linkedin.com/in/tye-stanley/">
            <Image
              src="/svg-icons/linkedin.svg"
              alt="LinkedIn"
              width="25"
              height="25"
              className="m-2 cursor-pointer"
            />
          </Link>
          <Link href="https://tyestanley.com/">
            <Image
              src="/svg-icons/instagram.svg"
              alt="LinkedIn"
              width="30"
              height="30"
              className="m-2 cursor-pointer"
            />
          </Link>
          <Link href="https://tyestanley.com/">
            <Image
              src="/svg-icons/facebook.svg"
              alt="LinkedIn"
              width="29"
              height="29"
              className="m-2 cursor-pointer"
            />
          </Link>
          <Link href="https://tyestanley.com/">
            <Image
              src="/svg-icons/twitter.svg"
              alt="LinkedIn"
              width="29"
              height="29"
              className="m-2 cursor-pointer"
            />
          </Link>
        </div>
        <div className="p-2">
          <p className="text-[12px] text-white">Goldentail Logistics LLC</p>
          <p className="text-[12px] text-white">1234 Main St</p>
          <p className="text-[12px] text-white">Las Vegas, NV 89001</p>
        </div>
      </div>
    </section>
  );
}
