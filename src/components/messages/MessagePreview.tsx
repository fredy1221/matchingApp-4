import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import { getHobbyIcon } from '../../utils/hobbyIcons';
import type { Conversation } from '../../types';

interface MessagePreviewProps {
  conversation: Conversation;
  onSelect: (conversation: Conversation) => void;
}

export function MessagePreview({ conversation, onSelect }: MessagePreviewProps) {
  const { partner, lastMessage, hobby } = conversation;
  
  return (
    <div 
      onClick={() => onSelect(conversation)}
      className="p-4 border-b hover:bg-gray-50 cursor-pointer transition-colors"
    >
      <div className="flex items-center gap-3">
        <div className="relative">
          <img
            src={partner.profileImage}
            alt={partner.name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-1">
            {getHobbyIcon(hobby)}
          </div>
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold truncate">{partner.name}</h3>
            <span className="text-sm text-gray-500">
              {formatDistanceToNow(lastMessage.timestamp, { addSuffix: true })}
            </span>
          </div>
          
          <p className="text-sm text-gray-600 truncate">
            {lastMessage.text}
          </p>
        </div>
      </div>
    </div>
  );
}
