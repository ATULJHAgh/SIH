import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Support() {
  return (
    <div className="bg-gradient-to-b from-black via-green-950 to-black text-white min-h-screen flex flex-col">
      <Navbar />

      {/* Add spacing below Navbar */}
      <div className="h-24"></div>

      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-r from-green-900/70 to-black rounded-3xl mx-6 md:mx-12">
        <h1 className="text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-300 via-green-400 to-white">
          Support & Help Center
        </h1>
        <p className="text-lg text-green-100 max-w-2xl mx-auto">
          Need help with your Jharkhand trip? We’ve got you covered with FAQs, contact
          details, live event support, and more.
        </p>
      </section>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl mx-auto px-6 py-12 space-y-16">
        {/* Contact Info */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-b from-green-800/40 to-black rounded-2xl p-6 shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-green-300">Tourism Helpline</h2>
            <p className="text-white/80">📞 +91 12345 67890</p>
            <p className="text-white/80">✉️ help@jharkhandtourism.in</p>
          </div>
          <div className="bg-gradient-to-b from-green-800/40 to-black rounded-2xl p-6 shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-green-300">Head Office</h2>
            <p className="text-white/80">Jharkhand Tourism Office, Ranchi</p>
            <p className="text-white/80">Mon - Fri: 10am - 6pm</p>
          </div>
          <div className="bg-gradient-to-b from-green-800/40 to-black rounded-2xl p-6 shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-green-300">Emergency Support</h2>
            <p className="text-white/80">🚨 Dial 100 (Police)</p>
            <p className="text-white/80">🚑 Dial 108 (Ambulance)</p>
          </div>
        </div>

        {/* FAQs */}
        <div className="bg-black/60 backdrop-blur-md rounded-2xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-green-300">Frequently Asked Questions</h2>
          <ul className="space-y-4 text-lg text-white/80">
            <li>❓ How can I book a tour package? <br/> ✅ Visit our booking page or call our helpline.</li>
            <li>❓ Are guides available for tribal festivals? <br/> ✅ Yes, professional guides can be booked in advance.</li>
            <li>❓ What’s the best season to visit? <br/> ✅ October to March for cool weather, monsoon for waterfalls.</li>
          </ul>
        </div>

        {/* Live Events & Updates */}
        <div className="bg-gradient-to-r from-green-900/60 to-black rounded-2xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-green-300">Live Events & Updates</h2>
          <p className="text-white/80 mb-4">
            Stay tuned for cultural events, festivals, and special tourism fairs happening across Jharkhand.
          </p>
          <ul className="space-y-3 text-lg text-green-200">
            <li>🎉 Sarhul Festival – April 2025 – Ranchi</li>
            <li>🎭 Tribal Dance Festival – July 2025 – Jamshedpur</li>
            <li>🏞️ Eco-Tourism Fair – October 2025 – Netarhat</li>
          </ul>
        </div>

        {/* Feedback Form */}
        <div className="bg-black/70 rounded-2xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-green-300">Send Us Your Feedback</h2>
          <form className="space-y-4">
            <input type="text" placeholder="Your Name" className="w-full p-3 rounded-md bg-green-950 text-white placeholder-gray-400" />
            <input type="email" placeholder="Your Email" className="w-full p-3 rounded-md bg-green-950 text-white placeholder-gray-400" />
            <textarea placeholder="Your Message" className="w-full p-3 rounded-md bg-green-950 text-white placeholder-gray-400 h-32"></textarea>
            <button type="submit" className="px-6 py-3 bg-gradient-to-r from-green-600 to-green-400 rounded-lg text-black font-bold hover:scale-105 transition">
              Submit Feedback
            </button>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
}
