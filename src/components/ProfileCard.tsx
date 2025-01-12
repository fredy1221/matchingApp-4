import React from 'react';
import { User } from '../types';
import { MapPin, MessageCircle, CalendarClock, X } from 'lucide-react';
import { getHobbyImage } from '../utils/hobbyImages';

interface ProfileCardProps {
  user: User;
  onClose: () => void;
}

export function ProfileCard({ user, onClose }: ProfileCardProps) {
  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 animate-fade-in">
      <div className="bg-white rounded-2xl w-full max-w-md max-h-[90vh] overflow-y-auto animate-pop-up">
        <button 
          onClick={onClose}
          className="absolute right-6 top-6 p-2 bg-white/90 rounded-full"
        >
          <X className="w-6 h-6" />
        </button>
        
        {/* Header Area */}
        <div className="relative h-64">
          <img
            src={user.profileImage}
            alt={user.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
            <h2 className="text-3xl font-bold text-white">{user.name}, {user.age}</h2>
            <div className="flex items-center text-white/90 mt-2">
              <MapPin size={16} className="mr-1" />
              {user.location}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Hobby Specific Area */}
          <div>
            <h3 className="text-lg font-semibold mb-2">About my {user.hobbies[0]}</h3>
            <p className="text-gray-600">
              {user.hobbies[0] === "Piano" 
                ? "I've been playing piano for 10 years and love performing with others!"
                : `I'm passionate about ${user.hobbies[0].toLowerCase()} and looking forward to practicing with others!`}
            </p>
          </div>

          {/* Hobby Image */}
          <img
            src={getHobbyImage(user.hobbies[0])}
            alt={`${user.name}'s ${user.hobbies[0]}`}
            className="w-full h-48 object-cover rounded-lg"
          />

          {/* About Me */}
          <div>
            <h3 className="text-lg font-semibold mb-2">About Me</h3>
            <p className="text-gray-600">{user.bio}</p>
          </div>

          {/* Availability */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Availability</h3>
            <p className="text-gray-600">Available evenings and weekends</p>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-3 gap-4">
            <button className="flex items-center justify-center gap-2 bg-blue-500 text-white py-3 px-4 rounded-lg hover:bg-blue-600 transition-colors">
              <MessageCircle className="w-5 h-5" />
              Message
            </button>
            <button className="flex items-center justify-center gap-2 bg-purple-500 text-white py-3 px-4 rounded-lg hover:bg-purple-600 transition-colors">
              <CalendarClock className="w-5 h-5" />
              Plan
            </button>
            <button 
              onClick={onClose}
              className="flex items-center justify-center gap-2 bg-gray-500 text-white py-3 px-4 rounded-lg hover:bg-gray-600 transition-colors"
            >
              <X className="w-5 h-5" />
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
