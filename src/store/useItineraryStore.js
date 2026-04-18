import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useItineraryStore = create(
  persist(
    (set, get) => ({
      // days is an array of objects: { day: 1, activities: [ { time, title, description, id } ] }
      days: [
        { day: 1, activities: [] }
      ],
      addDay: () => {
        const currentDays = get().days;
        set({
          days: [...currentDays, { day: currentDays.length + 1, activities: [] }]
        });
      },
      removeDay: (dayIndex) => {
        const currentDays = get().days;
        if (currentDays.length > 1) {
          const newDays = currentDays.filter((_, index) => index !== dayIndex);
          // Re-index days
          newDays.forEach((d, i) => { d.day = i + 1; });
          set({ days: newDays });
        }
      },
      addActivity: (dayIndex, activity) => {
        const currentDays = [...get().days];
        currentDays[dayIndex].activities.push({ ...activity, id: Date.now().toString() });
        set({ days: currentDays });
      },
      removeActivity: (dayIndex, activityId) => {
        const currentDays = [...get().days];
        currentDays[dayIndex].activities = currentDays[dayIndex].activities.filter(a => a.id !== activityId);
        set({ days: currentDays });
      },
      clearItinerary: () => set({ days: [{ day: 1, activities: [] }] }),
    }),
    {
      name: 'travel-itinerary-storage',
    }
  )
);
