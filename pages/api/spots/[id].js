import mountains from "@/data/mountains.json";
import rivers from "@/data/rivers.json";
import forests from "@/data/forests.json";
import waterfalls from "@/data/waterfalls.json";
import monuments from "@/data/monuments.json";
import temples from "@/data/temples.json";
import culturalSites from "@/data/culture.json";
import adventures from "@/data/adventures.json";

const spotDataMap = {
  mountain: mountains,
  river: rivers,
  forest: forests,
  waterfall: waterfalls,
  monument: monuments,
  temple: temples,
  cultural: culturalSites,
  adventure: adventures,
};

export default function handler(req, res) {
  const { id, type } = req.query;

  if (!id || !type) {
    return res.status(400).json({ error: "Missing id or type in query" });
  }

  const dataArray = spotDataMap[type.toLowerCase()];
  if (!dataArray) return res.status(400).json({ error: "Invalid spot type" });

  const spot = dataArray.find((s) => s.id === id);
  if (!spot) return res.status(404).json({ error: "Spot not found" });

  res.status(200).json(spot);
}
