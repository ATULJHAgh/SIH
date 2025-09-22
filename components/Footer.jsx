import { LuLeaf } from "react-icons/lu";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-green-900 via-green-800 to-green-600 text-white drop-shadow-md ">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between gap-10">
        {/* Brand */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <LuLeaf className="text-green-200 text-2xl" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-white via-green-100 to-green-200 bg-clip-text text-transparent">
              Jharkhand Tourism
            </h1>
          </div>
          <p className="text-white/90 max-w-xs">
            Explore the rich natural beauty, cultural heritage, and vibrant traditions of Jharkhand.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-4">
          <h2 className="font-semibold text-white">Quick Links</h2>
          <ul className="flex flex-col gap-2 text-white/90">
            {["Highlights", "Experiences", "Festivals", "Heritage", "Travel Info"].map(
              (item, i) => (
                <li key={i}>
                  <a
                    href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="hover:text-green-200 transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Social / Contact */}
        <div className="flex flex-col gap-4">
          <h2 className="font-semibold text-white">Follow Us</h2>
          <div className="flex gap-4 text-white/90">
            <a href="#" className="hover:text-green-200 transition-colors duration-300">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-green-200 transition-colors duration-300">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-green-200 transition-colors duration-300">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-green-200/20 mt-6 py-4 text-center text-white/70 text-sm">
        &copy; {new Date().getFullYear()} Jharkhand Tourism. All Rights Reserved.
      </div>
    </footer>
  );
}
