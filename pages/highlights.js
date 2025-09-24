// pages/highlights.js
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FaWater, FaTree, FaLandmark, FaMountain, FaRegSmile, FaNewspaper } from "react-icons/fa";

export default function Highlights() {
  const stats = [
    { icon: <FaWater className="w-8 h-8 mx-auto text-green-400" />, label: "Waterfalls", value: 42 },
    { icon: <FaTree className="w-8 h-8 mx-auto text-green-400" />, label: "Forests (sq km)", value: 29500 },
    { icon: <FaRegSmile className="w-8 h-8 mx-auto text-green-400" />, label: "Tribal Festivals", value: 55 },
    { icon: <FaMountain className="w-8 h-8 mx-auto text-green-400" />, label: "Adventure Spots", value: 33 },
    { icon: <FaLandmark className="w-8 h-8 mx-auto text-green-400" />, label: "Historic Monuments", value: 28 },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const intervals = stats.map((stat, idx) => {
      const step = Math.ceil(stat.value / 100);
      return setInterval(() => {
        setCounts(prev => {
          const newCounts = [...prev];
          if (newCounts[idx] < stat.value) newCounts[idx] += step;
          else {
            newCounts[idx] = stat.value;
            clearInterval(intervals[idx]);
          }
          return newCounts;
        });
      }, 20);
    });

    return () => intervals.forEach(i => clearInterval(i));
  }, []);

  const news = [
    { title: "Rivers in Jharkhand Flow with Life", desc: "Jharkhand's rivers are not just scenic but central to local livelihoods." },
    { title: "Adventure Festival Scheduled in Netarhat", desc: "A week-long adventure festival will attract trekkers and nature lovers." },
    { title: "New Wildlife Sanctuary Opens", desc: "A new protected area ensures safe habitats for local wildlife." },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-black via-green-950 to-green-900 text-gray-100">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-28 pb-16 text-center px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-green-400 via-green-300 to-white bg-clip-text text-transparent">
          Highlights of Jharkhand
        </h1>
        <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
          Discover the natural beauty, cultural gems, and adventurous spots across the state.
        </p>
      </section>

      <main className="flex-grow px-6 md:px-12 space-y-16">
        {/* Animated Stats */}
        <section className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-black/60 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <div className="mb-4">{stat.icon}</div>
              <h2 className="text-3xl font-bold text-green-300">{counts[idx]}</h2>
              <p className="text-white/80 mt-2">{stat.label}</p>
            </div>
          ))}
        </section>

        {/* Featured Sections */}
        <section className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-green-900/50 to-green-700/30 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold mb-4">Waterfalls & Rivers</h3>
            <p className="text-white/80 text-lg leading-relaxed">
              Visit magnificent waterfalls like Dassam, Hundru, and Jonha. Enjoy riverside picnics and boating activities.
            </p>
          </div>
          <div className="bg-gradient-to-r from-green-900/50 to-green-700/30 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold mb-4">Adventure & Trekking</h3>
            <p className="text-white/80 text-lg leading-relaxed">
              From Parasnath hills to Netarhat plateau, experience trekking, camping, and nature trails in lush landscapes.
            </p>
          </div>
          <div className="bg-gradient-to-r from-green-900/50 to-green-700/30 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold mb-4">Wildlife & Eco-Tourism</h3>
            <p className="text-white/80 text-lg leading-relaxed">
              Explore national parks and sanctuaries to witness elephants, tigers, and rich biodiversity in protected areas.
            </p>
          </div>
        </section>

        {/* Live News */}
        <section className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
            <FaNewspaper className="text-green-400" /> News & Updates
          </h2>
          <div className="space-y-4">
            {news.map((n, i) => (
              <div
                key={i}
                className="bg-black/70 p-5 rounded-lg shadow-lg hover:border-l-4 hover:border-green-400 transition"
              >
                <h4 className="text-xl font-semibold text-green-400">{n.title}</h4>
                <p className="text-gray-300">{n.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Extra Info Cards */}
        <section className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          <div className="bg-black/60 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-bold mb-4">Cultural Festivals</h3>
            <p className="text-white/80 text-lg leading-relaxed">
              Enjoy tribal festivals, folk dances, and vibrant celebrations unique to Jharkhand’s heritage.
            </p>
          </div>
          <div className="bg-black/60 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-bold mb-4">Historic Monuments</h3>
            <p className="text-white/80 text-lg leading-relaxed">
              Explore forts, temples, and museums preserving stories of ancient dynasties and cultural evolution.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
