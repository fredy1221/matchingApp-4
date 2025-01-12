import React from 'react';
import { User } from '../../types';
import { MapPin, MessageCircle } from 'lucide-react';
import { getHobbyIcon } from '../../utils/hobbyIcons';

interface UserGridProps {
  users: User[];
}

export function UserGrid({ users }: UserGridProps) {
  if (users.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">No users found matching your filters.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {users.map((user) => (
        <div key={user.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="relative h-48">
            <img
              src={user.profileImage}
              alt={user.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
              <h3 className="text-white text-xl font-semibold">{user.name}, {user.age}</h3>
              <div className="flex items-center text-white/90">
                <MapPin className="w-4 h-4 mr-1" />
                {user.location}
              </div>
            </div>
          </div>
          
          <div className="p-4">
            <div className="flex items-center gap-2 mb-3">
              {user.hobbies.map((hobby) => (
                <span key={hobby} className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 rounded-full text-sm">
                  {getHobbyIcon(hobby)}
                  {hobby}
                </span>
              ))}
            </div>
            
            <p className="text-gray-600 mb-4 line-clamp-2">{user.bio}</p>
            
            <button className="w-full flex items-center justify-center gap-2 bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors">
              <MessageCircle className="w-5 h-5" />
              Message
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
