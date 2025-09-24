import { useRef, useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import ExperienceCard from "./ExperienceCard";

export default function Hero() {
  const options = [
    { title: "Mountains", description: "Jharkhand is home to scenic plateaus and hills like Netarhat and Parasnath", image: "/images/mountain.jpeg", link: "/mountains" },
    { title: "Rivers", description: "Jharkhand's rivers, such as Damodar, Subarnarekha, Koel and Sankh", image: "/images/rivers.png", link: "/rivers" },
    { title: "Waterfalls", description: "Witness breathtaking waterfalls like Hundru, Dassam, and Jonha", image: "/images/waterfalls.jpg", link: "/waterfalls" },
    { title: "Forests", description: "Explore dense forests such as Palamu and Hazaribagh ideal for wildlife enthusiasts.", image: "/images/forests.webp", link: "/forests" },
    { title: "Temples", description: "Visit spiritual sites like Baidyanath Dham and Parasnath", image: "/images/temples.jpg", link: "/temples" },
    { title: "Monuments", description: "Discover historic forts, museums, and heritage monuments", image: "/images/monuments.webp", link: "/monuments" },
    { title: "Cultural Sites", description: "Experience tribal art, music, dance, and local festivals for an authentic cultural immersion.", image: "/images/cultural.jpg", link: "/cultural" },
    { title: "Adventure Spots", description: "Try trekking, camping, and other adventure activities in the hills and natural landscapes.", image: "/images/adventure.jpeg", link: "/adventure" },
  ];

  // Horizontal Scroll
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const scrollLeft = scrollRef.current.scrollLeft;
    const maxScroll = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < maxScroll - 1);
  };

  const scrollLeftFn = () => scrollRef.current.scrollBy({ left: -320, behavior: "smooth" });
  const scrollRightFn = () => scrollRef.current.scrollBy({ left: 320, behavior: "smooth" });

  // Quick Insights Stats
  const stats = [
    { label: "Waterfalls", value: 40 },
    { label: "Forests (sq km)", value: 29400 },
    { label: "Tribal Festivals", value: 50 },
    { label: "Adventure Spots", value: 30 },
    { label: "Historic Monuments", value: 25 },
    { label: "Wildlife Sanctuaries", value: 10 },
    { label: "Hiking Trails", value: 20 },
    { label: "Temples & Shrines", value: 15 },
    { label: "Rivers & Lakes", value: 35 },
    { label: "Cultural Villages", value: 12 },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const intervals = stats.map((stat, idx) => {
      const step = Math.ceil(stat.value / 100);
      return setInterval(() => {
        setCounts(prev => {
          const newCounts = [...prev];
          if (newCounts[idx] < stat.value) {
            newCounts[idx] = Math.min(newCounts[idx] + step, stat.value);
          }
          return newCounts;
        });
      }, 20);
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <section className="relative min-h-screen text-center py-20 bg-gray-950 text-white">
      {/* Hero Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/jnbg.jpg"
          alt="Jharkhand Nature"
          fill
          className="object-cover opacity-90"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/40"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center px-6 max-w-7xl mx-auto mt-5">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6 leading-tight font-serif tracking-wide bg-gradient-to-r from-green-200 via-green-400 to-white bg-clip-text text-transparent drop-shadow-lg animate-fadeIn">
          Discover Jharkhand
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl font-medium max-w-3xl text-center mb-16 leading-relaxed drop-shadow-md animate-fadeIn delay-200">
          Explore lush forests, majestic waterfalls, historic monuments, and vibrant cultural heritage. 
          Embark on an unforgettable eco-cultural adventure across Jharkhand.
        </p>

        {/* Horizontal Scroll Cards */}
        <div className="relative w-full flex items-center mb-20">
          {canScrollLeft && (
            <button
              onClick={scrollLeftFn}
              aria-label="Scroll Left"
              className="absolute left-2 z-20 bg-green-700 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-transform hover:scale-110"
            >
              <FaArrowLeft />
            </button>
          )}

          <div
            ref={scrollRef}
            onScroll={checkScroll}
            className="flex gap-6 overflow-x-auto scrollbar-hide px-12 py-4"
          >
            {options.map((item, index) => (
              <ExperienceCard key={index} {...item} />
            ))}
          </div>

          {canScrollRight && (
            <button
              onClick={scrollRightFn}
              aria-label="Scroll Right"
              className="absolute right-2 z-20 bg-green-700 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-transform hover:scale-110"
            >
              <FaArrowRight />
            </button>
          )}
        </div>

        {/* Quick Insights */}
        <section className="max-w-7xl mx-auto px-6 py-16 text-white">
          <h2 className="text-4xl font-bold mb-12 text-green-400 text-center">Quick Insights About Jharkhand</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-green-900/70 to-green-700/40 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:scale-105 transition-transform duration-300"
              >
                <h3 className="text-3xl font-bold text-green-300 mb-2">{counts[idx]}</h3>
                <p className="text-white/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Visit Jharkhand */}
        <section className="max-w-7xl mx-auto px-6 py-20 text-white">
          <h2 className="text-4xl font-bold mt-6 mb-12 text-green-400 text-center">Why Visit Jharkhand?</h2>
          <div className="grid md:grid-cols-3 gap-10 text-center">
            {[
              { title: "Nature & Landscapes", desc: "Explore lush forests, scenic hills, serene rivers, and breathtaking waterfalls." },
              { title: "Cultural Heritage", desc: "Discover tribal traditions, festivals, and historic monuments across the state." },
              { title: "Adventure & Activities", desc: "Trekking, wildlife spotting, and immersive eco-tourism experiences await." },
              { title: "Spiritual & Temples", desc: "Visit iconic temples like Baidyanath Dham and Parasnath, centers of faith and history." },
              { title: "Historic Monuments", desc: "Explore forts, museums, and heritage monuments that tell Jharkhand's rich past." },
              { title: "Local Experiences", desc: "Engage with tribal art, music, dance, and traditional culinary delights." },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-black/60 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:scale-105 transition-transform duration-300"
              >
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-white/80">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Extra Info Sections */}
          <div className="mt-16 space-y-8">
            {[
              { title: "Eco-Tourism & Wildlife", desc: "Jharkhand is home to national parks and wildlife sanctuaries like Betla and Hazaribagh, offering immersive eco-tourism experiences for nature lovers and adventure enthusiasts." },
              { title: "Rivers & Waterfalls", desc: "The state’s rivers and waterfalls, including Subarnarekha, Damodar, Hundru, and Dassam, provide breathtaking scenery and recreational opportunities for travelers." },
              { title: "Adventure & Trekking", desc: "From Parasnath hills to Netarhat plateau, Jharkhand offers trekking routes, camping sites, and adventure sports in untouched natural landscapes." },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-r from-green-900/50 to-green-700/30 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-white/80 text-lg leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
