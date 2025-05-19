
import { useState } from "react";
import { MessageSquare, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Array<{text: string, isUser: boolean}>>([
    {
      text: "Hello! How can we help you with your shipping needs today?",
      isUser: false,
    },
  ]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (message.trim() === "") return;
    
    // Add user message
    setMessages([...messages, { text: message, isUser: true }]);
    
    // Clear input
    setMessage("");
    
    // Simulate response after a short delay
    setTimeout(() => {
      setMessages(prev => [
        ...prev, 
        { 
          text: "Thanks for reaching out! Our team will get back to you shortly. For immediate assistance, please call our customer support at +1 234 567 8900.", 
          isUser: false 
        }
      ]);
    }, 1000);
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-40 bg-brand-blue text-white rounded-full p-4 shadow-lg hover:bg-brand-700 transition-all ${
          isOpen ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
        aria-label="Open live chat"
      >
        <MessageSquare size={24} />
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-6 right-6 z-40 bg-white rounded-lg shadow-xl w-80 sm:w-96 transition-all transform ${
          isOpen
            ? "translate-y-0 opacity-100"
            : "translate-y-12 opacity-0 pointer-events-none"
        }`}
        style={{ maxHeight: "500px" }}
      >
        {/* Chat Header */}
        <div className="bg-brand-blue text-white p-4 rounded-t-lg flex justify-between items-center">
          <h3 className="font-medium">Live Support</h3>
          <button
            onClick={() => setIsOpen(false)}
            className="text-white/80 hover:text-white"
            aria-label="Close chat"
          >
            <X size={18} />
          </button>
        </div>

        {/* Chat Messages */}
        <div className="p-4 overflow-y-auto" style={{ maxHeight: "320px" }}>
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`mb-3 ${
                msg.isUser ? "text-right" : "text-left"
              }`}
            >
              <div
                className={`inline-block p-3 rounded-lg ${
                  msg.isUser
                    ? "bg-brand-blue text-white"
                    : "bg-neutral-100 text-neutral-800"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
        </div>

        {/* Chat Input */}
        <form onSubmit={handleSendMessage} className="p-4 border-t">
          <div className="flex gap-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-brand-blue/30"
            />
            <Button
              type="submit"
              size="sm"
              className="bg-brand-blue hover:bg-brand-700"
              aria-label="Send message"
            >
              <Send size={16} />
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default LiveChat;
