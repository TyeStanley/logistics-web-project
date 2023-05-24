import Image from "next/image";
import heroImage from "../assets/heroImage.jpg";

export default function Hero() {
  return (
    <section className="flex h-screen items-center justify-center bg-[url('../assets/heroImage.jpg')] bg-cover bg-center">
      <div className="flex h-[250px] w-[500px] flex-col items-center justify-center rounded-xl bg-gray-300/80 shadow-lg shadow-gray-700">
        <h1 className="text-xl font-extrabold text-blue-700">Lorem ipsum</h1>
        <p className="my-4 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt aut
          facilis commodi esse maiores voluptate laborum rerum blanditiis?
        </p>
        <button className="rounded bg-green-700 p-2 text-white">
          Quote Now
        </button>
      </div>
    </section>
  );
}
