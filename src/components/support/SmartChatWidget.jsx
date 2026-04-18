import { useState } from 'react';

export default function SmartChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { type: 'bot', text: 'Hello! Welcome to Nusantara Travel. How can we help you plan your dream trip today?' }
    ]);
    const [input, setInput] = useState('');

    const toggleChat = () => setIsOpen(!isOpen);

    const handleSend = (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        // Add user message
        setMessages(prev => [...prev, { type: 'user', text: input }]);
        setInput('');

        // Simulate bot reply
        setTimeout(() => {
            setMessages(prev => [...prev, { 
                type: 'bot', 
                text: 'Thanks for reaching out! For a faster response or custom bookings, you can directly connect with our travel agents on WhatsApp.',
                action: true 
            }]);
        }, 800);
    };

    return (
        <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end pb-safe">
            {/* Chat Box */}
            {isOpen && (
                <div className="bg-surface-container-lowest w-80 h-96 mb-4 rounded-2xl shadow-2xl border border-outline-variant flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-300">
                    {/* Header */}
                    <div className="bg-primary text-on-primary px-4 py-3 flex justify-between items-center">
                        <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>support_agent</span>
                            <span className="font-bold text-sm">Travel Assistant</span>
                        </div>
                        <button onClick={toggleChat} className="text-on-primary hover:text-white transition-colors">
                            <span className="material-symbols-outlined text-sm">close</span>
                        </button>
                    </div>

                    {/* Messages Body */}
                    <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-[#f8fafc] dark:bg-slate-900">
                        {messages.map((msg, i) => (
                            <div key={i} className={`flex flex-col max-w-[85%] ${msg.type === 'user' ? 'ml-auto items-end' : 'mr-auto items-start'}`}>
                                <div className={`px-4 py-2 rounded-2xl text-sm ${msg.type === 'user' ? 'bg-primary text-white rounded-br-sm' : 'bg-white dark:bg-slate-800 text-on-surface border border-outline-variant shadow-sm rounded-bl-sm'}`}>
                                    {msg.text}
                                </div>
                                {msg.action && (
                                    <a 
                                        href="https://wa.me/620000000000" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="mt-2 text-xs font-bold bg-[#25D366] text-white px-4 py-2 rounded-xl flex items-center gap-1 shadow-sm hover:scale-105 transition-transform"
                                    >
                                        <svg fill="currentColor" height="14" viewBox="0 0 16 16" width="14" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326z"></path>
                                        </svg>
                                        Chat on WhatsApp
                                    </a>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Input Area */}
                    <form onSubmit={handleSend} className="p-3 bg-white dark:bg-slate-800 border-t border-outline-variant flex gap-2">
                        <input 
                            type="text" 
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Type a message..."
                            className="flex-1 bg-surface-container-low border-none rounded-xl text-sm px-3 py-2 focus:ring-1 focus:ring-primary outline-none"
                        />
                        <button type="submit" disabled={!input.trim()} className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center disabled:opacity-50 hover:bg-primary-fixed hover:text-on-primary-fixed transition-colors">
                            <span className="material-symbols-outlined text-sm">send</span>
                        </button>
                    </form>
                </div>
            )}

            {/* Floating Toggle Button */}
            <button 
                onClick={toggleChat}
                className={`w-14 h-14 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all
                    ${isOpen ? 'bg-surface-container border border-outline-variant text-on-surface' : 'bg-primary text-white'}`}
            >
                <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1", fontSize: '28px'}}>
                    {isOpen ? 'close' : 'chat'}
                </span>
            </button>
        </div>
    );
}
