import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useCurrencyStore } from '../../store/useCurrencyStore';

export default function Dashboard() {
    const { formatPrice } = useCurrencyStore();

    // Mock data for the chart
    const data = [
        { name: 'Jan', revenue: 4000, orders: 24 },
        { name: 'Feb', revenue: 3000, orders: 18 },
        { name: 'Mar', revenue: 5000, orders: 32 },
        { name: 'Apr', revenue: 2780, orders: 15 },
        { name: 'May', revenue: 6890, orders: 48 },
        { name: 'Jun', revenue: 8390, orders: 60 },
    ];

    const stats = [
        { title: 'Total Revenue', value: formatPrice(30060), icon: 'payments', color: 'text-green-600', bg: 'bg-green-100' },
        { title: 'Total Bookings', value: '197', icon: 'confirmation_number', color: 'text-blue-600', bg: 'bg-blue-100' },
        { title: 'Active Tours', value: '12', icon: 'explore', color: 'text-purple-600', bg: 'bg-purple-100' },
        { title: 'Pending Support', value: '4', icon: 'support_agent', color: 'text-amber-600', bg: 'bg-amber-100' },
    ];

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div>
                <h1 className="text-3xl font-headline font-bold text-on-surface">Overview</h1>
                <p className="text-on-surface-variant">Welcome back to your travel dashboard.</p>
            </div>

            {/* Stat Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, i) => (
                    <div key={i} className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant shadow-sm flex items-center gap-4">
                        <div className={`w-14 h-14 ${stat.bg} ${stat.color} rounded-xl flex items-center justify-center shrink-0`}>
                            <span className="material-symbols-outlined" style={{fontSize: '28px'}}>{stat.icon}</span>
                        </div>
                        <div>
                            <p className="text-sm font-bold text-on-surface-variant mb-1">{stat.title}</p>
                            <h3 className="text-2xl font-headline font-bold text-on-surface">{stat.value}</h3>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Main Chart */}
                <div className="lg:col-span-2 bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant shadow-sm">
                    <h2 className="text-lg font-headline font-bold text-on-surface mb-6">Revenue Trend (YTD)</h2>
                    <div className="h-80 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} dy={10} />
                                <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} dx={-10} tickFormatter={(val) => `$${val}`} />
                                <Tooltip 
                                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)' }}
                                    formatter={(value) => [`${value} USD`, 'Revenue']}
                                />
                                <Line type="monotone" dataKey="revenue" stroke="#0ea5e9" strokeWidth={3} dot={{r: 4, strokeWidth: 2}} activeDot={{r: 6}} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Recent Bookings Widget */}
                <div className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant shadow-sm">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-lg font-headline font-bold text-on-surface">Recent Bookings</h2>
                        <button className="text-primary text-sm font-bold hover:underline">View All</button>
                    </div>
                    <div className="space-y-4">
                        {[
                            { name: 'John Doe', pkg: 'Bali Escape', time: '2 hours ago', status: 'Paid' },
                            { name: 'Sarah Smith', pkg: 'Java Volcano', time: '5 hours ago', status: 'Pending' },
                            { name: 'Michael W.', pkg: 'Raja Ampat', time: '1 day ago', status: 'Paid' },
                            { name: 'Emma T.', pkg: 'Lombok Surf', time: '2 days ago', status: 'Failed' },
                        ].map((booking, i) => (
                            <div key={i} className="flex gap-4 items-center p-3 hover:bg-surface-container rounded-xl transition-colors">
                                <div className="w-10 h-10 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center font-bold text-slate-500 uppercase">
                                    {booking.name.charAt(0)}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-bold text-on-surface truncate">{booking.name}</p>
                                    <p className="text-xs text-on-surface-variant truncate">{booking.pkg}</p>
                                </div>
                                <div className="text-right">
                                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                                        booking.status === 'Paid' ? 'bg-green-100 text-green-700' :
                                        booking.status === 'Pending' ? 'bg-amber-100 text-amber-700' :
                                        'bg-red-100 text-red-700'
                                    }`}>
                                        {booking.status}
                                    </span>
                                    <p className="text-[10px] text-on-surface-variant mt-1">{booking.time}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
