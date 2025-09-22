import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import forests from "@/data/forests.json";

export default function ForestsPage() {
  return (
    <div className="min-h-screen relative">
      {/* Navbar */}
      <Navbar />

      {/* Background Image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/images/forests/bg.webp')", // background for all forests
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.7,
          zIndex: -1,
        }}
      ></div>

      {/* Page Content */}
      <div className="px-6 py-24 relative">
        {/* Heading */}
        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-serif text-center mb-12 leading-tight
             bg-gradient-to-r bg-white bg-clip-text text-transparent drop-shadow-2xl"
        >
          Forests of Jharkhand
        </h1>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {forests.map((forest) => (
            <Link key={forest.id} href={`/forests/${forest.id}`}>
              <div className="bg-black border border-black rounded-xl shadow-lg overflow-hidden cursor-pointer hover:shadow-green-500/50 hover:scale-105 transition transform">
                <img
                  src={forest.image}
                  alt={forest.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg text-white mb-2">{forest.name}</h3>
                  <p className="text-gray-200 text-sm line-clamp-3">{forest.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer className="bg-black text-gray-400" />
    </div>
  );
}
