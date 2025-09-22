import { useRouter } from "next/router";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import rivers from "@/data/rivers.json";

export default function RiverDetail() {
  const router = useRouter();
  const { id } = router.query;

  const river = rivers.find((r) => r.id === id);

  if (!river) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <p className="text-xl text-gray-400">River not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-gray-100">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        {/* Image Left */}
        <div className="relative">
          <img
            src={river.image}
            alt={river.name}
            className="rounded-3xl shadow-2xl object-cover w-full h-[450px] transform transition duration-500 hover:scale-105"
          />
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-50 transition"></div>
        </div>

        {/* Text Right */}
        <div className="flex flex-col justify-center">
          <h1 className="text-5xl font-extrabold mb-6 text-white">{river.name}</h1>
          <p className="text-lg text-gray-300 mb-4">{river.description}</p>
          <p className="text-gray-400 italic">{river.culturalOverview}</p>
        </div>
      </div>

      {/* Highlights Section */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center text-white">River Highlights</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {["Importance", "Fun Fact", "Best Use"].map((title) => (
            <div
              key={title}
              className="bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1"
            >
              <h3 className="font-semibold text-xl mb-2 text-blue-400">{title}</h3>
              <p className="text-gray-300">
                {title === "Importance"
                  ? river.importance
                  : title === "Fun Fact"
                  ? river.funFact || "This river has a fascinating historical and cultural significance."
                  : river.bestUse || "Ideal for eco-tourism, fishing, and riverside relaxation."}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Travel Tips / Notes */}
      <div className="max-w-7xl mx-auto px-6 py-12 border-t border-gray-700">
        <h2 className="text-3xl font-bold mb-6 text-center text-white">Travel Tips</h2>
        <ul className="list-disc list-inside text-gray-400 space-y-3 text-lg text-center">
          <li>Carry water and sun protection while exploring riversides.</li>
          <li>Follow eco-friendly practices: avoid plastic and keep the area clean.</li>
          <li>Hire local guides to understand the cultural and historical significance.</li>
        </ul>
      </div>

      {/* Footer */}
      <Footer className="bg-black text-gray-400" />
    </div>
  );
}
