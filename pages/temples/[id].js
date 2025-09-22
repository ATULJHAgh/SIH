import { useRouter } from "next/router";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import temples from "@/data/temples.json";

export default function TempleDetail() {
  const router = useRouter();
  const { id } = router.query;

  const temple = temples.find((t) => t.id === id);

  if (!temple) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <p className="text-xl text-gray-300">Temple not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <Navbar />

      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-6 lg:px-20 py-16 grid md:grid-cols-2 gap-12 items-center">
        {/* Temple Image */}
        <div className="relative group">
          <img
            src={temple.image}
            alt={temple.name}
            className="w-full h-[450px] object-cover rounded-3xl shadow-2xl transform transition duration-500 group-hover:scale-105"
          />
        </div>

        {/* Info Section */}
        <div>
          <h1 className="text-5xl font-extrabold mb-6 text-green-400">{temple.name}</h1>
          <p className="text-lg mb-4">{temple.description}</p>
          <p className="text-gray-300 italic mb-4">{temple.longDescription}</p>

          <p className="mb-2">
            <span className="font-semibold text-green-400">History:</span> {temple.history}
          </p>
          <p className="mb-2">
            <span className="font-semibold text-green-400">Cultural Overview:</span> {temple.culturalOverview}
          </p>
          <p className="mb-2">
            <span className="font-semibold text-green-400">Importance:</span> {temple.importance}
          </p>
          <p className="mb-2">
            <span className="font-semibold text-green-400">Best Time to Visit:</span> {temple.bestTime}
          </p>
          <p className="mb-2">
            <span className="font-semibold text-green-400">Things to Carry:</span> {temple.thingsToCarry}
          </p>
          <p className="mb-2">
            <span className="font-semibold text-green-400">Speciality:</span> {temple.speciality}
          </p>
        </div>
      </div>

      {/* Highlights Section */}
      <div className="max-w-6xl mx-auto px-6 lg:px-20 py-12">
        <h2 className="text-3xl font-bold mb-8 text-green-300 text-center">Temple Highlights</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1">
            <h3 className="font-semibold text-xl mb-2 text-green-400">History</h3>
            <p className="text-gray-200">{temple.history}</p>
          </div>
          <div className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1">
            <h3 className="font-semibold text-xl mb-2 text-green-400">Cultural Overview</h3>
            <p className="text-gray-200">{temple.culturalOverview}</p>
          </div>
          <div className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1">
            <h3 className="font-semibold text-xl mb-2 text-green-400">Importance</h3>
            <p className="text-gray-200">{temple.importance}</p>
          </div>
          <div className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1">
            <h3 className="font-semibold text-xl mb-2 text-green-400">Best Time & Tips</h3>
            <p className="text-gray-200">{temple.bestTime}</p>
            <p className="text-gray-200">{temple.thingsToCarry}</p>
          </div>
          <div className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1">
            <h3 className="font-semibold text-xl mb-2 text-green-400">Speciality</h3>
            <p className="text-gray-200">{temple.speciality}</p>
          </div>
        </div>
      </div>

      <Footer className="bg-gray-900 text-gray-400" />
    </div>
  );
}
