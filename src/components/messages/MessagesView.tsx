import React, { useState } from 'react';
import { ArrowLeft, Users } from 'lucide-react';
import { MessageList } from './MessageList';
import { ChatView } from './ChatView';
import type { Conversation } from '../../types';

interface MessagesViewProps {
  onClose: () => void;
}

export function MessagesView({ onClose }: MessagesViewProps) {
  const [selectedConversation, setSelectedConversation] = useState<Conversation | null>(null);

  if (selectedConversation) {
    return (
      <ChatView
        conversation={selectedConversation}
        onBack={() => setSelectedConversation(null)}
      />
    );
  }

  return (
    <div className="fixed inset-0 bg-white z-50 animate-slide-in">
      <div className="h-full flex flex-col">
        <header className="bg-white shadow-sm p-4 flex items-center gap-4">
          <button
            onClick={() => {
              console.log('Navigating to Main Feed');
              onClose();
            }}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          
          <h1 className="text-xl font-semibold">Messages</h1>
          
          <button className="ml-auto p-2 hover:bg-gray-100 rounded-full transition-colors">
            <Users className="w-6 h-6" />
          </button>
        </header>

        <MessageList onSelectConversation={setSelectedConversation} />
      </div>
    </div>
  );
}
