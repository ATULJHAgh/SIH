import Link from "next/link";
import { LuLeaf } from "react-icons/lu";
import { AiOutlineHome, AiOutlineStar, AiOutlineBook, AiOutlinePicture, AiOutlineCalendar } from "react-icons/ai";

export default function Navbar() {
  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 shadow-md"
      style={{
        background: "linear-gradient(90deg, #000000, #1a3a1a, #2e4d2e)", // black → dark green → forest green
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2 text-white font-bold text-2xl font-serif tracking-wide">
          <LuLeaf className="text-green-300 text-2xl" />
          Jharkhand Tourism
        </div>

        {/* Menu Links */}
        <ul className="hidden md:flex gap-6 font-medium text-white items-center">
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

          <li className="group relative">
            <Link
              href="#gallery"
              className="flex items-center gap-1 transition duration-300 hover:text-green-400"
            >
              <AiOutlinePicture className="text-lg" />
              Gallery
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>

          <li className="group relative">
            <Link
              href="#plan-your-visit"
              className="flex items-center gap-1 transition duration-300 hover:text-green-400"
            >
              <AiOutlineCalendar className="text-lg" />
              Plan Your Visit
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Placeholder (optional) */}
        {/* You can add a hamburger menu here for smaller screens */}
      </div>
    </nav>
  );
}
