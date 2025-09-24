// pages/dashboard.js
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, 
  PieChart, Pie, Cell, ResponsiveContainer, defs, linearGradient, stop 
} from "recharts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import rivers from "@/data/rivers.json";
import forests from "@/data/forests.json";
import monuments from "@/data/monuments.json";
import mountains from "@/data/mountains.json";
import waterfalls from "@/data/waterfalls.json";
import culturalSites from "@/data/culture.json";
import temples from "@/data/temples.json";

const COLORS = ["#00FF85", "#00C49F", "#0088FE", "#FFBB28", "#FF8042", "#9b59b6", "#e74c3c", "#f39c12", "#2ecc71", "#1abc9c"];

const ChartCard = ({ title, description, children, height = 300 }) => (
  <div className="bg-gradient-to-r from-black/80 to-green-900 p-8 rounded-2xl shadow-2xl hover:scale-105 transition-transform">
    <h2 className="text-3xl font-bold text-green-400 mb-4">{title}</h2>
    {description && <p className="text-white/70 mb-6">{description}</p>}
    <div style={{ height }}>{children}</div>
  </div>
);

export default function Dashboard() {

  const mountainData = mountains.map(m => ({ name: m.name, elevation: Math.floor(Math.random() * 1400 + 400) }));
  const forestData = forests.map(f => ({ name: f.name, value: Math.floor(Math.random() * 5000 + 500) }));

  let riverData = rivers.map(r => ({ name: r.name, depth: Math.floor(r.lat * 2 + Math.random() * 20) }));
  if (!riverData.find(r => r.name.toLowerCase() === "damodar")) riverData.push({ name: "Damodar", depth: 35 });

  const templeCategoryData = [
    { name: "Shiva", value: 25 },
    { name: "Jain", value: 15 },
    { name: "Goddess", value: 12 },
    { name: "City", value: 10 },
    { name: "Hill", value: 8 },
    { name: "Jyotirlinga", value: 7 },
    { name: "Dual Deity", value: 6 },
    { name: "Ancient", value: 5 },
    { name: "Heritage", value: 7 },
    { name: "Pilgrimage", value: 5 },
  ];

  const waterfallData = waterfalls.map(w => ({ name: w.name, height: Math.floor(Math.random() * 100 + 30) }));

  const culturalCount = {};
  culturalSites.forEach(c => culturalCount[c.name] = Math.floor(Math.random() * 100 + 10));
  const culturalData = Object.keys(culturalCount).map(key => ({ name: key, value: culturalCount[key] }));

  const monumentData = monuments.map(m => ({ name: m.name, year: Math.floor(Math.random() * 500 + 1500) }));

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white px-6 pt-32 pb-16">
        <div className="max-w-6xl mx-auto space-y-16">
          <h1 className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-green-300 to-white">
            Insights Dashboard
          </h1>

          {/* 1️⃣ Mountains */}
          <ChartCard title="Mountains Elevation" description="Elevation of major mountains">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={mountainData}>
                <defs>
                  <linearGradient id="mountainGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#8B5A2B" />
                    <stop offset="100%" stopColor="#C19A6B" />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#444"/>
                <XAxis dataKey="name" stroke="#fff"/>
                <YAxis stroke="#fff"/>
                <Tooltip />
                <Bar dataKey="elevation" fill="url(#mountainGradient)" />
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>

          {/* 2️⃣ Forests */}
          <ChartCard title="Forests Area Distribution (Acres)" description="Forest sizes represented as Pie Chart" height={400}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={forestData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={140} label>
                  {forestData.map((entry, index) => <Cell key={index} fill={COLORS[index % COLORS.length]} />)}
                </Pie>
                <Tooltip contentStyle={{ backgroundColor:"#222", borderRadius:"8px" }}/>
                <Legend verticalAlign="bottom" wrapperStyle={{ color:"#fff", marginTop:10 }}/>
              </PieChart>
            </ResponsiveContainer>
          </ChartCard>

          {/* 3️⃣ Rivers */}
          <ChartCard title="Rivers Depth Comparison" description="Compare river depths across Jharkhand">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={riverData}>
                <defs>
                  <linearGradient id="riverGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#00BFFF"/>
                    <stop offset="100%" stopColor="#1E90FF"/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#444"/>
                <XAxis dataKey="name" stroke="#fff"/>
                <YAxis stroke="#fff" />
                <Tooltip />
                <Bar dataKey="depth" fill="url(#riverGradient)" />
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>

          {/* 4️⃣ Temples */}
          <ChartCard title="Temples by Top Categories" height={400}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={templeCategoryData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={140} innerRadius={70} label={({ name }) => name}>
                  {templeCategoryData.map((entry, index) => <Cell key={index} fill={COLORS[index % COLORS.length]} />)}
                </Pie>
                <Tooltip contentStyle={{ backgroundColor:"#222", borderRadius:"8px" }}/>
                <Legend verticalAlign="bottom" wrapperStyle={{ color:"#fff", marginTop:10 }}/>
              </PieChart>
            </ResponsiveContainer>
          </ChartCard>

          {/* 5️⃣ Waterfalls */}
          <ChartCard title="Waterfalls Height" description="Height of waterfalls in meters">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={waterfallData}>
                <defs>
                  <linearGradient id="waterfallGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#00008B"/>
                    <stop offset="100%" stopColor="#1E3F66"/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#444"/>
                <XAxis dataKey="name" stroke="#fff"/>
                <YAxis stroke="#fff"/>
                <Tooltip />
                <Bar dataKey="height" fill="url(#waterfallGradient)" />
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>

          {/* 6️⃣ Cultural Sites */}
          <ChartCard title="Cultural Sites Distribution" height={400}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={culturalData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={140} label={({ name }) => name}>
                  {culturalData.map((entry, index) => <Cell key={index} fill={COLORS[index % COLORS.length]} />)}
                </Pie>
                <Tooltip contentStyle={{ backgroundColor:"#222", borderRadius:"8px" }}/>
                <Legend verticalAlign="bottom" wrapperStyle={{ color:"#fff", marginTop:10 }}/>
              </PieChart>
            </ResponsiveContainer>
          </ChartCard>

          {/* 7️⃣ Monuments */}
          <ChartCard title="Monuments History Timeline" description="Timeline of major monuments">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={monumentData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#444"/>
                <XAxis dataKey="name" stroke="#fff"/>
                <YAxis stroke="#fff"/>
                <Tooltip />
                <Bar dataKey="year" fill="#FFBB28" />
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>

        </div>
      </div>

      <Footer />
    </>
  );
}
