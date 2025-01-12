import React, { useState } from 'react';
import { HobbyCard } from './HobbyCard';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { hobbies } from '../../data/hobbies';

export function ExplorePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const filteredHobbies = hobbies.filter(hobby =>
    hobby.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleBackClick = () => {
    console.log('Navigating to Main Feed');
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <button
        onClick={handleBackClick}
        className="mb-4 p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
      >
        <ArrowLeft className="w-6 h-6" />
      </button>
      <h1 className="text-3xl font-bold mb-4">Discover New Hobbies and Interests!</h1>
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search hobbies..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredHobbies.map(hobby => (
          <HobbyCard
            key={hobby.name}
            hobby={hobby}
            onTry={() => console.log(`Exploring ${hobby.name}`)}
          />
        ))}
      </div>
    </div>
  );
}
