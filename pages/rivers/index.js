import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"; // Import Footer
import rivers from "@/data/rivers.json";

export default function RiversPage() {
  return (
    <div className="min-h-screen relative">
      {/* Navbar */}
      <Navbar />

      {/* Background Image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/images/rivers/bgri.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.6,
          zIndex: -1,
        }}
      ></div>

      {/* Page Content */}
      <div className="px-6 py-24 relative">
        {/* Heading */}
        <h1 className="text-5xl font-extrabold font-serif text-blue-900 drop-shadow-lg text-center mb-12 leading-tight">
          Rivers in Jharkhand
        </h1>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {rivers.map((river) => (
            <Link key={river.id} href={`/rivers/${river.id}`}>
              <div className="bg-gradient-to-br from-blue-800 to-blue-900 rounded-xl shadow-xl overflow-hidden cursor-pointer hover:shadow-2xl hover:scale-105 transition transform duration-300">
                <img
                  src={river.image}
                  alt={river.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold text-xl text-white mb-2">
                    {river.name}
                  </h3>
                  <p className="text-gray-300 text-sm line-clamp-3">
                    {river.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
