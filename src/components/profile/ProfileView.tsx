import React, { useState } from 'react';
import { X } from 'lucide-react';
import { ProfileHeader } from './ProfileHeader';
import { ProfileDetails } from './ProfileDetails';
import { HobbiesSection } from './HobbiesSection';
import { AvailabilitySection } from './AvailabilitySection';
import { useProfile } from '../../hooks/useProfile';

interface ProfileViewProps {
  onClose: () => void;
}

export function ProfileView({ onClose }: ProfileViewProps) {
  const { 
    profile, 
    isEditing, 
    setIsEditing, 
    updateProfile, 
    addHobby, 
    removeHobby 
  } = useProfile();

  const handleSave = () => {
    setIsEditing(false);
    const notification = document.createElement('div');
    notification.className = 'fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50';
    notification.textContent = 'Profile updated successfully';
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 3000);
  };

  return (
    <div className="fixed inset-0 bg-white z-50 overflow-y-auto animate-slide-in">
      <div className="relative max-w-2xl mx-auto">
        <button
          onClick={() => {
            console.log('Navigating back from User Profile');
            onClose();
          }}
          className="absolute right-4 top-4 p-2 bg-white/90 rounded-full z-10 hover:bg-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <ProfileHeader
          profile={profile}
          isEditing={isEditing}
          onUpdate={updateProfile}
        />

        <div className="px-4">
          <ProfileDetails
            profile={profile}
            isEditing={isEditing}
            onUpdate={updateProfile}
          />

          <HobbiesSection
            hobbies={profile.hobbies}
            isEditing={isEditing}
            onAdd={addHobby}
            onRemove={removeHobby}
          />

          <AvailabilitySection
            availability={profile.availability}
            isEditing={isEditing}
            onUpdate={(availability) => updateProfile({ availability })}
          />

          <div className="flex gap-4 my-8">
            {isEditing ? (
              <>
                <button
                  onClick={() => setIsEditing(false)}
                  className="flex-1 px-4 py-2 border rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  className="flex-1 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  Save Changes
                </button>
              </>
            ) : (
              <button
                onClick={() => setIsEditing(true)}
                className="w-full px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Edit Profile
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
