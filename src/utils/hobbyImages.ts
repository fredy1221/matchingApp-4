export const getHobbyImage = (hobby: string): string => {
  switch (hobby.toLowerCase()) {
    case 'piano':
      return 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&q=80';
    case 'cooking':
      return 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80';
    case 'paddle tennis':
    case 'tennis':
      return 'https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?auto=format&fit=crop&q=80';
    case 'sat prep':
    case 'gmat prep':
      return 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80';
    default:
      return 'https://images.unsplash.com/photo-1528716321680-815a8cdb8cbe?auto=format&fit=crop&q=80';
  }
};
