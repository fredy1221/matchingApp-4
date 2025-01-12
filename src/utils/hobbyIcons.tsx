import React from 'react';
import { 
  Book, 
  Music, 
  Utensils, 
  Dumbbell,
  Camera,
  Bike,
  Mountain,
  Gamepad2,
  Wine,
  Tent,
  Mic2,
  GraduationCap
} from 'lucide-react';

export const getHobbyIcon = (hobby: string) => {
  switch (hobby.toLowerCase()) {
    case 'sat prep':
    case 'gmat prep':
      return <Book className="w-8 h-8 text-blue-500" />;
    case 'piano':
    case 'classical music':
    case 'music':
    case 'karaoke':
    case 'singing':
      return <Music className="w-8 h-8 text-purple-500" />;
    case 'cooking':
    case 'italian cuisine':
      return <Utensils className="w-8 h-8 text-orange-500" />;
    case 'paddle tennis':
    case 'tennis':
    case 'table tennis':
    case 'fitness':
    case 'yoga':
    case 'pilates':
      return <Dumbbell className="w-8 h-8 text-green-500" />;
    case 'photography':
    case 'street photography':
      return <Camera className="w-8 h-8 text-blue-400" />;
    case 'cycling':
    case 'mountain biking':
    case 'road cycling':
      return <Bike className="w-8 h-8 text-red-500" />;
    case 'rock climbing':
    case 'bouldering':
      return <Mountain className="w-8 h-8 text-stone-500" />;
    case 'video games':
    case 'dota 2':
    case 'fifa':
      return <Gamepad2 className="w-8 h-8 text-indigo-500" />;
    case 'mixology':
    case 'cocktail making':
    case 'wine tasting':
      return <Wine className="w-8 h-8 text-pink-500" />;
    case 'hiking':
    case 'trail running':
      return <Tent className="w-8 h-8 text-emerald-500" />;
    case 'karaoke nights':
      return <Mic2 className="w-8 h-8 text-violet-500" />;
    case 'chess':
    case 'board games':
    case 'strategy games':
      return <GraduationCap className="w-8 h-8 text-amber-500" />;
    default:
      return null;
  }
};
