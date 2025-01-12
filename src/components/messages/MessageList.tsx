import React from 'react';
import { Search } from 'lucide-react';
import { MessagePreview } from './MessagePreview';
import { useMessages } from '../../hooks/useMessages';
import type { Conversation } from '../../types';

interface MessageListProps {
  onSelectConversation: (conversation: Conversation) => void;
}

export function MessageList({ onSelectConversation }: MessageListProps) {
  const { conversations, searchQuery, setSearchQuery } = useMessages();

  return (
    <div className="flex-1 overflow-hidden flex flex-col">
      <div className="p-4 border-b">
        <div className="relative">
          <input
            type="text"
            placeholder="Search conversations..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <Search className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto">
        {conversations.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-gray-500 p-4">
            <p className="text-center">No conversations yet.</p>
            <p className="text-center text-sm">Start matching with people to begin chatting!</p>
          </div>
        ) : (
          conversations.map((conversation) => (
            <MessagePreview 
              key={conversation.id} 
              conversation={conversation}
              onSelect={(conv) => {
                console.log(`Clicked on conversation with ${conv.partner.name}`);
                onSelectConversation(conv);
              }}
            />
          ))
        )}
      </div>
    </div>
  );
}
