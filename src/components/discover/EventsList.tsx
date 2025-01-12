import React from 'react';
import { CalendarClock, MapPin, Users } from 'lucide-react';
import { useEvents } from '../../hooks/useEvents';

interface EventsListProps {
  hobby: string;
  location?: string;
}

export function EventsList({ hobby, location }: EventsListProps) {
  const { events } = useEvents(hobby, location);

  if (events.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">No upcoming events found.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {events.map((event) => (
        <div key={event.id} className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
              <div className="flex items-center gap-4 text-gray-600">
                <div className="flex items-center gap-1">
                  <CalendarClock className="w-4 h-4" />
                  {event.date}
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {event.location}
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  {event.attendees} attending
                </div>
              </div>
            </div>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
              Join
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
