import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';

export default function AdminLayout() {
    const navigate = useNavigate();
    const location = useLocation();

    // Very basic mock local auth check
    const isAuthenticated = localStorage.getItem('isAdminAuth') === 'true';

    // If not authenticated and not on login page, redirect to login
    if (!isAuthenticated && location.pathname !== '/admin/login') {
        // use setTimeout to prevent React state update during render warnings
        setTimeout(() => navigate('/admin/login'), 0);
        return null;
    }

    const handleLogout = () => {
        localStorage.removeItem('isAdminAuth');
        navigate('/admin/login');
    };

    // If on login page, just render the outlet (the login form itself) without sidebar
    if (location.pathname === '/admin/login') {
        return <Outlet />;
    }

    const navItems = [
        { path: '/admin', icon: 'dashboard', label: 'Dashboard' },
        { path: '/admin/orders', icon: 'receipt_long', label: 'Orders' },
        { path: '/admin/promos', icon: 'sell', label: 'Promos & Vouchers' },
        { path: '/', icon: 'public', label: 'View Site' },
    ];

    const isActive = (path) => {
        if (path === '/admin' && location.pathname !== '/admin') return false;
        return location.pathname.startsWith(path);
    };

    return (
        <div className="min-h-screen bg-surface flex">
            {/* Sidebar */}
            <aside className="w-64 bg-surface-container-lowest border-r border-outline-variant flex flex-col fixed h-full z-20">
                <div className="p-6 border-b border-outline-variant">
                    <Link to="/admin" className="text-xl font-bold tracking-tighter text-sky-900 block">Nusantara Admin</Link>
                    <span className="text-xs text-on-surface-variant font-bold uppercase tracking-widest mt-1 block">Control Panel</span>
                </div>
                <nav className="flex-1 py-6 px-4 space-y-2">
                    {navItems.map((item) => (
                        <Link 
                            key={item.label}
                            to={item.path} 
                            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors font-bold text-sm ${isActive(item.path) ? 'bg-primary/10 text-primary' : 'text-on-surface-variant hover:bg-surface-container hover:text-on-surface'}`}
                        >
                            <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
                            {item.label}
                        </Link>
                    ))}
                </nav>
                <div className="p-4 border-t border-outline-variant">
                    <button 
                        onClick={handleLogout}
                        className="flex items-center gap-3 w-full px-4 py-3 text-red-500 hover:bg-red-50 rounded-xl transition-colors font-bold text-sm"
                    >
                        <span className="material-symbols-outlined text-[20px]">logout</span>
                        Logout
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 ml-64 bg-[#f8fafc] dark:bg-slate-900 min-h-screen p-8">
                <Outlet />
            </main>
        </div>
    );
}
