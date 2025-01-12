import React from 'react';
import { Card } from './Card';
import { NoMoreProfiles } from './NoMoreProfiles';
import { MatchPopup } from './MatchPopup';
import type { User } from '../types';

interface ProfileViewProps {
  currentProfile: User | null;
  nextProfile: User | null;
  onLike: () => void;
  onPass: () => void;
  isFinished: boolean;
  showMatch: boolean;
  matchedUser: User | null;
  onHobbyClick: (hobby: string) => void;
}

export function ProfileView({ 
  currentProfile, 
  onLike, 
  onPass, 
  isFinished,
  showMatch,
  matchedUser,
  onHobbyClick
}: ProfileViewProps) {
  if (isFinished || !currentProfile) {
    return (
      <div className="h-full flex items-center justify-center px-4">
        <NoMoreProfiles />
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto h-full p-4">
      <Card
        user={currentProfile}
        onLike={onLike}
        onPass={onPass}
        onHobbyClick={onHobbyClick}
      />
      {showMatch && matchedUser && (
        <MatchPopup user={matchedUser} />
      )}
    </div>
  );
}
