import { useState } from 'react';

export default function Orders() {
    const [searchTerm, setSearchTerm] = useState('');

    const orders = [
        { id: 'ORD-001', customer: 'John Doe', email: 'john@example.com', package: 'Bali Escape', date: '2026-08-24', status: 'Paid', amount: '$549' },
        { id: 'ORD-002', customer: 'Sarah Smith', email: 'sarah@example.com', package: 'Java Volcano', date: '2026-09-02', status: 'Pending', amount: '$1250' },
        { id: 'ORD-003', customer: 'Michael W.', email: 'mw@test.com', package: 'Raja Ampat', date: '2026-09-15', status: 'Paid', amount: '$1299' },
        { id: 'ORD-004', customer: 'Emma T.', email: 'emma.t@mail.com', package: 'Lombok Surf', date: '2026-08-20', status: 'Cancelled', amount: '$420' },
        { id: 'ORD-005', customer: 'Alex Johnson', email: 'alexj@test.com', package: 'Bali Escape', date: '2026-10-05', status: 'Paid', amount: '$1098' },
    ];

    const filteredOrders = orders.filter(o => 
        o.customer.toLowerCase().includes(searchTerm.toLowerCase()) || 
        o.id.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-6xl mx-auto">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-headline font-bold text-on-surface">Order Management</h1>
                    <p className="text-on-surface-variant">View and manage customer bookings.</p>
                </div>
                <button className="bg-primary text-white px-4 py-2 rounded-xl font-bold hover:bg-primary-fixed hover:text-on-primary-fixed transition-colors flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm">download</span>
                    Export CSV
                </button>
            </div>

            <div className="bg-surface-container-lowest border border-outline-variant rounded-2xl shadow-sm overflow-hidden">
                {/* Toolbar */}
                <div className="p-4 border-b border-outline-variant flex flex-col sm:flex-row gap-4 justify-between items-center bg-surface-container-low/50">
                    <div className="relative w-full sm:w-80">
                        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant font-bold">search</span>
                        <input 
                            type="text" 
                            placeholder="Search by Order ID or Name..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 bg-white dark:bg-slate-800 border border-outline-variant rounded-xl text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                        />
                    </div>
                    <div className="flex gap-2">
                        <select className="bg-white dark:bg-slate-800 border border-outline-variant rounded-xl px-3 py-2 text-sm font-bold focus:outline-none focus:border-primary">
                            <option>All Status</option>
                            <option>Paid</option>
                            <option>Pending</option>
                            <option>Cancelled</option>
                        </select>
                    </div>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-surface-container-low text-on-surface-variant text-sm border-b border-outline-variant">
                                <th className="p-4 font-bold">Order ID</th>
                                <th className="p-4 font-bold">Customer</th>
                                <th className="p-4 font-bold">Package</th>
                                <th className="p-4 font-bold">Departure Date</th>
                                <th className="p-4 font-bold">Amount</th>
                                <th className="p-4 font-bold">Status</th>
                                <th className="p-4 font-bold text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm">
                            {filteredOrders.length === 0 ? (
                                <tr>
                                    <td colSpan="7" className="p-8 text-center text-on-surface-variant italic">No orders found.</td>
                                </tr>
                            ) : (
                                filteredOrders.map(order => (
                                    <tr key={order.id} className="border-b border-outline-variant/50 hover:bg-surface-container-low/50 transition-colors">
                                        <td className="p-4 font-mono font-bold text-primary">{order.id}</td>
                                        <td className="p-4">
                                            <p className="font-bold text-on-surface">{order.customer}</p>
                                            <p className="text-xs text-on-surface-variant">{order.email}</p>
                                        </td>
                                        <td className="p-4 text-on-surface">{order.package}</td>
                                        <td className="p-4 text-on-surface-variant">{order.date}</td>
                                        <td className="p-4 font-bold text-on-surface">{order.amount}</td>
                                        <td className="p-4">
                                            <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                                                order.status === 'Paid' ? 'bg-green-100 text-green-700 border border-green-200' :
                                                order.status === 'Pending' ? 'bg-amber-100 text-amber-700 border border-amber-200' :
                                                'bg-red-100 text-red-700 border border-red-200'
                                            }`}>
                                                {order.status}
                                            </span>
                                        </td>
                                        <td className="p-4 text-center">
                                            <button className="text-on-surface-variant hover:text-primary transition-colors p-1" title="View Details">
                                                <span className="material-symbols-outlined text-[20px]">visibility</span>
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
                
                {/* Pagination (Mock) */}
                <div className="p-4 border-t border-outline-variant flex justify-between items-center text-sm text-on-surface-variant">
                    <span>Showing 1 to {filteredOrders.length} of {orders.length} entries</span>
                    <div className="flex gap-1">
                        <button className="px-3 py-1 border border-outline-variant rounded-lg hover:bg-surface-container disabled:opacity-50" disabled>Prev</button>
                        <button className="px-3 py-1 border border-primary bg-primary text-white rounded-lg">1</button>
                        <button className="px-3 py-1 border border-outline-variant rounded-lg hover:bg-surface-container disabled:opacity-50" disabled>Next</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
