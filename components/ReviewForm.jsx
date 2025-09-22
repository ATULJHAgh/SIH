import { useState } from "react";

export default function ReviewForm({ spotId, onReviewAdded }) {
  const [user, setUser] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(5);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("/api/spots/reviews", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ spotId, user, comment, rating }),
    });
    setUser(""); setComment(""); setRating(5);
    onReviewAdded(); // refresh reviews
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-900 p-4 rounded-xl space-y-3">
      <h3 className="text-green-400 font-semibold">Submit a Review</h3>
      <input
        value={user}
        onChange={(e) => setUser(e.target.value)}
        placeholder="Your Name"
        className="w-full p-2 rounded bg-gray-800 text-white"
        required
      />
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Your Comment"
        className="w-full p-2 rounded bg-gray-800 text-white"
        required
      />
      <input
        type="number"
        value={rating}
        onChange={(e) => setRating(Number(e.target.value))}
        min="1"
        max="5"
        className="w-full p-2 rounded bg-gray-800 text-white"
        required
      />
      <button className="bg-green-500 px-4 py-2 rounded hover:bg-green-600 transition">
        Submit
      </button>
    </form>
  );
}
