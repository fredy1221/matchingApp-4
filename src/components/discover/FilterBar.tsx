import React from 'react';
import { MapPin, Clock, Star } from 'lucide-react';
import { Filters } from '../../types';

interface FilterBarProps {
  filters: Filters;
  onFilterChange: (filters: Filters) => void;
}

export function FilterBar({ filters, onFilterChange }: FilterBarProps) {
  return (
    <div className="flex flex-wrap gap-4 mb-8 p-4 bg-white rounded-lg shadow-sm">
      <div className="flex items-center gap-2">
        <MapPin className="w-5 h-5 text-gray-400" />
        <select
          value={filters.location}
          onChange={(e) => onFilterChange({ ...filters, location: e.target.value })}
          className="border-0 bg-transparent focus:ring-0"
        >
          <option value="">Any Location</option>
          <option value="New York">New York</option>
          <option value="Chicago">Chicago</option>
          <option value="Los Angeles">Los Angeles</option>
        </select>
      </div>

      <div className="flex items-center gap-2">
        <Star className="w-5 h-5 text-gray-400" />
        <select
          value={filters.skillLevel}
          onChange={(e) => onFilterChange({ ...filters, skillLevel: e.target.value })}
          className="border-0 bg-transparent focus:ring-0"
        >
          <option value="">Any Skill Level</option>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </select>
      </div>

      <div className="flex items-center gap-2">
        <Clock className="w-5 h-5 text-gray-400" />
        <select
          value={filters.availability}
          onChange={(e) => onFilterChange({ ...filters, availability: e.target.value })}
          className="border-0 bg-transparent focus:ring-0"
        >
          <option value="">Any Time</option>
          <option value="weekdays">Weekdays</option>
          <option value="weekends">Weekends</option>
          <option value="evenings">Evenings</option>
        </select>
      </div>
    </div>
  );
}
