import { useState, useEffect } from "react";
import { FaWater, FaTree, FaLandmark, FaMountain, FaRegSmile } from "react-icons/fa";

export default function Highlights() {
  // Quick insights stats
  const stats = [
    { icon: <FaWater className="w-8 h-8 mx-auto text-green-400" />, label: "Waterfalls", value: 40 },
    { icon: <FaTree className="w-8 h-8 mx-auto text-green-400" />, label: "Forests (sq km)", value: 29400 },
    { icon: <FaRegSmile className="w-8 h-8 mx-auto text-green-400" />, label: "Tribal Festivals", value: 50 },
    { icon: <FaMountain className="w-8 h-8 mx-auto text-green-400" />, label: "Adventure Spots", value: 30 },
    { icon: <FaLandmark className="w-8 h-8 mx-auto text-green-400" />, label: "Historic Monuments", value: 25 },
    { icon: <FaTree className="w-8 h-8 mx-auto text-green-400" />, label: "Wildlife Sanctuaries", value: 10 },
    { icon: <FaWater className="w-8 h-8 mx-auto text-green-400" />, label: "Rivers & Lakes", value: 35 },
    { icon: <FaMountain className="w-8 h-8 mx-auto text-green-400" />, label: "Hiking Trails", value: 20 },
    { icon: <FaLandmark className="w-8 h-8 mx-auto text-green-400" />, label: "Temples & Shrines", value: 15 },
    { icon: <FaRegSmile className="w-8 h-8 mx-auto text-green-400" />, label: "Cultural Villages", value: 12 },
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

  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-extrabold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-300 via-green-400 to-white">
          Highlights of Jharkhand
        </h1>

        {/* Animated Quick Insights */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-16">
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
        </div>

        {/* Info Cards Section */}
        <div className="grid md:grid-cols-3 gap-10 mb-16">
          <div className="bg-gradient-to-r from-green-900/50 to-green-700/30 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold mb-4">Eco-Tourism & Wildlife</h3>
            <p className="text-white/80 text-lg leading-relaxed">
              Jharkhand is home to national parks and wildlife sanctuaries offering immersive eco-tourism experiences.
            </p>
          </div>
          <div className="bg-gradient-to-r from-green-900/50 to-green-700/30 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold mb-4">Rivers & Waterfalls</h3>
            <p className="text-white/80 text-lg leading-relaxed">
              The state’s rivers and waterfalls provide breathtaking scenery and recreational opportunities.
            </p>
          </div>
          <div className="bg-gradient-to-r from-green-900/50 to-green-700/30 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold mb-4">Adventure & Trekking</h3>
            <p className="text-white/80 text-lg leading-relaxed">
              From Parasnath hills to Netarhat plateau, Jharkhand offers trekking routes, camping sites, and adventure sports.
            </p>
          </div>
        </div>

        {/* Additional Frontend Highlights */}
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-black/60 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-bold mb-4">Cultural Festivals</h3>
            <p className="text-white/80 text-lg leading-relaxed">
              Witness vibrant tribal festivals, dance performances, and folk music that reflect Jharkhand's rich heritage.
            </p>
          </div>
          <div className="bg-black/60 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-bold mb-4">Historic Monuments</h3>
            <p className="text-white/80 text-lg leading-relaxed">
              Explore forts, museums, and temples that narrate the history and legacy of the region.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
