import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import mountains from "@/data/mountains.json";

export default function MountainDetail() {
  const router = useRouter();
  const { id } = router.query;

  const mountain = mountains.find((m) => m.id === id);

  // States
  const [visits, setVisits] = useState(0);
  const [favorites, setFavorites] = useState(false);
  const [favoriteCount, setFavoriteCount] = useState(0);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const userName = "Guest"; // Replace with auth system if available

  // Fetch data from MongoDB
  useEffect(() => {
    if (!id) return;

    // Visits
    fetch(`/api/spots/visits`)
      .then((res) => res.json())
      .then((data) => setVisits(data[id] || 0));

    // Favorites
    fetch(`/api/spots/favorites`)
      .then((res) => res.json())
      .then((data) => {
        setFavoriteCount(data[id]?.count || 0);
        setFavorites(data[id]?.users?.includes(userName) || false);
      });

    // Comments
    fetch(`/api/spots/comments?spotId=${id}`)
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, [id]);

  if (!mountain) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        <p>Loading...</p>
      </div>
    );
  }

  const handleVisit = () => {
    fetch(`/api/spots/visits`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ spotId: id }),
    }).then(() => setVisits(visits + 1));
  };

  const handleFavorite = () => {
    fetch(`/api/spots/favorites`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ spotId: id, userName }),
    }).then(() => {
      setFavorites(!favorites);
      setFavoriteCount(favorites ? favoriteCount - 1 : favoriteCount + 1);
    });
  };

  const handleComment = () => {
    if (!newComment.trim()) return;
    fetch(`/api/spots/comments`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ spotId: id, userName, comment: newComment }),
    }).then(() => {
      setComments([...comments, { userName, comment: newComment }]);
      setNewComment("");
    });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />

      {/* Hero */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <img
          src={mountain.image}
          alt={mountain.name}
          className="rounded-3xl shadow-xl w-full h-[400px] object-cover"
        />
        <div>
          <h1 className="text-5xl font-extrabold text-green-400 mb-4">{mountain.name}</h1>
          <p className="text-gray-300 mb-2">{mountain.description}</p>
          {mountain.longDescription && <p className="text-gray-400 mb-2">{mountain.longDescription}</p>}
          {mountain.history && <p className="text-gray-400 mb-2"><span className="font-semibold">History:</span> {mountain.history}</p>}
          {mountain.culturalOverview && <p className="text-gray-400 mb-2"><span className="font-semibold">Cultural Overview:</span> {mountain.culturalOverview}</p>}
          {mountain.importance && <p className="text-gray-400 mb-2"><span className="font-semibold">Importance:</span> {mountain.importance}</p>}
          {mountain.bestTime && <p className="text-gray-400 mb-2"><span className="font-semibold">Best Time:</span> {mountain.bestTime}</p>}
          {mountain.thingsToCarry && <p className="text-gray-400 mb-2"><span className="font-semibold">Things to Carry:</span> {mountain.thingsToCarry}</p>}
          {mountain.speciality && <p className="text-gray-400 mb-2"><span className="font-semibold">Speciality:</span> {mountain.speciality}</p>}
        </div>
      </div>

      {/* Actions */}
      <div className="max-w-6xl mx-auto px-6 py-6 flex gap-6">
        <button onClick={handleVisit} className="bg-green-600 hover:bg-green-700 px-6 py-2 rounded font-semibold">
          Check-in ({visits})
        </button>
        <button
          onClick={handleFavorite}
          className={`px-6 py-2 rounded font-semibold ${favorites ? "bg-yellow-500 hover:bg-yellow-600" : "bg-gray-700 hover:bg-gray-600"}`}
        >
          {favorites ? "Favorited" : "Add to Favorites"} ({favoriteCount})
        </button>
      </div>

      {/* Comments */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-4 text-green-400">Comments</h2>
        <div className="flex flex-col space-y-4 mb-4">
          {comments.length > 0 ? (
            comments.map((c, idx) => (
              <p key={idx} className="bg-gray-800 p-2 rounded">
                <span className="font-semibold">{c.userName}:</span> {c.comment}
              </p>
            ))
          ) : (
            <p className="text-gray-400">No comments yet.</p>
          )}
        </div>
        <div className="flex gap-4">
          <input
            type="text"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Add a comment..."
            className="flex-1 px-4 py-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none"
          />
          <button onClick={handleComment} className="bg-green-600 hover:bg-green-700 px-6 py-2 rounded font-semibold">
            Submit
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
