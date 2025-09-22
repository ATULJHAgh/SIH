import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import temples from "@/data/temples.json";

export default function TemplesPage() {
  return (
    <div
      className="min-h-screen flex flex-col bg-cover bg-center bg-no-repeat text-gray-100"
      style={{ backgroundImage: "url('/images/temples/bg.webp')" }}
    >
      {/* Navbar */}
      <Navbar />

      {/* Page Content */}
      <div className="max-w-6xl mx-auto px-6 py-24 flex-grow">
<h1 className="text-5xl font-extrabold text-black mb-12 text-center drop-shadow-lg">

          Famous Temples in Jharkhand
        </h1>

        {/* Temple Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {temples.map((temple) => (
            <Link key={temple.id} href={`/temples/${temple.id}`}>
              <div className="bg-gray-800 bg-opacity-90 rounded-2xl shadow-lg overflow-hidden cursor-pointer transform transition hover:scale-105 hover:shadow-2xl flex flex-col h-[320px]">
                <img
                  src={temple.image}
                  alt={temple.name}
                  className="w-full h-48 object-cover flex-shrink-0"
                />
                <div className="p-4 flex flex-col justify-between flex-grow">
                  <h3 className="text-lg font-semibold text-green-400 mb-2">
                    {temple.name}
                  </h3>
                  <p className="text-gray-300 text-sm line-clamp-4">
                    {temple.description}
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
