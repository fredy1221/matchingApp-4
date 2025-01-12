import React from 'react';
import type { UserProfile } from '../../types/profile';

interface ProfileDetailsProps {
  profile: UserProfile;
  isEditing: boolean;
  onUpdate: (updates: Partial<UserProfile>) => void;
}

export function ProfileDetails({ profile, isEditing, onUpdate }: ProfileDetailsProps) {
  if (isEditing) {
    return (
      <div className="space-y-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Name
          </label>
          <input
            type="text"
            value={profile.name}
            onChange={(e) => onUpdate({ name: e.target.value })}
            placeholder="Enter your name"
            className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Age
            </label>
            <input
              type="number"
              value={profile.age}
              onChange={(e) => onUpdate({ age: parseInt(e.target.value) })}
              placeholder="Your age"
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Location
            </label>
            <input
              type="text"
              value={profile.location}
              onChange={(e) => onUpdate({ location: e.target.value })}
              placeholder="Where are you based?"
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            About Me
          </label>
          <textarea
            value={profile.bio}
            onChange={(e) => onUpdate({ bio: e.target.value })}
            placeholder="Write a short bio about yourself and what you're passionate about..."
            rows={4}
            className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4 mb-6">
      <h2 className="text-2xl font-bold">{profile.name}, {profile.age}</h2>
      <p className="text-gray-600">{profile.location}</p>
      <p className="text-gray-800">{profile.bio || 'No bio yet. Click Edit Profile to add one!'}</p>
    </div>
  );
}
