import Image from "next/image";
import newimg from "../assets/Goldentail_Logistics_LLC.png";

export default function Hero() {
  return (
    <section className="border border-red-700">
      <div className="my-2 h-1 w-full bg-white" />
      <Image
        src={newimg}
        alt="hero"
        width={1920}
        height={1080}
      />
    </section>
  );
}
