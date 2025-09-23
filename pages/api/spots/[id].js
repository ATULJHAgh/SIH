import mountains from "@/data/mountains.json";

export default function handler(req, res) {
  const { id } = req.query;
  const spot = mountains.find((m) => m.id === id);

  if (!spot) return res.status(404).json({ error: "Spot not found" });

  res.status(200).json(spot);
}
