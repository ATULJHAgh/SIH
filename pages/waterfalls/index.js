import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import waterfalls from "@/data/waterfalls.json";

export default function WaterfallsPage() {
  return (
   <div
  className="min-h-screen bg-cover bg-center bg-no-repeat"
 style={{
  backgroundImage: "url('/images/background/waterfallBG.png.jpg')",
  opacity: 0.9
}}

>
  <Navbar />

  <div className="max-w-6xl mx-auto px-6 py-24 relative z-10">
    <h1 className="text-6xl font-extrabold text-center mb-12 text-black drop-shadow-lg">
      Waterfalls of Jharkhand
    </h1>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
      {waterfalls.map((waterfall) => (
        <Link key={waterfall.id} href={`/waterfalls/${waterfall.id}`}>
          <div className="bg-gray-800 bg-opacity-70 rounded-2xl shadow-lg overflow-hidden cursor-pointer transform transition hover:scale-105 hover:shadow-2xl">
            <img
              src={waterfall.image}
              alt={waterfall.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-blue-400 mb-2">
                {waterfall.name}
              </h3>
              <p className="text-gray-300 text-sm line-clamp-4">
                {waterfall.description}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  </div>

  <Footer className="bg-gray-900 text-gray-400 relative z-10" />
</div>
  );
}