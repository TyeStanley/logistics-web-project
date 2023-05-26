import React from "react";

export default function About() {
  return (
    <section className="relative h-[700px] pt-[150px]">
      <div className="absolute left-0 right-0 mx-auto h-[200px] w-[95%] rounded-xl bg-[url('../assets/aboutImage.jpg')] bg-cover bg-center" />

      <div className="new-shadow relative bottom-[5%] left-[5%] h-[450px] w-[470px] rounded-xl bg-gray-100 p-5">
        <h1 className="text-2xl font-extrabold text-gray-900">
          About Goldentail Logistics
        </h1>
        <p className="my-6 text-gray-800">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt aut
          facilis commodi esse maiores voluptate laborum rerum blanditiis?
        </p>
        <p className="my-4 text-gray-800">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt aut
          facilis commodi esse maiores voluptate laborum rerum blanditiis?
        </p>
        <p className="my-4 text-gray-800">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt aut
          facilis commodi esse maiores voluptate laborum rerum blanditiis?
        </p>
        <button className="mt-4 rounded bg-blue-700 p-2 text-gray-100 transition-all hover:scale-110">
          Read More
        </button>
      </div>
    </section>
  );
}
