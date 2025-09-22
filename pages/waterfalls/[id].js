import { useRouter } from "next/router";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import waterfalls from "@/data/waterfalls.json";

export default function WaterfallDetail() {
  const router = useRouter();
  const { id } = router.query;

  const waterfall = waterfalls.find((w) => w.id === id);

  if (!waterfall) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        <p className="text-xl text-gray-400">Waterfall not found.</p>
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
            src={waterfall.image}
            alt={waterfall.name}
            className="rounded-3xl shadow-xl object-cover w-full h-[400px] transform transition duration-500 group-hover:scale-105"
          />
        </div>

        {/* Info */}
        <div>
          <h1 className="text-5xl font-extrabold text-blue-400 mb-6">
            {waterfall.name}
          </h1>
          <p className="text-lg text-gray-300 mb-4">{waterfall.description}</p>
          <p className="text-gray-400 italic mb-4">{waterfall.longDescription}</p>
          <p className="text-gray-400 mb-2">
            <span className="font-semibold">History:</span> {waterfall.history}
          </p>
          <p className="text-gray-400 mb-2">
            <span className="font-semibold">Cultural Overview:</span>{" "}
            {waterfall.culturalOverview}
          </p>
          <p className="text-gray-400 mb-2">
            <span className="font-semibold">Importance:</span> {waterfall.importance}
          </p>
          <p className="text-gray-400 mb-2">
            <span className="font-semibold">Best Time to Visit:</span>{" "}
            {waterfall.bestTime}
          </p>
          <p className="text-gray-400 mb-2">
            <span className="font-semibold">Things to Carry:</span>{" "}
            {waterfall.thingsToCarry}
          </p>
          <p className="text-gray-400 mb-2">
            <span className="font-semibold">Speciality:</span> {waterfall.speciality}
          </p>
        </div>
      </div>

      {/* Highlights Section */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-blue-400 mb-8 text-center">
          Highlights
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="bg-gray-800 rounded-xl p-6 shadow hover:shadow-2xl transition transform hover:-translate-y-1">
            <h3 className="font-semibold text-xl mb-2 text-blue-400">Importance</h3>
            <p className="text-gray-300">{waterfall.importance}</p>
          </div>
          <div className="bg-gray-800 rounded-xl p-6 shadow hover:shadow-2xl transition transform hover:-translate-y-1">
            <h3 className="font-semibold text-xl mb-2 text-blue-400">Speciality</h3>
            <p className="text-gray-300">{waterfall.speciality}</p>
          </div>
          <div className="bg-gray-800 rounded-xl p-6 shadow hover:shadow-2xl transition transform hover:-translate-y-1">
            <h3 className="font-semibold text-xl mb-2 text-blue-400">Best Time & Tips</h3>
            <p className="text-gray-300">{waterfall.bestTime}</p>
            <p className="text-gray-300">{waterfall.thingsToCarry}</p>
          </div>
        </div>
      </div>

      <Footer className="bg-gray-900 text-gray-400" />
    </div>
  );
}
