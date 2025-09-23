// pages/waterfalls/[id].js
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import waterfalls from "@/data/waterfalls.json"; // Waterfalls JSON with lat/lng, fees, animals
import GeminiChatBot from "@/components/GeminiChatBot";
import "leaflet/dist/leaflet.css";
import {
  WiDaySunny,
  WiCloud,
  WiRain,
  WiHumidity,
  WiStrongWind,
  WiRaindrops,
} from "react-icons/wi";

const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);

export default function WaterfallDetail() {
  const router = useRouter();
  const { id } = router.query;

  const [waterfall, setWaterfall] = useState(null);
  const [visits, setVisits] = useState(0);
  const [favorites, setFavorites] = useState(false);
  const [favoriteCount, setFavoriteCount] = useState(0);
  const [comments, setComments] = useState([]);
  const [newUserName, setNewUserName] = useState("");
  const [newRating, setNewRating] = useState(0);
  const [newComment, setNewComment] = useState("");
  const [weather, setWeather] = useState(null);

  const userName = "Guest";
  const WEATHER_API_KEY = "110859bca94e3a2daa0e6de2e3e8b674";

  // Load waterfall data
  useEffect(() => {
    if (!id) return;
    const foundWaterfall = waterfalls.find((w) => w.id === id);
    setWaterfall(foundWaterfall);
  }, [id]);

  // Load visits, favorites, comments
  useEffect(() => {
    if (!id) return;

    fetch(`/api/spots/visits`)
      .then((res) => res.json())
      .then((data) => setVisits(data[id] || 0));

    fetch(`/api/spots/favorites`)
      .then((res) => res.json())
      .then((data) => {
        setFavoriteCount(data[id]?.users?.length || 0);
        setFavorites(data[id]?.users?.includes(userName) || false);
      });

    fetch(`/api/spots/comments?spotId=${id}`)
      .then((res) => res.json())
      .then((data) => setComments(Array.isArray(data) ? data : []))
      .catch(() => setComments([]));
  }, [id]);

  // Fetch weather
  useEffect(() => {
    if (!waterfall?.lat || !waterfall?.lng) return;

    const fetchWeather = async () => {
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${waterfall.lat}&lon=${waterfall.lng}&units=metric&appid=${WEATHER_API_KEY}`
        );
        const data = await res.json();
        setWeather(data);
      } catch (err) {
        console.error("Weather fetch error:", err);
      }
    };
    fetchWeather();
  }, [waterfall]);

  const handleVisit = async () => {
    await fetch(`/api/spots/visits`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ spotId: id }),
    });
    setVisits((prev) => prev + 1);
  };

  const handleFavorite = async () => {
    await fetch(`/api/spots/favorites`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ spotId: id, userName }),
    });
    setFavorites(!favorites);
    setFavoriteCount((prev) => (favorites ? prev - 1 : prev + 1));
  };

  const handleComment = async () => {
    if (!newComment.trim() || !newUserName.trim() || newRating === 0) {
      alert("Please enter your name, comment, and select a rating");
      return;
    }
    try {
      const res = await fetch(`/api/spots/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          spotId: id,
          userName: newUserName,
          comment: newComment,
          rating: newRating,
        }),
      });
      if (!res.ok) throw new Error("Failed to save comment");
      const savedComment = await res.json();
      setComments((prev) => [...prev, savedComment]);
      setNewComment("");
      setNewUserName("");
      setNewRating(0);
    } catch (err) {
      console.error(err);
      alert("Could not save comment. Check console for details.");
    }
  };

  if (!waterfall) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        <p>Loading waterfall info...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />

      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <img
          src={waterfall.image}
          alt={waterfall.name}
          className="rounded-3xl shadow-xl w-full h-[400px] object-cover hover:scale-105 transition-transform duration-300"
        />
        <div>
          <h1 className="text-5xl font-extrabold text-green-400 mb-4">
            {waterfall.name}
          </h1>
          <p className="text-gray-300 mb-2">{waterfall.description}</p>
          {waterfall.longDescription && (
            <p className="text-gray-400 mb-2">{waterfall.longDescription}</p>
          )}
          {waterfall.history && (
            <p className="text-gray-400 mb-2">
              <span className="font-semibold">History:</span> {waterfall.history}
            </p>
          )}
          {waterfall.bestTime && (
            <p className="text-gray-400 mb-2">
              <span className="font-semibold">Best Time:</span> {waterfall.bestTime}
            </p>
          )}
          {waterfall.fees && (
            <p className="text-gray-400 mb-2">
              <span className="font-semibold">Entry Fees:</span> {waterfall.fees}
            </p>
          )}
          {waterfall.speciality && (
            <p className="text-gray-400 mb-2">
              <span className="font-semibold">Speciality:</span> {waterfall.speciality}
            </p>
          )}
          {waterfall.animals && waterfall.animals.length > 0 && (
            <p className="text-gray-400 mb-2">
              <span className="font-semibold">Animals:</span> {waterfall.animals.join(", ")}
            </p>
          )}
        </div>
      </div>

      {/* Weather Section */}
      {weather && (
        <div className="max-w-6xl mx-auto px-6 py-6 mb-6">
          <h2 className="text-2xl font-bold mb-4 text-green-400">Current Weather</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-6">
            <div className="bg-gray-800 rounded-lg p-6 flex flex-col items-center justify-center">
              <WiDaySunny size={48} className="mb-2 text-yellow-400" />
              <p className="text-gray-400 font-semibold mb-2">Temperature</p>
              <p className="text-2xl font-bold">{weather.main.temp}°C</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 flex flex-col items-center justify-center text-center">
              {weather.weather[0].main === "Clouds" && <WiCloud size={48} className="mb-2 text-gray-400" />}
              {weather.weather[0].main === "Rain" && <WiRain size={48} className="mb-2 text-blue-400" />}
              {weather.weather[0].main === "Clear" && <WiDaySunny size={48} className="mb-2 text-yellow-400" />}
              <p className="text-gray-400 font-semibold mb-2">Condition</p>
              <p className="text-2xl capitalize">{weather.weather[0].description}</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 flex flex-col items-center justify-center">
              <WiHumidity size={48} className="mb-2 text-blue-300" />
              <p className="text-gray-400 font-semibold mb-2">Humidity</p>
              <p className="text-2xl">{weather.main.humidity}%</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 flex flex-col items-center justify-center">
              <WiStrongWind size={48} className="mb-2 text-green-300" />
              <p className="text-gray-400 font-semibold mb-2">Wind Speed</p>
              <p className="text-2xl">{weather.wind.speed} m/s</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 flex flex-col items-center justify-center">
              <WiRaindrops size={48} className="mb-2 text-blue-500" />
              <p className="text-gray-400 font-semibold mb-2">Precipitation</p>
              <p className="text-2xl">{weather.rain?.["1h"] || 0} mm</p>
            </div>
          </div>
        </div>
      )}

      {/* Map Section */}
      {waterfall.lat && waterfall.lng && (
        <div className="max-w-6xl mx-auto px-6 py-6 relative z-0 mb-6 border-4 border-green-400 rounded-lg">
          <MapContainer
            center={[waterfall.lat, waterfall.lng]}
            zoom={10}
            scrollWheelZoom={true}
            style={{ height: "400px", width: "100%" }}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[waterfall.lat, waterfall.lng]} />
          </MapContainer>
        </div>
      )}

      {/* Comments Section */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-4 text-green-400">Comments & Ratings</h2>
        <div className="flex flex-col space-y-4 mb-4">
          {comments.length > 0 ? (
            comments.map((c, idx) => (
              <div key={idx} className="bg-gray-800 p-3 rounded">
                <p className="font-semibold">{c.userName}:</p>
                <p>{c.comment}</p>
                <div className="text-yellow-400">
                  {"★".repeat(c.rating) + "☆".repeat(5 - c.rating)}
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-400">No comments yet.</p>
          )}
        </div>

        {/* Add Comment Form */}
        <div className="flex flex-col space-y-2">
          <input
            type="text"
            value={newUserName}
            onChange={(e) => setNewUserName(e.target.value)}
            placeholder="Your Name"
            className="px-4 py-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none"
          />
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Add a comment..."
            className="px-4 py-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none resize-none"
            rows={3}
          />
          <div className="flex items-center gap-2">
            <label className="text-gray-300 font-semibold">Rating:</label>
            <select
              value={newRating}
              onChange={(e) => setNewRating(parseInt(e.target.value))}
              className="px-2 py-1 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none"
            >
              {[1, 2, 3, 4, 5].map((num) => (
                <option key={num} value={num}>
                  {num} Star{num > 1 ? "s" : ""}
                </option>
              ))}
            </select>
          </div>
          <button
            onClick={handleComment}
            className="bg-green-600 hover:bg-green-700 px-6 py-2 rounded font-semibold"
          >
            Submit
          </button>
        </div>
      </div>

      {/* Gemini Chatbot */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <GeminiChatBot spotId={id} spotType="waterfall" />
      </div>

      <Footer />
      <div className="text-center py-4 text-gray-400 text-sm bg-gray-800">
        © {new Date().getFullYear()} Jharkhand Tourism
      </div>
    </div>
  );
}
