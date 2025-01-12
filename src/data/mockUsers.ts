import { User } from '../types';
import { getHobbyByName } from './hobbies';

const originalUsers: User[] = [
  {
    id: '1',
    name: 'Sarah',
    age: 28,
    bio: 'Piano enthusiast looking for fellow musicians to practice and perform together.',
    hobbies: [getHobbyByName('Piano')?.id].filter(Boolean) as string[],
    profileImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
    location: 'New York'
  },
  {
    id: '2',
    name: 'Eddy',
    age: 31,
    bio: 'Passionate about cooking Italian cuisine. Looking for cooking buddies!',
    hobbies: [getHobbyByName('Cooking')?.id].filter(Boolean) as string[],
    profileImage: 'https://images.unsplash.com/photo-1545996124-0501ebae84d0?auto=format&fit=crop&q=80',
    location: 'Chicago'
  },
  {
    id: '3',
    name: 'Emma',
    age: 26,
    bio: 'Paddle tennis player seeking partners for regular matches and practice.',
    hobbies: [getHobbyByName('Padel')?.id].filter(Boolean) as string[],
    profileImage: 'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?auto=format&fit=crop&q=80',
    location: 'Los Angeles'
  },
  {
    id: '4',
    name: 'Sophie',
    age: 29,
    bio: 'Looking for a paddle tennis partner in Paris 15ème. Available weekends and evenings after work!',
    hobbies: [getHobbyByName('Padel')?.id].filter(Boolean) as string[],
    profileImage: 'https://images.unsplash.com/photo-1554244933-d876deb6b2ff?auto=format&fit=crop&q=80',
    location: 'Paris 15ème'
  },
  {
    id: '5',
    name: 'Tia',
    age: 22,
    bio: 'Preparing for SAT and seeking a study buddy in Riyadh. Let\'s ace this together! 📚',
    hobbies: [getHobbyByName('Photography')?.id].filter(Boolean) as string[],
    profileImage: 'https://images.unsplash.com/photo-1544717302-de2939b7ef71?auto=format&fit=crop&q=80',
    location: 'Riyadh'
  },
  {
    id: '6',
    name: 'Fatima',
    age: 27,
    bio: 'GMAT prep partner needed in Dubai! Currently scoring 650, aiming for 720+. Available for regular study sessions.',
    hobbies: [getHobbyByName('Cooking')?.id].filter(Boolean) as string[],
    profileImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80',
    location: 'Dubai'
  },
  {
    id: '7',
    name: 'Alex',
    age: 29,
    bio: 'Yoga instructor looking for practice partners. Love helping beginners discover their inner peace.',
    hobbies: [getHobbyByName('Photography')?.id, getHobbyByName('Piano')?.id].filter(Boolean) as string[],
    profileImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80',
    location: 'Los Angeles'
  },
  {
    id: '8',
    name: 'David',
    age: 31,
    bio: 'Street photography enthusiast. Always looking for creative minds to explore the city with.',
    hobbies: [getHobbyByName('Photography')?.id].filter(Boolean) as string[],
    profileImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80',
    location: 'New York'
  },
  {
    id: '9',
    name: 'Maria',
    age: 25,
    bio: 'Table tennis champion seeking worthy opponents. Can teach beginners too!',
    hobbies: [getHobbyByName('Padel')?.id].filter(Boolean) as string[],
    profileImage: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80',
    location: 'Chicago'
  },
  {
    id: '10',
    name: 'James',
    age: 33,
    bio: 'Cycling enthusiast. Weekend rides are my therapy. Looking for group ride buddies!',
    hobbies: [getHobbyByName('Photography')?.id].filter(Boolean) as string[],
    profileImage: 'https://images.unsplash.com/photo-1563122870-6b0b48a0af09?auto=format&fit=crop&q=80',
    location: 'San Francisco'
  }
];

export const mockUsers: User[] = originalUsers;
