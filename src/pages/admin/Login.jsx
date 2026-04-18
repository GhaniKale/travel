import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        // Mock authentication delay
        setTimeout(() => {
            if (username === 'admin' && password === 'admin123') {
                localStorage.setItem('isAdminAuth', 'true');
                navigate('/admin');
            } else {
                setError('Invalid username or password. Hint: admin / admin123');
                setIsLoading(false);
            }
        }, 800);
    };

    return (
        <div className="min-h-screen bg-surface flex items-center justify-center p-4">
            <div className="bg-surface-container-lowest max-w-md w-full p-8 rounded-3xl border border-outline-variant shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 editorial-gradient"></div>
                
                <div className="text-center mb-8 inline-block w-full">
                    <span className="material-symbols-outlined text-primary text-5xl mb-2">admin_panel_settings</span>
                    <h1 className="text-2xl font-headline font-bold text-on-surface">Admin Portal</h1>
                    <p className="text-sm text-on-surface-variant mt-1">Please sign in to access the control panel</p>
                </div>

                {error && (
                    <div className="bg-red-50 text-red-600 p-4 rounded-xl text-sm font-bold border border-red-100 mb-6 flex gap-2 items-center">
                        <span className="material-symbols-outlined text-[18px]">error</span>
                        {error}
                    </div>
                )}

                <form onSubmit={handleLogin} className="space-y-5">
                    <div>
                        <label className="block text-sm font-bold text-on-surface-variant mb-2">Username</label>
                        <input 
                            type="text" 
                            className="w-full bg-surface-container-low border border-outline-variant rounded-xl p-3.5 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-shadow"
                            placeholder="Enter username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-on-surface-variant mb-2">Password</label>
                        <input 
                            type="password" 
                            className="w-full bg-surface-container-low border border-outline-variant rounded-xl p-3.5 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-shadow"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    
                    <button 
                        type="submit" 
                        disabled={isLoading}
                        className="w-full bg-primary text-white font-bold py-3.5 rounded-xl hover:bg-primary-fixed hover:text-on-primary-fixed transition-colors flex items-center justify-center gap-2 mt-4"
                    >
                        {isLoading ? (
                            <span className="material-symbols-outlined animate-spin">refresh</span>
                        ) : (
                            <>
                                Sign In
                                <span className="material-symbols-outlined text-sm">arrow_forward</span>
                            </>
                        )}
                    </button>

                    <div className="text-center mt-6">
                        <p className="text-xs text-on-surface-variant font-medium">Demo Credentials: admin / admin123</p>
                    </div>
                </form>
            </div>
        </div>
    );
}
