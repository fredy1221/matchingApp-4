import { useState, useCallback } from 'react';
import { mockUsers } from '../data/mockUsers';
import { useMatch } from './useMatch';
import type { User } from '../types';

export function useProfiles() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { matches, showMatch, matchedUser, handleMatch } = useMatch();

  const shouldMatch = useCallback((user: User) => {
    // Simulate matching with some users (for demo purposes)
    return ['2', '4', '6'].includes(user.id);
  }, []);

  const handleLike = () => {
    const currentUser = mockUsers[currentIndex];
    
    if (shouldMatch(currentUser)) {
      handleMatch(currentUser);
    }

    setCurrentIndex((prev) => Math.min(prev + 1, mockUsers.length - 1));
  };

  const handlePass = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, mockUsers.length - 1));
  };

  return {
    currentProfile: currentIndex < mockUsers.length ? mockUsers[currentIndex] : null,
    nextProfile: currentIndex + 1 < mockUsers.length ? mockUsers[currentIndex + 1] : null,
    handleLike,
    handlePass,
    isFinished: currentIndex >= mockUsers.length,
    matches,
    showMatch,
    matchedUser
  };
}
