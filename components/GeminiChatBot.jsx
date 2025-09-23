import { useState, useRef, useEffect } from "react";
import { FaRobot, FaTimes } from "react-icons/fa";

export default function GeminiChatBot({ spotId, spotType }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const scrollRef = useRef();

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading, open]);

  // Reset messages when spot changes
  useEffect(() => {
    setMessages([]);
  }, [spotId]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { role: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    const userInput = input;
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/gemini-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ spotId, message: userInput, spotType }),
      });

      const data = await res.json();
      const botMsg = { role: "bot", text: data.reply || "No reply" };
      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      console.error("Gemini error:", err);
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: "Error: Could not get reply." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end">
      {/* Chat Toggle Button */}
      {!open && (
        <button
          className="flex flex-col items-center justify-center w-20 h-20 bg-gradient-to-r from-green-600 to-green-800 hover:from-green-700 hover:to-green-900 shadow-xl rounded-full text-white text-2xl transition-transform duration-300 hover:scale-105"
          onClick={() => setOpen(true)}
        >
          <FaRobot />
          <span className="text-xs mt-1 font-semibold">Chat</span>
        </button>
      )}

      {/* Chat Popup */}
      {open && (
        <div className="w-80 bg-gray-900 rounded-lg shadow-xl flex flex-col overflow-hidden mt-2">
          {/* Header */}
          <div className="flex justify-between items-center bg-green-700 px-4 py-2">
            <h3 className="font-semibold text-white">Any Doubts? Clear It..</h3>
            <button onClick={() => setOpen(false)}>
              <FaTimes className="text-white" />
            </button>
          </div>

          {/* Messages */}
          <div
            ref={scrollRef}
            className="h-64 overflow-y-auto p-3 space-y-2 bg-gray-800"
          >
            {messages.map((m, i) => (
              <div
                key={i}
                className={`${
                  m.role === "user"
                    ? "text-blue-200 text-right"
                    : "text-gray-200 text-left"
                }`}
              >
                <strong>{m.role === "user" ? "You:" : "Guide:"} </strong>
                {m.text}
              </div>
            ))}
            {loading && <p className="text-gray-400">...</p>}
          </div>

          {/* Input */}
          <div className="flex gap-2 p-3 bg-gray-900 border-t border-gray-700">
            <input
              className="flex-1 px-2 py-1 rounded bg-gray-700 text-white focus:outline-none"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask something..."
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button
              className="px-3 py-1 bg-green-600 rounded hover:bg-green-700"
              onClick={sendMessage}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
