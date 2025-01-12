import { useState } from 'react';
import type { UserProfile } from '../types/profile';
import { mockUsers } from '../data/mockUsers';

// Mock current user profile - In a real app, this would come from your backend
const mockProfile: UserProfile = {
  id: 'current-user',
  name: 'Alex Thompson',
  age: 28,
  location: 'New York',
  bio: 'Passionate about connecting people through shared interests.',
  hobbies: ['Photography', 'Rock Climbing', 'Piano'],
  profileImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80',
  availability: [
    { weekday: 1, startTime: '09:00', endTime: '17:00' },
    { weekday: 3, startTime: '09:00', endTime: '17:00' },
    { weekday: 5, startTime: '09:00', endTime: '17:00' },
  ]
};

export function useProfile() {
  const [profile, setProfile] = useState<UserProfile>(mockProfile);
  const [isEditing, setIsEditing] = useState(false);

  const updateProfile = (updates: Partial<UserProfile>) => {
    setProfile(prev => ({ ...prev, ...updates }));
    return true;
  };

  const addHobby = (hobby: string) => {
    if (!profile.hobbies.includes(hobby)) {
      setProfile(prev => ({
        ...prev,
        hobbies: [...prev.hobbies, hobby]
      }));
    }
  };

  const removeHobby = (hobby: string) => {
    setProfile(prev => ({
      ...prev,
      hobbies: prev.hobbies.filter(h => h !== hobby)
    }));
  };

  return {
    profile,
    isEditing,
    setIsEditing,
    updateProfile,
    addHobby,
    removeHobby
  };
}
