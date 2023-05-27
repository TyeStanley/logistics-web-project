import servicesJson from "../assets/json/services.json";
import Image from "next/image";

interface serviceType {
  image: string;
  title: string;
  content: string;
}

export default function Services() {
  return (
    <section
      id="services"
      className="relative h-[700px] w-full pt-[150px]"
    >
      <h1 className="text-center text-3xl font-bold text-gray-800">
        Logistic Services
      </h1>
      <div className="mt-[50px] grid grid-cols-3 gap-4">
        {servicesJson.map(({ image, title, content }: serviceType) => (
          <div
            key={title}
            className="new-shadow flex h-[300px] w-[200px] flex-col items-center justify-self-center rounded bg-gray-100 p-5"
          >
            <Image
              src={image}
              alt={title}
              width={150}
              height={150}
              className="rounded-full border-2 border-red-500 bg-gray-500"
            />
            <h2 className="text-xl font-bold text-gray-800">{title}</h2>
            <p className="text-gray-700">{content}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
