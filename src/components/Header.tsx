import React, { useState } from 'react';
import { Users, MessageCircle, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ProfileView } from './profile/ProfileView';
import { CustomButton } from './CustomButton';

interface HeaderProps {
  onMessagesClick: () => void;
}

export function Header({ onMessagesClick }: HeaderProps) {
  const [showProfile, setShowProfile] = useState(false);

  const handleMessagesClick = () => {
    console.log('Navigating to Messages Page');
    onMessagesClick();
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          <Users className="w-8 h-8 text-indigo-600" />
          <nav className="flex gap-4">
            <CustomButton
              logMessage="Clicked Messages Icon"
              onClick={handleMessagesClick}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <MessageCircle className="w-6 h-6 text-gray-600" />
            </CustomButton>
            <Link to="/explore" className="p-2 hover:bg-gray-100 rounded-full">
              <Search className="w-6 h-6 text-gray-600" />
            </Link>
            <CustomButton
              logMessage="Clicked User Profile Icon"
              onClick={() => {
                console.log('Navigating to User Profile');
                setShowProfile(true);
              }}
              className="w-10 h-10 rounded-full overflow-hidden hover:ring-2 hover:ring-indigo-500 transition-all"
            >
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </CustomButton>
          </nav>
        </div>
      </header>

      {showProfile && <ProfileView onClose={() => setShowProfile(false)} />}
    </>
  );
}
