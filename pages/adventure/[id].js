import { useRouter } from "next/router";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import adventures from "@/data/adventure.json";

export default function AdventureDetail() {
  const router = useRouter();
  const { id } = router.query;

  const adventure = adventures.find((a) => a.id === id);

  if (!adventure) {
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
          src={adventure.image}
          alt={adventure.name}
          className="w-full h-96 object-cover rounded-2xl shadow-lg"
        />
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-green-400">
            {adventure.name}
          </h1>
          <p className="text-gray-300 text-lg mb-4">
            {adventure.description}
          </p>
          <p className="text-gray-400">
            {adventure.longDescription ||
              "Explore this adventure spot with thrilling activities and scenic beauty."}
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
            <span className="font-semibold">Best Time to Visit:</span>{" "}
            {adventure.bestTime}
          </li>
          <li>
            <span className="font-semibold">Things to Carry:</span>{" "}
            {adventure.thingsToCarry}
          </li>
          <li>
            <span className="font-semibold">Speciality:</span>{" "}
            {adventure.speciality}
          </li>
        </ul>
      </div>

      <Footer className="bg-gray-900 text-gray-400" />
    </div>
  );
}
