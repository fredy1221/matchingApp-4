import type { Message } from '../types';

export const getMockMessages = (conversationId: string): Message[] => [
  {
    id: '1',
    text: 'Hey there! Would you like to practice together?',
    timestamp: new Date(Date.now() - 1000 * 60 * 60), // 1 hour ago
    senderId: 'current-user'
  },
  {
    id: '2',
    text: "Sure! I would love to. When are you free?",
    timestamp: new Date(Date.now() - 1000 * 60 * 30), // 30 minutes ago
    senderId: 'partner'
  }
];
