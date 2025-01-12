import React, { useState } from 'react';
import { User } from 'lucide-react';
import { MapPin, MessageCircle, X, CalendarClock } from 'lucide-react';
import { getHobbyById } from '../data/hobbies';
import { ProfileCard } from './ProfileCard';
import { DirectMessageModal } from './DirectMessageModal';
import { ScheduleModal } from './scheduling/ScheduleModal';
import { useChat } from '../hooks/useChat';
import { useNavigate } from 'react-router-dom';
import { CustomButton } from './CustomButton';

interface CardProps {
  user: User;
  onLike: () => void;
  onPass: () => void;
  onHobbyClick: (hobby: string) => void;
}

export function Card({ user, onLike, onPass, onHobbyClick }: CardProps) {
  const [showProfile, setShowProfile] = useState(false);
  const [showMessageModal, setShowMessageModal] = useState(false);
  const [showScheduleModal, setShowScheduleModal] = useState(false);
  const { sendMessage } = useChat(user.id);
  const navigate = useNavigate();

  const handleMessageClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowMessageModal(true);
  };

  const handleScheduleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowScheduleModal(true);
  };

  const handleHobbyTagClick = (hobbyId: string) => {
    const hobby = getHobbyById(hobbyId);
    if (hobby) {
      console.log(`Navigating to /hobby/${hobby.name}`);
      navigate(`/hobby/${hobby.name}`);
    }
  };

  return (
    <>
      <div className="h-full relative bg-white rounded-xl overflow-hidden shadow-xl">
        <img
          src={user.profileImage}
          alt={user.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent pt-32 pb-24 px-6">
          <div className="text-white">
            <div className="flex items-center gap-2">
              <h2 className="text-3xl font-bold">{user.name}, {user.age}</h2>
              <div className="flex items-center text-sm">
                <MapPin size={16} className="mr-1" />
                {user.location}
              </div>
            </div>
            <p className="mt-3 text-gray-200 text-lg">{user.bio}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {user.hobbies.map((hobbyId) => {
                const hobby = getHobbyById(hobbyId);
                return hobby ? (
                  <CustomButton
                    key={hobbyId}
                    logMessage={`Clicked on hobby tag: ${hobby.name}`}
                    onClick={() => handleHobbyTagClick(hobbyId)}
                    className="px-4 py-1.5 bg-white/20 rounded-full text-sm font-medium hover:bg-white/30 transition-colors"
                  >
                    {hobby.name}
                  </CustomButton>
                ) : null;
              })}
            </div>
          </div>
        </div>
        <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-6">
          <CustomButton
            logMessage="Clicked Pass button"
            onClick={onPass}
            className="p-4 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-colors"
            aria-label="Pass"
          >
            <X className="w-8 h-8 text-red-500" />
          </CustomButton>
          <CustomButton
            logMessage="Clicked Message button"
            onClick={handleMessageClick}
            className="p-4 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-colors"
            aria-label="Send message"
          >
            <MessageCircle className="w-8 h-8 text-blue-500" />
          </CustomButton>
          <CustomButton
            logMessage="Clicked Schedule button"
            onClick={handleScheduleClick}
            className="p-4 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-colors"
            aria-label="Schedule session"
          >
            <CalendarClock className="w-8 h-8 text-purple-500" />
          </CustomButton>
          <CustomButton
            logMessage={`Clicked View Profile button, navigating to /profile/${user.id}`}
            onClick={() => {
              console.log(`Navigating to /profile/${user.id}`);
              navigate(`/profile/${user.id}`);
            }}
            className="p-4 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-colors"
            aria-label="View profile"
          >
            <User className="w-8 h-8 text-gray-500" />
          </CustomButton>
        </div>
      </div>
      
      {showProfile && (
        <ProfileCard 
          user={user} 
          onClose={() => setShowProfile(false)} 
        />
      )}

      {showMessageModal && (
        <DirectMessageModal
          user={user}
          onClose={() => setShowMessageModal(false)}
          onSend={sendMessage}
        />
      )}

      {showScheduleModal && (
        <ScheduleModal
          user={user}
          onClose={() => setShowScheduleModal(false)}
          onSchedule={sendMessage}
        />
      )}
    </>
  );
}
