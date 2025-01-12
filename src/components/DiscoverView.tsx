import React, { useState } from 'react';
import { User } from '../types';
import { FilterBar } from './discover/FilterBar';
import { UserGrid } from './discover/UserGrid';
import { EventsList } from './discover/EventsList';
import { useFilters } from '../hooks/useFilters';
import { ArrowLeft } from 'lucide-react';

interface DiscoverViewProps {
  hobby: string;
  onBack: () => void;
}

export function DiscoverView({ hobby, onBack }: DiscoverViewProps) {
  const { filters, setFilters, filteredUsers } = useFilters(hobby);
  const [activeTab, setActiveTab] = useState<'people' | 'events'>('people');

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <button 
          onClick={onBack}
          className="flex items-center text-gray-600 hover:text-gray-900 mb-6"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Feed
        </button>
        
        <h1 className="text-3xl font-bold mb-6">Discover {hobby}</h1>
        
        <FilterBar filters={filters} onFilterChange={setFilters} />
        
        <div className="flex gap-4 mb-6 border-b">
          <button
            className={`px-4 py-2 ${activeTab === 'people' ? 'border-b-2 border-indigo-500 text-indigo-600' : 'text-gray-500'}`}
            onClick={() => setActiveTab('people')}
          >
            People
          </button>
          <button
            className={`px-4 py-2 ${activeTab === 'events' ? 'border-b-2 border-indigo-500 text-indigo-600' : 'text-gray-500'}`}
            onClick={() => setActiveTab('events')}
          >
            Events
          </button>
        </div>
        
        {activeTab === 'people' ? (
          <UserGrid users={filteredUsers} />
        ) : (
          <EventsList hobby={hobby} location={filters.location} />
        )}
      </div>
    </div>
  );
}
