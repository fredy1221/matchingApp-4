import React, { useState } from 'react';
import { X } from 'lucide-react';
import { DatePicker } from './DatePicker';
import { TimePicker } from './TimePicker';
import { AvailabilityIndicator } from './AvailabilityIndicator';
import { useAvailability } from '../../hooks/useAvailability';
import type { User } from '../../types';

interface ScheduleModalProps {
  user: User;
  onClose: () => void;
  onSchedule: (message: string) => void;
}

export function ScheduleModal({ user, onClose, onSchedule }: ScheduleModalProps) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [notes, setNotes] = useState('');
  const { isTimeAvailable } = useAvailability(user.id);

  const isAvailable = selectedDate && selectedTime && 
    isTimeAvailable(selectedDate, selectedTime);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDate || !selectedTime) return;

    const date = new Date(selectedDate);
    const [hours, minutes] = selectedTime.split(':');
    date.setHours(parseInt(hours), parseInt(minutes));

    const formattedDate = date.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
    });
    
    const formattedTime = date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
    });

    const message = `[Schedule Request] Hey ${user.name}, would you like to meet on ${formattedDate} at ${formattedTime}?${
      notes ? ` Note: ${notes}` : ''
    }`;

    console.log('Proposing time');
    onSchedule(message);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 animate-fade-in">
      <div className="bg-white rounded-xl w-full max-w-md animate-pop-up">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold">Schedule with {user.name}</h2>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-4 space-y-4">
          <DatePicker
            selectedDate={selectedDate}
            onChange={setSelectedDate}
          />

          <TimePicker
            selectedTime={selectedTime}
            onChange={setSelectedTime}
          />

          <AvailabilityIndicator isAvailable={isAvailable} />

          <div>
            <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">
              Add a note (optional)
            </label>
            <textarea
              id="notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Let's meet at the park..."
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              rows={3}
            />
          </div>

          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 border rounded-lg hover:bg-gray-50 transition-colors"
            >
              Back to Profile
            </button>
            <button
              type="submit"
              disabled={!selectedDate || !selectedTime}
              className="flex-1 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Propose Time
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
