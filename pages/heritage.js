// pages/heritage.js
import { useState, useEffect } from "react";
import { FaLandmark, FaBook, FaTheaterMasks, FaRegSmile, FaMountain, FaTree, FaWater } from "react-icons/fa";

export default function Heritage() {
  // Heritage quick stats
  const stats = [
    { icon: <FaMountain className="w-8 h-8 mx-auto text-yellow-400"/>, label: "Temples & Shrines", value: 50 },
    { icon: <FaLandmark className="w-8 h-8 mx-auto text-yellow-400"/>, label: "Historic Monuments", value: 35 },
    { icon: <FaBook className="w-8 h-8 mx-auto text-yellow-400"/>, label: "Museums", value: 20 },
    { icon: <FaTree className="w-8 h-8 mx-auto text-yellow-400"/>, label: "Tribal Art Centers", value: 15 },
    { icon: <FaTheaterMasks className="w-8 h-8 mx-auto text-yellow-400"/>, label: "Cultural Performance Halls", value: 12 },
    { icon: <FaRegSmile className="w-8 h-8 mx-auto text-yellow-400"/>, label: "Festivals & Rituals", value: 40 },
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
      }, 25);
    });

    return () => intervals.forEach(i => clearInterval(i));
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-extrabold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-yellow-400 to-white">
          Heritage of Jharkhand
        </h1>

        {/* Animated Heritage Stats */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-black/60 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <div className="mb-4">{stat.icon}</div>
              <h2 className="text-3xl font-bold text-yellow-300">{counts[idx]}</h2>
              <p className="text-white/80 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Heritage Info Cards */}
        <div className="grid md:grid-cols-3 gap-10 mb-16">
          <div className="bg-gradient-to-r from-yellow-900/50 to-yellow-700/30 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold mb-4">Temples & Sacred Sites</h3>
            <p className="text-white/80 text-lg leading-relaxed">
              Explore historic temples like Baidyanath Dham and Parasnath, centers of faith for centuries, reflecting the rich spiritual heritage.
            </p>
          </div>
          <div className="bg-gradient-to-r from-yellow-900/50 to-yellow-700/30 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold mb-4">Historic Monuments & Forts</h3>
            <p className="text-white/80 text-lg leading-relaxed">
              Discover forts and palaces that narrate the tales of ancient dynasties, local rulers, and tribal kingdoms.
            </p>
          </div>
          <div className="bg-gradient-to-r from-yellow-900/50 to-yellow-700/30 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold mb-4">Museums & Art Centers</h3>
            <p className="text-white/80 text-lg leading-relaxed">
              Museums across Jharkhand showcase tribal artifacts, traditional tools, and artworks that preserve the cultural legacy.
            </p>
          </div>
        </div>

        {/* Additional Heritage Highlights */}
        <div className="grid md:grid-cols-2 gap-10 mb-16">
          <div className="bg-black/60 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-bold mb-4">Tribal Art & Crafts</h3>
            <p className="text-white/80 text-lg leading-relaxed">
              Witness traditional painting styles like Sohrai and Khovar, pottery, and handcrafted jewelry that celebrate tribal creativity.
            </p>
          </div>
          <div className="bg-black/60 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-bold mb-4">Festivals & Cultural Rituals</h3>
            <p className="text-white/80 text-lg leading-relaxed">
              Participate in festivals like Sarhul, Karma, and Chhath, which offer insights into local customs, music, and dance.
            </p>
          </div>
        </div>

        {/* Quotes / References */}
        <div className="bg-gradient-to-r from-yellow-900/40 to-yellow-700/20 rounded-2xl p-8 shadow-lg text-center">
          <p className="text-xl italic text-white/80 mb-4">
            "Jharkhand’s heritage is a tapestry of temples, tribal art, and ancient monuments that have withstood the test of time."
          </p>
          <p className="text-white/60">— Cultural Heritage Society of India</p>
        </div>
      </div>
    </div>
  );
}
