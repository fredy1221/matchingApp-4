import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { mockUsers } from '../../data/mockUsers';
import { ArrowLeft, MessageCircle, CalendarClock } from 'lucide-react';
import { getHobbyById } from '../../data/hobbies';

const UserProfilePage = () => {
  const { userId } = useParams<{ userId: string }>();
  const user = mockUsers.find(u => u.id === userId);
  const navigate = useNavigate();

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <button
        onClick={() => {
          console.log('Navigating back from User Profile Page');
          navigate(-1);
        }}
        className="mb-4 p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
      >
        <ArrowLeft className="w-6 h-6" />
      </button>
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <img
          src={user.profileImage}
          alt={user.name}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-2">{user.name}</h1>
          <p className="text-gray-600 mb-4">{user.bio}</p>
          <h2 className="text-xl font-semibold mb-2">Hobbies</h2>
          <ul className="list-disc list-inside text-gray-700">
            {user.hobbies.map(hobbyId => {
              const hobby = getHobbyById(hobbyId);
              return hobby ? <li key={hobbyId}>{hobby.name}</li> : null;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;
