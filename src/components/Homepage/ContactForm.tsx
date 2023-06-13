"use client";
import { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section
      id="contact"
      className="mt-[150px]"
    >
      <h2 className="mb-5 text-center text-3xl font-semibold text-gray-800">
        Contact Us
      </h2>

      <form
        onSubmit={handleSubmit}
        className="new-shadow mx-auto w-[95%] rounded-xl bg-gray-100 p-5 sm:w-[500px]"
      >
        {/* Name */}
        <div className="mb-5">
          <label
            htmlFor="name"
            className="font-semibold text-gray-700"
          >
            Name*
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 w-full rounded-md border border-gray-300 p-2 shadow-sm outline-none focus:ring focus:ring-blue-700 focus:ring-opacity-50"
          />
        </div>

        {/* Email */}
        <div className="mb-5">
          <label
            htmlFor="email"
            className="font-semibold text-gray-700"
          >
            Email*
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 w-full rounded-md border border-gray-300 p-2 shadow-sm outline-none focus:ring focus:ring-blue-700 focus:ring-opacity-50"
          />
        </div>

        {/* Phone */}
        <div className="mb-5">
          <label
            htmlFor="phone"
            className="font-semibold text-gray-700"
          >
            Phone*
          </label>
          <input
            type="text"
            name="phone"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="mt-1 w-full rounded-md border border-gray-300 p-2 shadow-sm outline-none focus:ring focus:ring-blue-700 focus:ring-opacity-50"
          />
        </div>

        {/* Message */}
        <div className="mb-5">
          <label
            htmlFor="message"
            className="font-semibold text-gray-700"
          >
            Message*
          </label>
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="mt-1 h-[200px] w-full rounded-md border border-gray-300 p-2 shadow-sm outline-none focus:ring focus:ring-blue-700 focus:ring-opacity-50"
          />
        </div>
        <button
          type="submit"
          className="mx-auto block rounded bg-blue-700 px-4 py-2 text-gray-100 transition-all hover:scale-110"
        >
          Send
        </button>
      </form>
    </section>
  );
}
