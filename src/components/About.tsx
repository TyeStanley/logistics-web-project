export default function About() {
  return (
    <section
      id="about"
      className="relative mt-[150px] h-[550px]"
    >
      <div className="absolute left-0 right-0 mx-auto h-[425px] w-[90%] rounded-xl bg-[url('../assets/aboutImage.jpg')] bg-cover bg-center" />

      <div className="new-shadow relative bottom-[10%] left-[10%] w-[80%] rounded-xl bg-gray-100 p-5 md:w-[470px]">
        <h1 className="text-2xl font-extrabold text-gray-800">
          Your Ideal Logistics Partner
        </h1>
        <p className="mt-4 text-sm text-gray-700 md:text-base">
          At GoldenTail Logistics, we are the perfect fit for your logistical
          needs. Our wide range of services, including transportation,
          warehousing, and supply chain management, allows us to handle your
          requirements efficiently and effectively.
        </p>
        <p className="mt-4 text-sm text-gray-700 md:text-base">
          Our top priority is customer satisfaction, and we strive to understand
          your unique needs to provide a seamless experience. With our advanced
          technology and real-time tracking systems, you can easily monitor your
          shipments and access critical data.
        </p>
        <p className="mt-4 text-sm text-gray-700 md:text-base">
          With our industry expertise, extensive network, and commitment to
          sustainability, you can trust GoldenTail Logistics to exceed your
          expectations and deliver exceptional solutions for all your logistics
          needs.
        </p>
        <button className="mt-4 rounded bg-blue-700 p-2 text-gray-100 transition-all hover:scale-110">
          Read More
        </button>
      </div>
    </section>
  );
}
