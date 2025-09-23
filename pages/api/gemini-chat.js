import { GoogleGenerativeAI } from "@google/generative-ai";
import mountains from "@/data/mountains.json";
import culturalSites from "@/data/culture.json";
import rivers from "@/data/rivers.json";
import forests from "@/data/forests.json";
import monuments from "@/data/monuments.json";
import temples from "@/data/temples.json";
import waterfalls from "@/data/waterfalls.json";
import adventures from "@/data/adventures.json";

const spotDataMap = {
  mountain: mountains,
  cultural: culturalSites,
  river: rivers,
  forest: forests,
  monument: monuments,
  temple: temples,
  waterfall: waterfalls,
  adventure: adventures,
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { spotId, message, spotType } = req.body;

  if (!spotId || !message || !spotType) {
    return res
      .status(400)
      .json({ error: "Missing spotId, message, or spotType" });
  }

  const dataArray = spotDataMap[spotType.toLowerCase()];
  if (!dataArray) {
    return res.status(400).json({ error: "Invalid spotType" });
  }

  const spot = dataArray.find((s) => s.id === spotId);
  if (!spot) {
    return res.status(404).json({ error: "Spot not found" });
  }

  try {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `
You are a helpful tourism guide. Use the following details:

Name: ${spot.name}
Description: ${spot.description}
History: ${spot.history || "N/A"}
Cultural Overview: ${spot.culturalOverview || "N/A"}
Importance: ${spot.importance || "N/A"}
Best Time: ${spot.bestTime || "N/A"}
Speciality: ${spot.speciality || "N/A"}

User question: ${message}
`;

    const result = await model.generateContent(prompt);
    const reply = result.response.text();

    res.status(200).json({ reply });
  } catch (err) {
    console.error("Gemini API error:", err);
    res.status(500).json({ error: "Failed to get reply from Gemini" });
  }
}
