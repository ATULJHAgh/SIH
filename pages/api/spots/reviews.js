import clientPromise from "@/lib/mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("jharkhand_tourism");
  const reviewsCollection = db.collection("reviews");

  if (req.method === "GET") {
    const { spotId } = req.query;
    const reviews = await reviewsCollection
      .find({ spotId })
      .sort({ timestamp: -1 })
      .toArray();
    return res.status(200).json(reviews);
  }

  if (req.method === "POST") {
    const { spotId, userName, rating, comment } = req.body;
    const newReview = {
      spotId,
      userName,
      rating, // e.g., 1-5 stars
      comment,
      timestamp: new Date(),
    };
    await reviewsCollection.insertOne(newReview);
    return res.status(201).json(newReview);
  }

  return res.status(405).json({ message: "Method not allowed" });
}
