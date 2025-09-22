import Link from "next/link";

export default function ExperienceCard({ title, description, image, link }) {
  const cardContent = (
    <div className="min-w-[220px] md:min-w-[250px] bg-black bg-opacity-70 backdrop-blur-lg rounded-xl shadow-lg p-4 hover:scale-105 transform transition duration-300 cursor-pointer flex flex-col h-[350px]">
      <img
        src={image}
        alt={title}
        className="w-full h-32 md:h-36 object-cover rounded-lg mb-3 border border-green-500/20 flex-shrink-0"
      />
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-sm text-white/80 overflow-hidden line-clamp-4 flex-grow">
        {description}
      </p>
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
