import Image from "next/image";
import Link from "next/link";
import logo from "../assets/Goldentail_Logistics_LLC.png";

export default function Footer() {
  return (
    <section className="mt-[150px] flex w-full justify-center bg-gray-800 p-5">
      <div className="flex flex-col items-center justify-center">
        <Link href="/">
          <Image
            src={logo}
            alt="Goldentail Logistics LLC"
            width="300"
            height="150"
          />
        </Link>
        <p className="mt-5 text-white">
          © 2023 Goldentail Logistics LLC. All rights reserved.
        </p>
      </div>

      <div className="p-5">
        <h1 className="text-center text-3xl text-white">Social Media</h1>
        <div className="flex justify-center">
          <Link href="https://www.linkedin.com/in/tye-stanley/">
            <Image
              src="/svg-icons/linkedin.svg"
              alt="LinkedIn"
              width="25"
              height="25"
              className="m-2 cursor-pointer"
            />
          </Link>
          <Link href="https://github.com/TyeStanley">
            <Image
              src="/svg-icons/github.svg"
              alt="LinkedIn"
              width="25"
              height="25"
              className="m-2 cursor-pointer"
            />
          </Link>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center p-5">
        <h1 className="text-3xl text-white">Address</h1>
        <p className="text-white">Goldentail Logistics LLC</p>
        <p className="text-white">1234 Main St</p>
        <p className="text-white">Las Vegas, NV 89001</p>
      </div>
    </section>
  );
}
