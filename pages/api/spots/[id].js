import clientPromise from "@/lib/mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("jharkhand_tourism");
  const { id } = req.query;

  // Fetch spot info from "spots" collection
  const spot = await db.collection("spots").findOne({ id });

  if (!spot) return res.status(404).json({ error: "Spot not found" });

  res.status(200).json(spot);
}
