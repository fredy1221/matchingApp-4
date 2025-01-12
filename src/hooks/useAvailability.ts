import { useState, useEffect } from 'react';
import type { Availability } from '../types/scheduling';

// Mock data - In a real app, this would come from your backend
const mockAvailability: Record<string, Availability[]> = {
  'current-user': [
    { userId: 'current-user', weekday: 1, startTime: '09:00', endTime: '17:00' },
    { userId: 'current-user', weekday: 2, startTime: '09:00', endTime: '17:00' },
    { userId: 'current-user', weekday: 3, startTime: '09:00', endTime: '17:00' },
    { userId: 'current-user', weekday: 4, startTime: '09:00', endTime: '17:00' },
    { userId: 'current-user', weekday: 5, startTime: '09:00', endTime: '17:00' },
  ]
};

export function useAvailability(userId: string) {
  const [availability, setAvailability] = useState<Availability[]>([]);

  useEffect(() => {
    // Simulate API call
    setAvailability(mockAvailability[userId] || []);
  }, [userId]);

  const isTimeAvailable = (date: Date, time: string): boolean => {
    const weekday = date.getDay();
    const [hours, minutes] = time.split(':').map(Number);
    const timeValue = hours * 60 + minutes;

    return availability.some(slot => {
      if (slot.weekday !== weekday) return false;

      const [startHours, startMinutes] = slot.startTime.split(':').map(Number);
      const [endHours, endMinutes] = slot.endTime.split(':').map(Number);
      
      const slotStart = startHours * 60 + startMinutes;
      const slotEnd = endHours * 60 + endMinutes;

      return timeValue >= slotStart && timeValue <= slotEnd;
    });
  };

  return {
    availability,
    isTimeAvailable,
  };
}
