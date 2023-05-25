export default function Hero() {
  return (
    <section className="flex h-screen items-center justify-center bg-[url('../assets/heroImage.jpg')] bg-cover bg-center">
      <div className="flex h-[250px] w-[500px] flex-col items-center justify-center rounded-xl bg-gray-300/90 shadow-lg shadow-gray-300 ">
        <h1 className="text-2xl font-extrabold text-gray-900">Lorem ipsum</h1>
        <p className="my-4 px-6 text-center text-gray-800">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt aut
          facilis commodi esse maiores voluptate laborum rerum blanditiis?
        </p>
        <button className="mt-5 rounded bg-blue-700 p-2 text-gray-100 transition-all hover:scale-110">
          Quote Now
        </button>
      </div>
    </section>
  );
}
