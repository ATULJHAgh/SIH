import clientPromise from "@/lib/mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("jharkhand_tourism");
  const visitsCollection = db.collection("visits");

  if (req.method === "GET") {
    const { spotId } = req.query;
    const visits = await visitsCollection
      .find({ spotId })
      .sort({ timestamp: -1 })
      .toArray();
    return res.status(200).json(visits);
  }

  if (req.method === "POST") {
    const { spotId, userId } = req.body;
    const existing = await visitsCollection.findOne({ spotId, userId });

    if (existing) {
      return res.status(200).json({ message: "Already checked in" });
    }

    const newVisit = {
      spotId,
      userId,
      timestamp: new Date(),
    };
    await visitsCollection.insertOne(newVisit);
    return res.status(201).json(newVisit);
  }

  return res.status(405).json({ message: "Method not allowed" });
}
