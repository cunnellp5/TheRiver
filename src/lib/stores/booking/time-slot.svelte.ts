function store() {
  const timeSlot = $state<{ formattedTime: string; period: string; date: Date } | undefined>(undefined);

  return {
    get timeSlot() { return timeSlot; },
    set timeSlot(value) { timeSlot = value; },
  };
}

export const TimeSlotStore = store();
