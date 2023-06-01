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
      className="mt-[150px] w-full"
    >
      <h1 className="text-center text-3xl font-bold text-gray-800">
        Logistic Services
      </h1>
      <div className="mx-auto mt-[50px] flex max-w-[1400px] flex-wrap justify-center gap-4">
        {servicesJson.map(({ image, title, content }: serviceType) => (
          <div
            key={title}
            className="new-shadow flex max-w-[350px] flex-col items-center rounded-xl bg-gray-100 p-5"
          >
            <Image
              src={`/svg-icons/${image}`}
              alt={title}
              width={150}
              height={150}
            />
            <h2 className="text-xl font-bold text-gray-800">{title}</h2>
            <p className="mt-5 text-gray-700">{content}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
