import { useMemo } from 'react';

interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  attendees: number;
}

// Mock events data
const mockEvents: Event[] = [
  {
    id: '1',
    title: 'Piano Masterclass',
    date: 'Next Saturday at 2 PM',
    location: 'New York',
    attendees: 12
  },
  {
    id: '2',
    title: 'Group Practice Session',
    date: 'Every Tuesday at 7 PM',
    location: 'Chicago',
    attendees: 8
  },
  {
    id: '3',
    title: 'Beginner Workshop',
    date: 'This Sunday at 11 AM',
    location: 'Los Angeles',
    attendees: 15
  }
];

export function useEvents(hobby: string, location?: string) {
  const events = useMemo(() => {
    let filtered = mockEvents;
    
    if (location) {
      filtered = filtered.filter(event => event.location === location);
    }
    
    return filtered;
  }, [location]);

  return { events };
}
