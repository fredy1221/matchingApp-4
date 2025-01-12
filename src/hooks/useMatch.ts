import { useState } from 'react';
import type { User } from '../types';

export function useMatch() {
  const [matches, setMatches] = useState<string[]>([]);
  const [showMatch, setShowMatch] = useState(false);
  const [matchedUser, setMatchedUser] = useState<User | null>(null);

  const handleMatch = (user: User) => {
    setMatchedUser(user);
    setShowMatch(true);
    setMatches(prev => [...prev, user.id]);
    setTimeout(() => setShowMatch(false), 3000);
  };

  return {
    matches,
    showMatch,
    matchedUser,
    handleMatch
  };
}
