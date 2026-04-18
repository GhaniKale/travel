import { useState } from 'react';
import { useItineraryStore } from '../store/useItineraryStore';
import { Link } from 'react-router-dom';

export default function ItineraryPlanner() {
    const { days, addDay, removeDay, addActivity, removeActivity, clearItinerary } = useItineraryStore();
    
    // State for the new activity form
    const [selectedDay, setSelectedDay] = useState(0); // index of day
    const [newActivity, setNewActivity] = useState({ time: '08:00', title: '', description: '', location: '' });

    const handleAddActivity = (e) => {
        e.preventDefault();
        if (!newActivity.title) return;
        
        addActivity(selectedDay, newActivity);
        setNewActivity({ time: '08:00', title: '', description: '', location: '' });
    };

    return (
        <div className="pt-24 pb-16 min-h-screen bg-background">
             <div className="max-w-7xl mx-auto px-8">
                 <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                     <div>
                         <h1 className="text-4xl font-headline font-bold text-on-surface mb-2">Itinerary Builder</h1>
                         <p className="text-on-surface-variant max-w-2xl">Plan your perfect trip day by day. Add activities, accommodations, and transport all in one place.</p>
                     </div>
                     <div className="flex gap-3">
                         <button onClick={clearItinerary} className="text-red-500 font-bold hover:underline px-4 py-2 flex items-center gap-2">
                             <span className="material-symbols-outlined text-sm">delete</span> Clear
                         </button>
                         <button onClick={addDay} className="bg-primary/10 text-primary font-bold px-6 py-2 rounded-xl hover:bg-primary/20 transition-colors flex items-center gap-2">
                             <span className="material-symbols-outlined text-sm">add</span> Add Day
                         </button>
                     </div>
                 </div>

                 <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                     
                     {/* Left: Timeline View */}
                     <div className="lg:col-span-2 space-y-6">
                         {days.map((dayObj, dayIndex) => (
                             <div key={dayIndex} className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant shadow-sm relative group">
                                 {days.length > 1 && (
                                    <button 
                                        onClick={() => removeDay(dayIndex)}
                                        className="absolute top-6 right-6 text-outline-variant hover:text-red-500 transition-colors hidden group-hover:block"
                                        title="Delete Day"
                                    >
                                        <span className="material-symbols-outlined">delete</span>
                                    </button>
                                 )}
                                 <h2 className="text-2xl font-headline font-bold text-on-surface mb-6 border-b border-outline-variant/30 pb-4">
                                     Day {dayObj.day}
                                 </h2>
                                 
                                 <div className="space-y-4">
                                     {dayObj.activities.length === 0 ? (
                                         <p className="text-on-surface-variant text-sm italic py-4">No activities planned for this day.</p>
                                     ) : (
                                         dayObj.activities.sort((a,b) => a.time.localeCompare(b.time)).map(activity => (
                                             <div key={activity.id} className="flex gap-4 group/activity">
                                                 <div className="flex flex-col items-center">
                                                     <div className="text-sm font-bold text-primary w-12 text-right shrink-0">{activity.time}</div>
                                                     <div className="w-px h-full bg-outline-variant/50 my-2"></div>
                                                 </div>
                                                 <div className="bg-surface-container-low rounded-xl p-4 flex-1 relative border border-transparent hover:border-outline-variant transition-colors">
                                                     <button 
                                                         onClick={() => removeActivity(dayIndex, activity.id)}
                                                         className="absolute top-4 right-4 text-outline-variant hover:text-red-500 hidden group-hover/activity:block"
                                                     >
                                                         <span className="material-symbols-outlined text-sm">close</span>
                                                     </button>
                                                     <h3 className="font-bold text-on-surface mb-1">{activity.title}</h3>
                                                     {activity.location && (
                                                         <div className="flex items-center text-xs text-on-surface-variant mb-2">
                                                             <span className="material-symbols-outlined text-[14px] mr-1">location_on</span>
                                                             {activity.location}
                                                         </div>
                                                     )}
                                                     <p className="text-sm text-on-surface-variant">{activity.description}</p>
                                                 </div>
                                             </div>
                                         ))
                                     )}
                                     
                                     <button 
                                         onClick={() => setSelectedDay(dayIndex)}
                                         className={`w-full py-3 rounded-xl border border-dashed text-sm font-bold transition-colors flex justify-center items-center gap-2 ${selectedDay === dayIndex ? 'border-primary text-primary bg-primary/5' : 'border-outline-variant text-on-surface-variant hover:border-primary hover:text-primary'}`}
                                     >
                                         <span className="material-symbols-outlined text-sm">add</span> Add Activity to Day {dayObj.day}
                                     </button>
                                 </div>
                             </div>
                         ))}
                     </div>

                     {/* Right: Form */}
                     <div className="lg:col-span-1">
                         <div className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant sticky top-24 shadow-sm">
                             <h3 className="font-headline font-bold text-lg mb-6">Add New Activity</h3>
                             <form onSubmit={handleAddActivity} className="space-y-4">
                                 <div>
                                     <label className="block text-sm font-bold text-on-surface-variant mb-2">Target Day</label>
                                     <select 
                                         value={selectedDay} 
                                         onChange={(e) => setSelectedDay(parseInt(e.target.value))}
                                         className="w-full bg-surface-container-low border border-outline-variant rounded-xl p-3 focus:outline-none focus:border-primary"
                                     >
                                         {days.map((d, i) => (
                                             <option key={i} value={i}>Day {d.day}</option>
                                         ))}
                                     </select>
                                 </div>
                                 <div>
                                     <label className="block text-sm font-bold text-on-surface-variant mb-2">Time</label>
                                     <input 
                                         type="time" 
                                         value={newActivity.time}
                                         onChange={(e) => setNewActivity({...newActivity, time: e.target.value})}
                                         className="w-full bg-surface-container-low border border-outline-variant rounded-xl p-3 focus:outline-none focus:border-primary"
                                         required
                                     />
                                 </div>
                                 <div>
                                     <label className="block text-sm font-bold text-on-surface-variant mb-2">Title / Activity</label>
                                     <input 
                                         type="text" 
                                         value={newActivity.title}
                                         onChange={(e) => setNewActivity({...newActivity, title: e.target.value})}
                                         placeholder="e.g. Visit Tanah Lot Temple"
                                         className="w-full bg-surface-container-low border border-outline-variant rounded-xl p-3 focus:outline-none focus:border-primary"
                                         required
                                     />
                                 </div>
                                 <div>
                                     <label className="block text-sm font-bold text-on-surface-variant mb-2">Location (Optional)</label>
                                     <input 
                                         type="text" 
                                         value={newActivity.location}
                                         onChange={(e) => setNewActivity({...newActivity, location: e.target.value})}
                                         placeholder="e.g. Bali, Indonesia"
                                         className="w-full bg-surface-container-low border border-outline-variant rounded-xl p-3 focus:outline-none focus:border-primary"
                                     />
                                 </div>
                                 <div>
                                     <label className="block text-sm font-bold text-on-surface-variant mb-2">Notes (Optional)</label>
                                     <textarea 
                                         value={newActivity.description}
                                         onChange={(e) => setNewActivity({...newActivity, description: e.target.value})}
                                         placeholder="Any extra details..."
                                         className="w-full bg-surface-container-low border border-outline-variant rounded-xl p-3 focus:outline-none focus:border-primary min-h-[80px]"
                                     ></textarea>
                                 </div>
                                 <button type="submit" className="w-full bg-primary text-white font-bold py-3 rounded-xl hover:bg-primary-fixed hover:text-on-primary-fixed transition-colors">
                                     Add to Itinerary
                                 </button>
                             </form>

                             <div className="mt-8 pt-6 border-t border-outline-variant/50">
                                 <p className="text-sm text-on-surface-variant mb-4">Need inspiration?</p>
                                 <Link to="/packages" className="w-full border border-primary text-primary font-bold py-3 rounded-xl flex justify-center items-center hover:bg-primary/5 transition-colors">
                                     Browse Packages
                                 </Link>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
        </div>
    )
}
