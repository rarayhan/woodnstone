import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, User, Bot, Loader2 } from 'lucide-react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export const ArchivalConsultant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: [...messages, userMessage] }),
      });

      if (!response.ok) throw new Error('Consultation failed');

      const data = await response.json();
      setMessages(prev => [...prev, data]);
    } catch (error) {
      console.error('Chat error:', error);
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: "Forgive me, scholar. My connection to the archives has been temporarily severed. Please try your inquiry again later."
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 z-[150] w-14 h-14 bg-accent-red text-white flex items-center justify-center shadow-2xl border border-accent-gold/20"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-8 z-[150] w-80 md:w-96 h-[500px] bg-white border border-accent-gold/20 shadow-2xl flex flex-col overflow-hidden font-sans"
          >
            {/* Header */}
            <div className="bg-bg-deep p-4 border-b border-accent-gold/20 flex items-center gap-3">
              <div className="w-8 h-8 bg-accent-red flex items-center justify-center text-white font-serif font-bold text-lg">师</div>
              <div className="flex-1">
                <h4 className="text-[10px] uppercase tracking-widest text-accent-gold font-bold">DeepSeek AI Guide</h4>
                <p className="text-sm font-serif text-text-main">Archival Consultant</p>
              </div>
              <div className="text-[8px] uppercase tracking-widest text-text-dim border border-accent-gold/20 px-2 py-1 rounded-sm">
                Powered by DeepSeek
              </div>
            </div>

            {/* Messages */}
            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-4 space-y-4 bg-bg-surface/30 scroll-smooth"
            >
              {messages.length === 0 && (
                <div className="text-center py-10 px-4">
                  <p className="text-[16px] text-text-dim italic font-serif leading-relaxed">
                    "Welcome, honored scholar. I am at your service to interpret the secrets of ancient Chinese architecture. What wisdom do you seek today?"
                  </p>
                </div>
              )}
              {messages.map((m, i) => (
                <div key={i} className={`flex flex-col ${m.role === 'user' ? 'items-end' : 'items-start'}`}>
                  <span className="text-[8px] uppercase tracking-[0.2em] text-accent-gold font-black mb-1 opacity-60">
                    {m.role === 'user' ? 'Visiting Scholar' : 'Archival Architect'}
                  </span>
                  <div className={`max-w-[85%] p-4 text-[15px] leading-relaxed shadow-md transition-all ${
                    m.role === 'user' 
                      ? 'bg-accent-red text-white rounded-l-2xl rounded-tr-2xl' 
                      : 'bg-[#fafaf5] border border-accent-gold/30 text-text-main font-serif rounded-r-2xl rounded-tl-2xl'
                  }`}>
                    {m.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-[#fafaf5] border border-accent-gold/30 p-3 text-accent-gold rounded-r-2xl rounded-tl-2xl shadow-sm">
                    <Loader2 size={16} className="animate-spin" />
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 bg-white border-t border-accent-gold/10">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Inquire about the archives..."
                  className="flex-1 bg-bg-surface px-3 py-2 text-sm text-text-main focus:outline-none border border-transparent focus:border-accent-gold/30 transition-colors"
                />
                <button
                  onClick={handleSend}
                  disabled={isLoading}
                  className="w-10 h-10 bg-accent-red text-white flex items-center justify-center hover:bg-accent-gold transition-colors disabled:opacity-50"
                >
                  <Send size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
