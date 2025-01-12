import React, { useState } from 'react';
import { Header } from './components/Header';
import { ProfileView } from './components/ProfileView';
import { DiscoverView } from './components/DiscoverView';
import { MessagesView } from './components/messages/MessagesView';
import { useProfiles } from './hooks/useProfiles';

function App() {
  const { 
    currentProfile, 
    nextProfile,
    handleLike, 
    handlePass, 
    isFinished,
    showMatch,
    matchedUser
  } = useProfiles();

  const [activeHobby, setActiveHobby] = useState<string | null>(null);
  const [showMessages, setShowMessages] = useState(false);

  const handleHobbyClick = (hobby: string) => {
    setActiveHobby(hobby);
  };

  if (showMessages) {
    return <MessagesView onClose={() => setShowMessages(false)} />;
  }

  if (activeHobby) {
    return (
      <DiscoverView 
        hobby={activeHobby} 
        onBack={() => setActiveHobby(null)} 
      />
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Header onMessagesClick={() => setShowMessages(true)} />
      <main className="h-[calc(100vh-4rem)]">
        <div className="h-full">
          <ProfileView
            currentProfile={currentProfile}
            nextProfile={nextProfile}
            onLike={handleLike}
            onPass={handlePass}
            isFinished={isFinished}
            showMatch={showMatch}
            matchedUser={matchedUser}
            onHobbyClick={handleHobbyClick}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
