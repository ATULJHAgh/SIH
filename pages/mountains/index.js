  import Link from "next/link";
  import Navbar from "@/components/Navbar";
  import mountains from "../../data/mountains.json";

  export default function MountainsPage() {
    return (
      <div className="min-h-screen relative">
        {/* Navbar */}
        <Navbar />

        {/* Background Image */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/images/mountains/bgmo.jpg')", // background for all mountains
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 1,
            zIndex: -1,
          }}
        ></div>

        {/* Page Content */}
        <div className="px-6 py-24 relative">
          {/* Heading */}
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-serif text-center mb-12 leading-tight 
              bg-gradient-to-r from-[#b87333] to-[#3b1c0a] bg-clip-text text-transparent drop-shadow-2xl"
          >
            Hill Stations in Jharkhand
          </h1>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {mountains.map((mountain) => (
              <Link key={mountain.id} href={`/mountains/${mountain.id}`}>
                <div className="bg-black border border-black rounded-xl shadow-lg overflow-hidden cursor-pointer hover:shadow-green-500/50 hover:scale-105 transition transform">
                  <img
                    src={mountain.image}
                    alt={mountain.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-lg text-white mb-2">
                      {mountain.name}
                    </h3>
                    <p className="text-gray-200 text-sm line-clamp-3">
                      {mountain.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }
