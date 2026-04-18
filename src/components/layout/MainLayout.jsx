import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import SmartChatWidget from '../support/SmartChatWidget';

export default function MainLayout() {
    return (
        <div className="bg-surface font-body text-on-surface min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow pt-20">
                <Outlet />
            </main>
            <Footer />
            {/* Smart Chatbot Widget */}
            <SmartChatWidget />
        </div>
    );
}
