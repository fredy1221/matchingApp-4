import { useState, useEffect } from 'react';
import { getMockMessages } from '../data/mockMessages';
import type { Message } from '../types';

export function useChat(conversationId: string) {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    // Load mock messages for the conversation
    setMessages(getMockMessages(conversationId));
  }, [conversationId]);

  const sendMessage = (text: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      timestamp: new Date(),
      senderId: 'current-user'
    };
    setMessages(prev => [...prev, newMessage]);
  };

  return {
    messages,
    sendMessage
  };
}
