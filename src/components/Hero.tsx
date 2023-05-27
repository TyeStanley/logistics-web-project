export default function Hero() {
  return (
    <section className="flex h-screen items-center justify-center bg-[url('../assets/heroImage.jpg')] bg-cover bg-center">
      <div className="flex w-[500px] flex-col items-center justify-center rounded-xl bg-gray-100/90 p-8 shadow-lg shadow-gray-300">
        <h1 className="text-center text-3xl font-extrabold text-gray-900">
          GoldenTail Logistics
        </h1>
        <p className="mt-3 text-center font-semibold">
          Your Trusted Partner in Efficient Supply Chain Solutions
        </p>
        <p className="mt-3 text-center text-sm text-gray-800">
          At GoldenTail Logistics, we empower your business with seamless supply
          chain solutions. From transportation services to warehousing
          solutions, we optimize your operations for growth. Trust GoldenTail
          Logistics to unlock your business potential. Contact us today.
        </p>
        <button className="mt-6 rounded bg-blue-700 p-2 text-gray-100 transition-all hover:scale-110">
          Contact Now
        </button>
      </div>
    </section>
  );
}
