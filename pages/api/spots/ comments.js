import clientPromise from "@/lib/mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("jharkhand_tourism");
  const commentsCollection = db.collection("comments");

  if (req.method === "GET") {
    const { spotId } = req.query;
    const comments = await commentsCollection
      .find({ spotId })
      .sort({ timestamp: -1 })
      .toArray();
    return res.status(200).json(comments);
  }

  if (req.method === "POST") {
    const { spotId, userName, comment } = req.body;
    const newComment = {
      spotId,
      userName,
      comment,
      timestamp: new Date(),
    };
    await commentsCollection.insertOne(newComment);
    return res.status(201).json(newComment);
  }

  return res.status(405).json({ message: "Method not allowed" });
}
