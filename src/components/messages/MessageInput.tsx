import React, { useState } from 'react';
import { Send } from 'lucide-react';

interface MessageInputProps {
  onSend: (text: string) => void;
  initialDraft?: string;
}

export function MessageInput({ onSend, initialDraft = '' }: MessageInputProps) {
  const [draft, setDraft] = useState(initialDraft);
  const [isEditing, setIsEditing] = useState(!!initialDraft);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (draft.trim()) {
      onSend(draft.trim());
      setDraft('');
      setIsEditing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="border-t p-4">
      {isEditing && (
        <div className="mb-2 text-sm text-indigo-600 font-medium">
          Editing draft message
        </div>
      )}
      <div className="flex items-end gap-2">
        <textarea
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onFocus={() => setIsEditing(true)}
          placeholder="Type a message..."
          className="flex-1 resize-none rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
          rows={1}
          style={{ minHeight: '2.5rem', maxHeight: '8rem' }}
        />
        <button
          type="submit"
          disabled={!draft.trim()}
          className="p-2 bg-indigo-600 text-white rounded-full disabled:opacity-50 disabled:cursor-not-allowed hover:bg-indigo-700 transition-colors"
        >
          <Send className="w-5 h-5" />
        </button>
      </div>
    </form>
  );
}
