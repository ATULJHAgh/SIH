import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import culturalSites from "@/data/culture.json";

export default function CulturalSitesPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navbar */}
      <Navbar />

      {/* Background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: "url('/images/culture/bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.5,
        }}
      ></div>

      {/* Page Content */}
      <div className="max-w-6xl mx-auto px-6 py-24">
        <h1 className="text-5xl font-extrabold text-center mb-12 text-green-400 drop-shadow-lg">
          Cultural Sites of Jharkhand
        </h1>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {culturalSites.map((site) => (
            <Link key={site.id} href={`/cultural/${site.id}`}>
              <div className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden cursor-pointer transform transition hover:scale-105 hover:shadow-2xl">
                <img
                  src={site.image}
                  alt={site.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-green-400 mb-2">
                    {site.name}
                  </h3>
                  <p className="text-gray-300 text-sm line-clamp-4">
                    {site.description}
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
