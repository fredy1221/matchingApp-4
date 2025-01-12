import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { getHobbyByName, getHobbyImage } from '../../data/hobbies';
import { mockUsers } from '../../data/mockUsers';

const HobbyDetailsPage = () => {
  const { hobbyName } = useParams<{ hobbyName: string }>();
  const hobby = getHobbyByName(hobbyName || '');
  const hobbyImage = hobby ? hobby.image : '';
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const communityMembers = mockUsers.filter(user =>
    user.hobbies.includes(hobby?.id || '')
  );

  const handleBackClick = () => {
    console.log('Navigating to Explore Page');
    navigate('/explore');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="relative h-64 bg-indigo-600">
        {hobbyImage && (
          <img
            src={hobbyImage}
            alt={hobbyName}
            className="w-full h-full object-cover opacity-50"
          />
        )}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">{hobbyName}</h1>
        </div>
        <button
          onClick={handleBackClick}
          className="absolute top-4 left-4 p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
      </header>
      <div className="p-6">
        <section className="mb-8">
          <p className="text-gray-700">
            {hobbyName} is a fascinating activity that allows you to explore new skills and meet like-minded individuals. Whether you're a beginner or an expert, there's always something new to learn and enjoy.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Skill Levels</h2>
          <ul className="list-disc list-inside text-gray-700">
            {hobby && Object.entries(hobby.levels).map(([level, description]) => (
              <li key={level}><strong>{level}:</strong> {description}</li>
            ))}
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Community Members</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {communityMembers.map((member, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                <img
                  src={member.profileImage}
                  alt={member.name}
                  className="w-16 h-16 rounded-full mx-auto mb-2"
                />
                <h3 className="text-center font-semibold">{member.name}</h3>
                <p className="text-center text-sm text-gray-500">Intermediate</p>
              </div>
            ))}
          </div>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Events</h2>
          <p className="text-gray-700">
            Join upcoming events or create your own to explore {hobbyName} with others.
          </p>
          {/* Add event details here */}
        </section>
        <div className="flex gap-4">
          <button className="flex-1 bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors">
            Join This Hobby
          </button>
          <button className="flex-1 bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors">
            Message Community
          </button>
          <button className="flex-1 bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors">
            Plan an Activity
          </button>
        </div>
      </div>
    </div>
  );
};

export default HobbyDetailsPage;
