import { useState, useMemo } from 'react';
import { mockUsers } from '../data/mockUsers';
import { Filters, User } from '../types';

const initialFilters: Filters = {
  location: '',
  skillLevel: '',
  availability: ''
};

export function useFilters(hobby: string) {
  const [filters, setFilters] = useState<Filters>(initialFilters);

  const filteredUsers = useMemo(() => {
    return mockUsers.filter(user => {
      // Filter by hobby
      if (!user.hobbies.includes(hobby)) return false;

      // Filter by location
      if (filters.location && user.location !== filters.location) return false;

      // Additional filters can be added here
      return true;
    });
  }, [hobby, filters]);

  return {
    filters,
    setFilters,
    filteredUsers
  };
}
