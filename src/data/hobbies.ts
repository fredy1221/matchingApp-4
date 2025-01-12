export const hobbies = [
  {
    id: '1',
    name: 'Padel',
    description: 'A fun and social racket sport.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80',
    levels: {
      Beginner: 'Learn the basics of padel.',
      Intermediate: 'Improve your skills and tactics.',
      Advanced: 'Compete at a high level.'
    }
  },
  {
    id: '2',
    name: 'Piano',
    description: 'Discover the joy of playing the piano.',
    image: 'https://images.unsplash.com/photo-1511376777868-611b54f68947?auto=format&fit=crop&q=80',
    levels: {
      Beginner: 'Learn basic piano techniques.',
      Intermediate: 'Enhance your playing skills.',
      Advanced: 'Master complex pieces.'
    }
  },
  {
    id: '3',
    name: 'Photography',
    description: 'Capture the world through your lens.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80',
    levels: {
      Beginner: 'Understand camera settings and composition.',
      Intermediate: 'Develop your style and technique.',
      Advanced: 'Create professional-quality images.'
    }
  },
  {
    id: '4',
    name: 'Cooking',
    description: 'Explore culinary arts and cook delicious meals.',
    image: 'https://images.unsplash.com/photo-1512058564366-c9e1ed7b3ef7?auto=format&fit=crop&w=800&q=80',
    levels: {
      Beginner: 'Learn basic cooking techniques.',
      Intermediate: 'Experiment with new recipes.',
      Advanced: 'Master gourmet cooking.'
    }
  }
];

export const getHobbyById = (id: string) => hobbies.find(hobby => hobby.id === id);
export const getHobbyByName = (name: string) => hobbies.find(hobby => hobby.name === name);
export const getHobbyImage = (id: string) => {
  const hobby = getHobbyById(id);
  return hobby ? hobby.image : '';
};
