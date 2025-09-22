import Link from "next/link";
import { LuLeaf } from "react-icons/lu";

export default function Navbar() {
  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 shadow-md"
      style={{
        background: "linear-gradient(90deg, #000000, #1a3a1a, #2e4d2e)", // black → dark green → forest green
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Brand with Leaf */}
        <div className="flex items-center gap-2 text-white font-bold text-2xl font-serif tracking-wide">
          <LuLeaf className="text-green-300 text-2xl" />
          Jharkhand Tourism
        </div>

        {/* Links */}
        <ul className="hidden md:flex gap-6 font-medium text-white items-center">
          {/* Home Button */}
          <li className="group relative">
            <Link
              href="/"
              className="relative transition duration-300 hover:text-green-400"
            >
              Home
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>

          {/* Existing Links */}
          {["Highlights", "Heritage", "Gallery", "Plan Your Visit"].map(
            (item, i) => (
              <li key={i} className="group relative">
                <Link
                  href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className="relative transition duration-300 hover:text-green-400"
                >
                  {item}
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            )
          )}
        </ul>
      </div>
    </nav>
  );
}
