import { useRouter } from "next/router";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import forests from "@/data/forests.json";

export default function ForestDetail() {
  const router = useRouter();
  const { id } = router.query;

  const forest = forests.find((f) => f.id === id);

  if (!forest) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <p className="text-xl text-gray-300">Forest not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-6 lg:px-20 py-16 grid md:grid-cols-2 gap-12 items-center">
        {/* Forest Image */}
        <div className="relative group">
          <img
            src={forest.image}
            alt={forest.name}
            className="w-full h-[450px] object-cover rounded-3xl shadow-2xl transform transition duration-500 group-hover:scale-105"
          />
        </div>

        {/* Info Section */}
        <div>
          <h1 className="text-5xl font-extrabold mb-6 text-green-400">{forest.name}</h1>
          <p className="text-lg mb-4">{forest.description}</p>
          <p className="text-gray-300 italic mb-4">{forest.longDescription}</p>

          <p className="mb-2">
            <span className="font-semibold text-green-400">History:</span> {forest.history}
          </p>
          <p className="mb-2">
            <span className="font-semibold text-green-400">Cultural Overview:</span> {forest.culturalOverview}
          </p>
          <p className="mb-2">
            <span className="font-semibold text-green-400">Importance:</span> {forest.importance}
          </p>
          <p className="mb-2">
            <span className="font-semibold text-green-400">Best Time to Visit:</span> {forest.bestTime}
          </p>
          <p className="mb-2">
            <span className="font-semibold text-green-400">Things to Carry:</span> {forest.thingsToCarry}
          </p>
          <p className="mb-2">
            <span className="font-semibold text-green-400">Speciality:</span> {forest.speciality}
          </p>
        </div>
      </div>

      {/* Highlights Section */}
      <div className="max-w-6xl mx-auto px-6 lg:px-20 py-12">
        <h2 className="text-3xl font-bold mb-8 text-green-300 text-center">Forest Highlights</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1">
            <h3 className="font-semibold text-xl mb-2 text-green-400">History</h3>
            <p className="text-gray-200">{forest.history}</p>
          </div>
          <div className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1">
            <h3 className="font-semibold text-xl mb-2 text-green-400">Cultural Overview</h3>
            <p className="text-gray-200">{forest.culturalOverview}</p>
          </div>
          <div className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1">
            <h3 className="font-semibold text-xl mb-2 text-green-400">Importance</h3>
            <p className="text-gray-200">{forest.importance}</p>
          </div>
          <div className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1">
            <h3 className="font-semibold text-xl mb-2 text-green-400">Best Time & Tips</h3>
            <p className="text-gray-200">{forest.bestTime}</p>
            <p className="text-gray-200">{forest.thingsToCarry}</p>
          </div>
          <div className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1">
            <h3 className="font-semibold text-xl mb-2 text-green-400">Speciality</h3>
            <p className="text-gray-200">{forest.speciality}</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer className="bg-gray-900 text-gray-400" />
    </div>
  );
}
