import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import monuments from "@/data/monuments.json";

export default function MonumentsPage() {
  return (
    <div
      className="min-h-screen flex flex-col bg-cover bg-center bg-no-repeat text-gray-100"
      style={{ backgroundImage: "url('/images/background/monumentbg.png.png')" }}
    >
      {/* Navbar */}
      <Navbar />

      {/* Page Content */}
      <div className="max-w-6xl mx-auto px-6 py-24 flex-grow">
        <h1 className="text-6xl font-extrabold text-black mb-12 text-center drop-shadow-lg">
          Famous Monuments in Jharkhand
        </h1>

        {/* Monuments Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {monuments.map((monument) => (
            <Link key={monument.id} href={`/monuments/${monument.id}`}>
              <div className="bg-gray-800 bg-opacity-90 rounded-2xl shadow-lg overflow-hidden cursor-pointer transform transition hover:scale-105 hover:shadow-2xl flex flex-col">
                {/* Image */}
                <img
                  src={monument.image}
                  alt={monument.name}
                  className="w-full h-48 object-cover"
                />

                {/* Text Content */}
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="text-lg font-semibold text-green-400 mb-2">
                    {monument.name}
                  </h3>
                  <p className="text-gray-300 text-sm line-clamp-4 flex-grow">
                    {monument.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer className="bg-gray-900 text-gray-400" />
    </div>
  );
}
