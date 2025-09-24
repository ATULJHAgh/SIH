import Link from "next/link";
import Image from "next/image";
import { AiOutlineHome, AiOutlineStar, AiOutlineBook, AiOutlineDown } from "react-icons/ai";

export default function Navbar() {
  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 shadow-md"
      style={{
        background: "linear-gradient(90deg, #000000, #1a3a1a, #2e4d2e)", // black → dark green → forest green
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo PNG */}
        <div className="flex items-center gap-2">
          <Link href="/">
            <Image
              src="/images/logo1.jpeg"
              alt="Jharkhand Tourism Logo"
              width={140}
              height={50}
              className="cursor-pointer"
            />
          </Link>
        </div>

        {/* Menu Links */}
        <ul className="hidden md:flex gap-6 font-medium text-white items-center">
          {/* Home */}
          <li className="group relative">
            <Link
              href="/"
              className="flex items-center gap-1 transition duration-300 hover:text-green-400"
            >
              <AiOutlineHome className="text-lg" />
              Home
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>

          {/* Highlights */}
          <li className="group relative">
            <Link
              href="/highlights"
              className="flex items-center gap-1 transition duration-300 hover:text-green-400"
            >
              <AiOutlineStar className="text-lg" />
              Highlights
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>

          {/* Heritage */}
          <li className="group relative">
            <Link
              href="/heritage"
              className="flex items-center gap-1 transition duration-300 hover:text-green-400"
            >
              <AiOutlineBook className="text-lg" />
              Heritage
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>

          {/* Supports */}
          <li className="group relative">
            <Link
              href="/supports"
              className="flex items-center gap-1 transition duration-300 hover:text-green-400"
            >
              Help me
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>

          {/* Spots to Go (Dropdown) */}
          <li className="group relative">
            <button className="flex items-center gap-1 transition duration-300 hover:text-green-400">
              Spots to Go <AiOutlineDown className="text-sm mt-0.5" />
            </button>
            {/* Dropdown */}
            <ul className="absolute hidden group-hover:block bg-gray-900 text-white shadow-lg rounded-md mt-2 w-48">
              {[
                { name: "Mountains", link: "/mountains" },
                { name: "Rivers", link: "/rivers" },
                { name: "Waterfalls", link: "/waterfalls" },
                { name: "Forests", link: "/forests" },
                { name: "Temples", link: "/temples" },
                { name: "Monuments", link: "/monuments" },
                { name: "Cultural Sites", link: "/cultural" },
                { name: "Adventure Spots", link: "/adventure" },
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.link}
                    className="block px-4 py-2 hover:bg-green-600 transition"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
}
