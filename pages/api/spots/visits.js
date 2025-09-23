import clientPromise from "@/lib/mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("jharkhand_tourism");

  if (req.method === "GET") {
    const visitsArray = await db.collection("visits").find({}).toArray();
    const visitsObj = {};
    visitsArray.forEach(v => { visitsObj[v.spotId] = v.count; });
    return res.status(200).json(visitsObj);
  }

  if (req.method === "POST") {
    const { spotId } = req.body;
    const existing = await db.collection("visits").findOne({ spotId });
    if (existing) {
      await db.collection("visits").updateOne({ spotId }, { $inc: { count: 1 } });
    } else {
      await db.collection("visits").insertOne({ spotId, count: 1 });
    }
    return res.status(200).json({ message: "Visit recorded" });
  }

  return res.status(405).json({ message: "Method not allowed" });
}
