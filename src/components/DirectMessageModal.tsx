import React from 'react';
import { X } from 'lucide-react';
import { MessageInput } from './messages/MessageInput';
import type { User } from '../types';

interface DirectMessageModalProps {
  user: User;
  onClose: () => void;
  onSend: (text: string) => void;
}

export function DirectMessageModal({ user, onClose, onSend }: DirectMessageModalProps) {
  const defaultMessage = `Hi ${user.name}, I saw your profile and wanted to connect!`;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 animate-fade-in">
      <div className="bg-white rounded-xl w-full max-w-md animate-pop-up">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold">Message {user.name}</h2>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <MessageInput 
          onSend={(text) => {
            onSend(text);
            onClose();
          }}
          initialDraft={defaultMessage}
        />
      </div>
    </div>
  );
}
