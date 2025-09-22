import { useRef, useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import ExperienceCard from "./ExperienceCard";

export default function Hero() {
  const options = [
    {
      title: "Mountains",
      description:
        "Jharkhand is home to scenic plateaus and hills like Netarhat and Parasnath",
      image: "/images/mountain.jpeg",
       link: "/mountains"
    },
    {
      title: "Rivers",
      description:
        "Jharkhand's rivers, such as Damodar, Subarnarekha, Koel and Sankh",
      image: "/images/rivers.png",
          link: "/rivers"
    },
    {
      title: "Waterfalls",
      description:
        "Witness breathtaking waterfalls like Hundru, Dassam, and Jonha",
      image: "/images/waterfalls.jpg",
      link: "/waterfalls"
    },
    {
      title: "Forests",
      description:
        "Explore dense forests such as Palamu and Hazaribagh ideal for wildlife enthusiasts.",
      image: "/images/Forests.webp",
      link: "/forests"
    },
    {
      title: "Temples",
      description:
        "Visit spiritual sites like Baidyanath Dham and Parasnath",
      image: "/images/temples.jpg",
      link: "/temples"
    },
    {
      title: "Monuments",
      description:
        "Discover historic forts, museums, and heritage monuments ",
         image: "/images/monuments.webp",
          link: "/monuments"
    },
    {
      title: "Cultural Sites",
      description:
        "Experience tribal art, music, dance, and local festivals for an authentic cultural immersion.",
      image: "/images/cultural.jpg",
      link: "/culture"
    },
    {
      title: "Adventure Spots",
      description:
        "Try trekking, camping, and other adventure activities in the hills and natural landscapes.",
      image: "/images/adventure.jpeg",
      link: "/adventure"
    },
  ];

  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const scrollLeft = scrollRef.current.scrollLeft;
    const maxScroll =
      scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < maxScroll - 1);
  };

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  useEffect(() => {
    const ref = scrollRef.current;
    ref.addEventListener("scroll", checkScroll);
    checkScroll(); // initial check
    return () => ref.removeEventListener("scroll", checkScroll);
  }, []);

  return (
    <section className="relative min-h-screen text-center py-20">
      {/* Background */}
      <img
        src="/images/jnbg.jpg"
        alt="Jharkhand Nature"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black opacity-65"></div>

      {/* Hero Content */}
     <div className="relative z-10 flex flex-col items-center px-6 max-w-7xl mt-5 mx-auto">
  <h1
    className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 leading-tight text-center 
               font-serif tracking-wide bg-gradient-to-r from-white via-green-100 to-green-300 
               bg-clip-text text-transparent drop-shadow-lg"
  >
    Welcome to Jharkhand Tourism
  </h1>

  <p
    className="text-lg sm:text-xl md:text-2xl font-medium font-sans 
               text-white max-w-3xl text-center mb-16 leading-relaxed drop-shadow-md"
  >
    Jharkhand Tourism showcases lush forests, waterfalls, wildlife, and ancient temples.  
    A land of natural beauty and cultural heritage, it offers a unique eco-cultural experience.
  </p>

        {/* Horizontal Scroll Cards */}
        <div className="relative w-full flex items-center">
          {/* Left Arrow */}
          {canScrollLeft && (
            <button
              onClick={scrollLeft}
              className="absolute left-0 z-20 bg-green-700 hover:bg-green-600 text-white p-3 rounded-full shadow-md"
            >
              <FaArrowLeft />
            </button>
          )}

          {/* Cards */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide px-12"
          >
            {options.map((item, index) => (
              <ExperienceCard
                key={index}
                title={item.title}
                description={item.description}
                image={item.image}
                link={item.link}
              />
            ))}
          </div>

          {/* Right Arrow */}
          {canScrollRight && (
            <button
              onClick={scrollRight}
              className="absolute right-0 z-20 bg-green-700 hover:bg-green-600 text-white p-3 rounded-full shadow-md"
            >
              <FaArrowRight />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
