import clientPromise from "@/lib/mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("jharkhand_tourism");

  if (req.method === "GET") {
    const favoritesArray = await db.collection("favorites").find({}).toArray();
    const favoritesObj = {};
    favoritesArray.forEach(f => { favoritesObj[f.spotId] = { count: f.users.length, users: f.users }; });
    return res.status(200).json(favoritesObj);
  }

  if (req.method === "POST") {
    const { spotId, userName } = req.body;
    const fav = await db.collection("favorites").findOne({ spotId });
    if (fav) {
      let updatedUsers;
      if (fav.users.includes(userName)) {
        updatedUsers = fav.users.filter(u => u !== userName); // remove favorite
      } else {
        updatedUsers = [...fav.users, userName]; // add favorite
      }
      await db.collection("favorites").updateOne({ spotId }, { $set: { users: updatedUsers } });
    } else {
      await db.collection("favorites").insertOne({ spotId, users: [userName] });
    }
    return res.status(200).json({ message: "Favorite updated" });
  }

  return res.status(405).json({ message: "Method not allowed" });
}
