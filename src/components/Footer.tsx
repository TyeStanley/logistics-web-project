export default function Footer() {
  return (
    <section className="mt-[150px] w-full bg-gray-800">
      <div className="flex flex-col items-center justify-center py-5">
        <h1 className="text-3xl text-white">Goldentail Logistics LLC</h1>
        <p className="text-white">
          © 2021 Goldentail Logistics LLC. All rights reserved.
        </p>
      </div>

      <div className="flex flex-col items-center justify-center py-5">
        <h1 className="text-3xl text-white">Social Media</h1>
        <p className="text-white">Facebook:</p>
        <p className="text-white">Instagram:</p>
        <p className="text-white">LinkedIn:</p>
      </div>

      <div className="flex flex-col items-center justify-center py-5">
        <h1 className="text-3xl text-white">Address</h1>
        <p className="text-white">Goldentail Logistics LLC</p>
        <p className="text-white">1234 Main St</p>
        <p className="text-white">Houston, TX 77001</p>
      </div>
    </section>
  );
}
