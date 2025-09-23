// pages/api/spots/comments.js
import clientPromise from "@/lib/mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("jharkhand_tourism");

  if (req.method === "GET") {
    const { spotId } = req.query;
    const comments = await db
      .collection("comments")
      .find({ spotId })
      .sort({ timestamp: -1 })
      .toArray();
    return res.status(200).json(comments);
  }

  if (req.method === "POST") {
    const { spotId, userName, comment, rating } = req.body; // ✅ include rating
    if (!spotId || !userName || !comment || !rating) {
      return res.status(400).json({ error: "Missing fields" });
    }
    const newComment = {
      spotId,
      userName,
      comment,
      rating, // ✅ save rating in DB
      timestamp: new Date(),
    };
    await db.collection("comments").insertOne(newComment);
    return res.status(201).json(newComment);
  }

  res.setHeader("Allow", ["GET", "POST"]);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
