import React from 'react';
import { User } from '../types';
import { getHobbyIcon } from '../utils/hobbyIcons';

interface MatchPopupProps {
  user: User;
}

export function MatchPopup({ user }: MatchPopupProps) {
  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 animate-fade-in">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 text-center animate-pop-up">
        <div className="flex justify-center mb-6">
          {getHobbyIcon(user.hobbies[0])}
        </div>
        <h2 className="text-3xl font-bold mb-4">New Hobby Buddy!</h2>
        <p className="text-xl mb-6">
          {user.name} shares your passion for {user.hobbies[0].toLowerCase()}. Let's get started!
        </p>
        <img
          src={user.profileImage}
          alt={user.name}
          className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
        />
      </div>
    </div>
  );
}
