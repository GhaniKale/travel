import { useState } from 'react';

export default function Promos() {
    const [promos, setPromos] = useState([
        { code: 'SUMMER26', discount: '15%', maxUses: 100, used: 45, expiry: '2026-08-31', status: 'Active' },
        { code: 'EARLYBIRD', discount: '$50', maxUses: 50, used: 50, expiry: '2026-12-31', status: 'Fully Redeemed' },
        { code: 'NUSA10', discount: '10%', maxUses: 500, used: 12, expiry: '2026-12-31', status: 'Active' },
    ]);

    const [isAdding, setIsAdding] = useState(false);
    const [newPromo, setNewPromo] = useState({ code: '', discount: '', maxUses: '', expiry: '' });

    const handleAdd = (e) => {
        e.preventDefault();
        if (!newPromo.code) return;
        setPromos([{ ...newPromo, used: 0, status: 'Active', code: newPromo.code.toUpperCase() }, ...promos]);
        setIsAdding(false);
        setNewPromo({ code: '', discount: '', maxUses: '', expiry: '' });
    };

    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-headline font-bold text-on-surface">Promos & Vouchers</h1>
                    <p className="text-on-surface-variant">Create and track discount codes for marketing campaigns.</p>
                </div>
                <button 
                    onClick={() => setIsAdding(!isAdding)}
                    className="bg-primary text-white px-4 py-2 rounded-xl font-bold hover:bg-primary-fixed hover:text-on-primary-fixed transition-colors flex items-center gap-2"
                >
                    <span className="material-symbols-outlined text-sm">{isAdding ? 'close' : 'add'}</span>
                    {isAdding ? 'Cancel' : 'Create New Voucher'}
                </button>
            </div>

            {isAdding && (
                <form onSubmit={handleAdd} className="bg-surface-container-lowest p-6 border border-primary/40 rounded-2xl shadow-lg relative overflow-hidden animate-in zoom-in-95 duration-200">
                    <div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>
                    <h2 className="text-lg font-bold mb-4">Create New Voucher</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label className="block text-sm font-bold text-on-surface-variant mb-1">Voucher Code</label>
                            <input 
                                type="text" 
                                required
                                placeholder="e.g. BALIVIBES"
                                value={newPromo.code}
                                onChange={e => setNewPromo({...newPromo, code: e.target.value.toUpperCase()})}
                                className="w-full bg-surface-container-low border border-outline-variant rounded-xl px-3 py-2 focus:outline-none focus:border-primary uppercase"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-on-surface-variant mb-1">Discount Amount/Percentage</label>
                            <input 
                                type="text" 
                                required
                                placeholder="e.g. 15% or $50"
                                value={newPromo.discount}
                                onChange={e => setNewPromo({...newPromo, discount: e.target.value})}
                                className="w-full bg-surface-container-low border border-outline-variant rounded-xl px-3 py-2 focus:outline-none focus:border-primary"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-on-surface-variant mb-1">Max Uses</label>
                            <input 
                                type="number" 
                                required
                                placeholder="e.g. 100"
                                value={newPromo.maxUses}
                                onChange={e => setNewPromo({...newPromo, maxUses: e.target.value})}
                                className="w-full bg-surface-container-low border border-outline-variant rounded-xl px-3 py-2 focus:outline-none focus:border-primary"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-on-surface-variant mb-1">Expiry Date</label>
                            <input 
                                type="date" 
                                required
                                value={newPromo.expiry}
                                onChange={e => setNewPromo({...newPromo, expiry: e.target.value})}
                                className="w-full bg-surface-container-low border border-outline-variant rounded-xl px-3 py-2 focus:outline-none focus:border-primary"
                            />
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <button type="submit" className="bg-[#00a569] text-white px-6 py-2 rounded-xl font-bold hover:bg-green-700 transition-colors">Save Voucher</button>
                    </div>
                </form>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {promos.map((promo, i) => (
                    <div key={i} className="bg-surface-container-lowest border border-outline-variant rounded-2xl p-6 shadow-sm overflow-hidden relative group">
                        <div className={`absolute top-0 right-0 px-3 py-1 text-[10px] font-bold rounded-bl-xl ${promo.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                            {promo.status}
                        </div>
                        <p className="text-xs text-on-surface-variant font-bold uppercase tracking-widest mb-1">Promo Code</p>
                        <h3 className="text-2xl font-mono font-bold text-primary mb-4 tracking-wider">{promo.code}</h3>
                        
                        <div className="space-y-2 text-sm border-t border-outline-variant/50 pt-4">
                            <div className="flex justify-between">
                                <span className="text-on-surface-variant">Discount</span>
                                <span className="font-bold text-on-surface">{promo.discount}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-on-surface-variant">Usage</span>
                                <span className="font-bold text-on-surface">{promo.used} / {promo.maxUses}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-on-surface-variant">Expires</span>
                                <span className="font-bold text-on-surface">{promo.expiry}</span>
                            </div>
                        </div>

                        {/* Progress Bar for Usage */}
                        <div className="w-full bg-surface-container mt-4 rounded-full h-1.5">
                            <div 
                                className={`h-1.5 rounded-full ${promo.used >= promo.maxUses ? 'bg-red-500' : 'bg-primary'}`} 
                                style={{ width: `${Math.min((promo.used / promo.maxUses) * 100, 100)}%` }}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
