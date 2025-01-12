import React from 'react';

interface Availability {
  weekday: number;
  startTime: string;
  endTime: string;
}

interface AvailabilitySectionProps {
  availability: Availability[];
  isEditing: boolean;
  onUpdate: (availability: Availability[]) => void;
}

const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export function AvailabilitySection({ availability, isEditing, onUpdate }: AvailabilitySectionProps) {
  const handleToggleDay = (weekday: number) => {
    if (availability.some(a => a.weekday === weekday)) {
      onUpdate(availability.filter(a => a.weekday !== weekday));
    } else {
      onUpdate([...availability, { weekday, startTime: '09:00', endTime: '17:00' }]);
    }
  };

  const handleTimeChange = (weekday: number, field: 'startTime' | 'endTime', value: string) => {
    onUpdate(
      availability.map(a =>
        a.weekday === weekday
          ? { ...a, [field]: value }
          : a
      )
    );
  };

  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold mb-3">Availability</h3>
      <p className="text-sm text-gray-600 mb-4">
        Select the days and times you're typically available for hobby activities
      </p>
      
      <div className="space-y-3 bg-gray-50 p-4 rounded-lg">
        {DAYS.map((day, index) => {
          const dayAvailability = availability.find(a => a.weekday === index);
          
          return (
            <div key={day} className="flex items-center gap-4">
              <label className="flex items-center gap-2 min-w-[120px]">
                <input
                  type="checkbox"
                  checked={!!dayAvailability}
                  onChange={() => isEditing && handleToggleDay(index)}
                  disabled={!isEditing}
                  className="rounded text-indigo-600 focus:ring-indigo-500"
                />
                <span className="font-medium">{day}</span>
              </label>
              
              {dayAvailability && (
                <div className="flex items-center gap-2">
                  <input
                    type="time"
                    value={dayAvailability.startTime}
                    onChange={(e) => isEditing && handleTimeChange(index, 'startTime', e.target.value)}
                    disabled={!isEditing}
                    className="px-2 py-1 border rounded focus:ring-2 focus:ring-indigo-500"
                  />
                  <span className="text-gray-500">to</span>
                  <input
                    type="time"
                    value={dayAvailability.endTime}
                    onChange={(e) => isEditing && handleTimeChange(index, 'endTime', e.target.value)}
                    disabled={!isEditing}
                    className="px-2 py-1 border rounded focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
      
      {!isEditing && availability.length === 0 && (
        <p className="text-gray-500 text-center mt-2">
          No availability set. Click Edit Profile to add your available times.
        </p>
      )}
    </div>
  );
}
