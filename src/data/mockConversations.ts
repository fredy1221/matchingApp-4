import { Conversation } from '../types';
import { mockUsers } from './mockUsers';

export const mockConversations: Conversation[] = [
  {
    id: '1',
    partner: mockUsers[1],
    hobby: 'Cooking',
    lastMessage: {
      id: 'm1',
      text: 'Would you like to join my cooking session this weekend?',
      timestamp: new Date(Date.now() - 1000 * 60 * 30), // 30 minutes ago
      senderId: mockUsers[1].id
    }
  },
  {
    id: '2',
    partner: mockUsers[2],
    hobby: 'Paddle Tennis',
    lastMessage: {
      id: 'm2',
      text: 'Great match today! Same time next week?',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
      senderId: 'current-user'
    }
  },
  {
    id: '3',
    partner: mockUsers[0],
    hobby: 'Piano',
    lastMessage: {
      id: 'm3',
      text: 'I found this amazing piece we could practice together',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24), // 1 day ago
      senderId: mockUsers[0].id
    }
  }
];
