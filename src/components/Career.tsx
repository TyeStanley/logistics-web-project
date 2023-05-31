export default function Career() {
  return (
    <section
      id="career"
      className="relative h-[700px] pt-[200px]"
    >
      <div className="absolute left-0 right-0 mx-auto h-[425px] w-[90%] rounded-xl bg-[url('../assets/notepaper.jpg')] bg-cover bg-center" />

      <div className="new-shadow relative bottom-[10%] left-[10%] w-[470px] rounded-xl bg-gray-100 p-5">
        <h1 className="text-2xl font-extrabold text-gray-800">
          Take Flight with GoldenTail Logistics: Join our Dynamic Team
        </h1>
        <p className="mt-4 text-gray-700">
          At GoldenTail Logistics, we are thrilled to invite talented
          individuals to join our journey and explore the exciting career
          opportunities that await you. As a leading logistics company, we pride
          ourselves on our commitment to excellence, innovation, and teamwork.
        </p>
        <p className="mt-4 text-gray-700">
          By joining our dynamic team, you will have the chance to unleash your
          potential and contribute to our continued success in the industry. We
          foster a supportive and inclusive work environment where individuals
          can thrive and grow both personally and professionally.
        </p>
        <p className="mt-4 text-gray-700">
          As part of our team, you will have access to a range of development
          programs, training opportunities, and mentorship initiatives to
          enhance your skills and advance your career.
        </p>
        <button className="mt-4 rounded bg-blue-700 p-2 text-gray-100 transition-all hover:scale-110">
          Contact Us
        </button>
      </div>
    </section>
  );
}
