import { useRouter } from "next/router";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import culturalSites from "@/data/culture.json";

export default function CulturalSiteDetail() {
  const router = useRouter();
  const { id } = router.query;

  const site = culturalSites.find((s) => s.id === id);

  if (!site) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        <p className="text-xl text-gray-400">Cultural Site not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />

      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="relative group">
          <img
            src={site.image}
            alt={site.name}
            className="rounded-3xl shadow-xl object-cover w-full h-[400px] transform transition duration-500 group-hover:scale-105"
          />
        </div>

        {/* Info */}
        <div>
          <h1 className="text-5xl font-extrabold text-green-400 mb-6">
            {site.name}
          </h1>
          <p className="text-lg text-gray-300 mb-4">{site.description}</p>
          <p className="text-gray-400 italic mb-4">{site.longDescription}</p>
          <p className="text-gray-400 mb-2">
            <span className="font-semibold">History:</span> {site.history}
          </p>
          <p className="text-gray-400 mb-2">
            <span className="font-semibold">Cultural Overview:</span>{" "}
            {site.culturalOverview}
          </p>
          <p className="text-gray-400 mb-2">
            <span className="font-semibold">Importance:</span> {site.importance}
          </p>
          <p className="text-gray-400 mb-2">
            <span className="font-semibold">Best Time to Visit:</span>{" "}
            {site.bestTime}
          </p>
          <p className="text-gray-400 mb-2">
            <span className="font-semibold">Things to Carry:</span>{" "}
            {site.thingsToCarry}
          </p>
          <p className="text-gray-400 mb-2">
            <span className="font-semibold">Speciality:</span> {site.speciality}
          </p>
        </div>
      </div>

      {/* Highlights Section */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-green-400 mb-8 text-center">
          Highlights
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="bg-gray-800 rounded-xl p-6 shadow hover:shadow-2xl transition transform hover:-translate-y-1">
            <h3 className="font-semibold text-xl mb-2 text-green-400">
              Importance
            </h3>
            <p className="text-gray-300">{site.importance}</p>
          </div>
          <div className="bg-gray-800 rounded-xl p-6 shadow hover:shadow-2xl transition transform hover:-translate-y-1">
            <h3 className="font-semibold text-xl mb-2 text-green-400">
              Speciality
            </h3>
            <p className="text-gray-300">{site.speciality}</p>
          </div>
          <div className="bg-gray-800 rounded-xl p-6 shadow hover:shadow-2xl transition transform hover:-translate-y-1">
            <h3 className="font-semibold text-xl mb-2 text-green-400">
              Best Time & Tips
            </h3>
            <p className="text-gray-300">{site.bestTime}</p>
            <p className="text-gray-300">{site.thingsToCarry}</p>
          </div>
        </div>
      </div>

      <Footer className="bg-gray-900 text-gray-400" />
    </div>
  );
}
