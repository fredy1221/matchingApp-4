import React from 'react';

interface TimePickerProps {
  selectedTime: string;
  onChange: (time: string) => void;
}

export function TimePicker({ selectedTime, onChange }: TimePickerProps) {
  const timeSlots = Array.from({ length: 24 * 2 }, (_, i) => {
    const hour = Math.floor(i / 2);
    const minute = (i % 2) * 30;
    return `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
  });

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        Select a time
      </label>
      
      <select
        value={selectedTime}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
      >
        <option value="">Select a time</option>
        {timeSlots.map(time => (
          <option key={time} value={time}>
            {new Date(`2000-01-01T${time}`).toLocaleTimeString('en-US', {
              hour: 'numeric',
              minute: '2-digit',
            })}
          </option>
        ))}
      </select>
    </div>
  );
}
