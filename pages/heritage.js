// pages/heritage.js
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  FaLandmark,
  FaBook,
  FaTheaterMasks,
  FaRegSmile,
  FaMountain,
  FaTree,
  FaWater,
  FaNewspaper,
  FaQuestionCircle,
} from "react-icons/fa";

export default function Heritage() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      q: "What makes Jharkhand's heritage unique?",
      a: "Jharkhand blends tribal traditions, ancient temples, natural landscapes, and cultural festivals into a single vibrant identity.",
    },
    {
      q: "Which are the most famous temples?",
      a: "Baidyanath Dham, Parasnath, and Jagannath Temple in Ranchi are among the most visited sacred places.",
    },
    {
      q: "Are there tribal festivals celebrated widely?",
      a: "Yes, Sarhul, Karma, Sohrai, and Chhath are celebrated with music, dance, and traditional rituals.",
    },
    {
      q: "Does Jharkhand have museums?",
      a: "Yes, multiple museums showcase artifacts, tribal art, and historical items reflecting its deep cultural roots.",
    },
  ];

  const news = [
    {
      title: "Sarhul Festival Attracts Thousands",
      desc: "This year, the Sarhul festival brought together over 50,000 people in Ranchi celebrating tribal culture.",
    },
    {
      title: "Parasnath Temple Declared Heritage Site",
      desc: "The government announced new preservation initiatives at Parasnath, a key pilgrimage site.",
    },
    {
      title: "Sohrai Paintings Exhibit Opens",
      desc: "An art exhibition of Sohrai and Khovar paintings is drawing national attention.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-black via-green-950 to-green-900 text-gray-100">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-28 pb-16 text-center px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-yellow-400 via-green-400 to-green-600 bg-clip-text text-transparent">
          Heritage of Jharkhand
        </h1>
        <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
          A deep dive into the temples, traditions, and cultural richness that
          defines Jharkhand’s legacy.
        </p>
      </section>

      <main className="flex-grow px-6 md:px-12 space-y-16">
        {/* Quick Highlights */}
        <section className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: <FaMountain className="w-10 h-10 text-yellow-400 mx-auto" />,
              title: "50+ Temples",
              desc: "Sacred shrines across the state tell centuries-old tales.",
            },
            {
              icon: <FaLandmark className="w-10 h-10 text-yellow-400 mx-auto" />,
              title: "35+ Monuments",
              desc: "Forts and palaces narrating history and dynasties.",
            },
            {
              icon: <FaBook className="w-10 h-10 text-yellow-400 mx-auto" />,
              title: "20+ Museums",
              desc: "Exhibiting tribal art, artifacts, and cultural heritage.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-black/60 backdrop-blur rounded-2xl p-6 shadow-lg hover:scale-105 transition"
            >
              {item.icon}
              <h3 className="mt-4 text-2xl font-bold">{item.title}</h3>
              <p className="text-gray-300 mt-2">{item.desc}</p>
            </div>
          ))}
        </section>

        {/* Info Sections */}
        <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          <div className="bg-gradient-to-r from-yellow-900/40 to-green-800/40 rounded-2xl p-6 shadow-lg">
            <h3 className="text-2xl font-bold mb-3">Tribal Art & Culture</h3>
            <p className="text-gray-300 leading-relaxed">
              From Sohrai paintings to wood carvings, Jharkhand’s tribal
              communities express identity through vibrant art forms.
            </p>
          </div>
          <div className="bg-gradient-to-r from-green-900/40 to-yellow-800/40 rounded-2xl p-6 shadow-lg">
            <h3 className="text-2xl font-bold mb-3">Festivals & Celebrations</h3>
            <p className="text-gray-300 leading-relaxed">
              Sarhul, Karma, Chhath, and other rituals celebrate nature,
              community, and tradition with unmatched energy.
            </p>
          </div>
        </section>

        {/* Live News Section */}
        <section className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
            <FaNewspaper className="text-green-400" /> Live Heritage News
          </h2>
          <div className="space-y-4">
            {news.map((n, i) => (
              <div
                key={i}
                className="bg-black/70 p-5 rounded-lg shadow-lg hover:border-l-4 hover:border-green-400 transition"
              >
                <h4 className="text-xl font-semibold text-green-400">
                  {n.title}
                </h4>
                <p className="text-gray-300">{n.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
            <FaQuestionCircle className="text-yellow-400" /> FAQs
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-black/60 rounded-lg shadow p-5 cursor-pointer"
                onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
              >
                <h4 className="text-lg font-semibold flex justify-between items-center">
                  {faq.q}
                  <span className="text-green-400">
                    {openFAQ === i ? "−" : "+"}
                  </span>
                </h4>
                {openFAQ === i && (
                  <p className="mt-3 text-gray-300">{faq.a}</p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Quote */}
        <section className="max-w-4xl mx-auto text-center bg-gradient-to-r from-green-900/40 to-yellow-900/40 rounded-2xl p-8 shadow-lg">
          <p className="text-xl italic text-gray-200 mb-4">
            "Jharkhand is not just land, it’s a living museum of traditions,
            nature, and spiritual heritage."
          </p>
          <p className="text-gray-400">— Cultural Heritage Society of India</p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
