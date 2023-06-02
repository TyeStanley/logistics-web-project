interface NavModalProps {
  toggleMenu: () => void;
}

export default function NavModal({ toggleMenu }: NavModalProps) {
  return (
    <section className="absolute h-screen w-screen bg-gray-500/80">
      <div className="flex h-full flex-col items-center justify-center">
        <ul className="flex flex-col items-center justify-center gap-5 text-white">
          <li>
            <a
              href="#about"
              className="block border-2 border-transparent p-2 transition-all hover:border-b-gray-100"
              onClick={toggleMenu}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="block border-2 border-transparent p-2 transition-all hover:border-b-gray-100"
              onClick={toggleMenu}
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#career"
              className="block border-2 border-transparent p-2 transition-all hover:border-b-gray-100"
              onClick={toggleMenu}
            >
              Career
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="block border-2 border-transparent p-2 transition-all hover:border-b-gray-100"
              onClick={toggleMenu}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
