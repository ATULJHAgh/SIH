export async function getWeather(lat, lon) {
  const apiKey = process.env.OPENWEATHER_API_KEY; // store your key in .env.local
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`
  );
  if (!res.ok) throw new Error("Failed to fetch weather");
  return res.json();
}
