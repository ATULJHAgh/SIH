import Link from "next/link";

export default function ExperienceCard({ title, description, image, link }) {
  const cardContent = (
    <div className="relative min-w-[220px] md:min-w-[250px] bg-black/60 backdrop-blur-md rounded-2xl shadow-xl p-4 hover:scale-105 hover:shadow-2xl hover:border-green-400 border border-transparent transition-all duration-300 cursor-pointer flex flex-col h-[360px]">
      
      {/* Image */}
      <div className="relative w-full h-36 md:h-40 rounded-xl overflow-hidden mb-3">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
      </div>

      {/* Title */}
      <h3 className="text-lg md:text-xl font-bold text-white mb-2 bg-clip-text text-transparent bg-gradient-to-r from-green-200 via-green-400 to-white">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm text-white/80 line-clamp-5 flex-grow overflow-hidden">
        {description}
      </p>

      {/* Optional CTA */}
      <span className="mt-3 text-green-300 text-sm font-medium hover:text-green-400 transition-colors">
        Explore &rarr;
      </span>
    </div>
  );

  if (link) {
    return (
      <Link href={link} passHref>
        {cardContent}
      </Link>
    );
  }

  return cardContent;
}
