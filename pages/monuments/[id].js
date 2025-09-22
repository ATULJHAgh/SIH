import { useRouter } from "next/router";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import monuments from "@/data/monuments.json";

export default function MonumentDetail() {
  const router = useRouter();
  const { id } = router.query;

  const monument = monuments.find((m) => m.id === id);

  if (!monument) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white bg-gray-900">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <img
          src={monument.image}
          alt={monument.name}
          className="w-full h-96 object-cover rounded-2xl shadow-lg"
        />
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-green-400">
            {monument.name}
          </h1>
          <p className="text-gray-300 text-lg mb-4">{monument.description}</p>
          <p className="text-gray-400">
            {monument.longDescription ||
              "Explore this monument and learn about its history and significance."}
          </p>
        </div>
      </div>

      {/* Details Section */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold text-green-400 mb-6">
          Important Information
        </h2>
        <ul className="list-disc list-inside space-y-3 text-gray-300">
          <li>
            <span className="font-semibold">History:</span> {monument.history}
          </li>
          <li>
            <span className="font-semibold">Cultural Overview:</span>{" "}
            {monument.culturalOverview}
          </li>
          <li>
            <span className="font-semibold">Importance:</span>{" "}
            {monument.importance}
          </li>
          <li>
            <span className="font-semibold">Best Time to Visit:</span>{" "}
            {monument.bestTime}
          </li>
        </ul>
      </div>

      <Footer className="bg-gray-900 text-gray-400" />
    </div>
  );
}
