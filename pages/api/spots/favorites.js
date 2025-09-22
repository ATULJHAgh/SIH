import clientPromise from "@/lib/mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("jharkhand_tourism");
  const favoritesCollection = db.collection("favorites");

  if (req.method === "GET") {
    const { spotId } = req.query;
    const favorites = await favoritesCollection
      .find({ spotId })
      .sort({ timestamp: -1 })
      .toArray();
    return res.status(200).json(favorites);
  }

  if (req.method === "POST") {
    const { spotId, userId } = req.body;
    const existing = await favoritesCollection.findOne({ spotId, userId });

    if (existing) {
      // If already favorited, remove favorite (toggle)
      await favoritesCollection.deleteOne({ spotId, userId });
      return res.status(200).json({ removed: true });
    } else {
      const newFavorite = {
        spotId,
        userId,
        timestamp: new Date(),
      };
      await favoritesCollection.insertOne(newFavorite);
      return res.status(201).json(newFavorite);
    }
  }

  return res.status(405).json({ message: "Method not allowed" });
}
