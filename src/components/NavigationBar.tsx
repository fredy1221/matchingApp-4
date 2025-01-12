import React from 'react';
import { useNavigate } from 'react-router-dom';

const NavigationBar = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-md flex justify-around py-2">
      <button
        onClick={() => navigate('/')}
        className="text-gray-700 hover:text-indigo-600 transition-colors"
      >
        My Company
      </button>
      <button
        onClick={() => navigate('/all-users')}
        className="text-gray-700 hover:text-indigo-600 transition-colors"
      >
        All Users
      </button>
      <button
        onClick={() => navigate('/explore')}
        className="text-gray-700 hover:text-indigo-600 transition-colors"
      >
        All Hobbies
      </button>
      <button
        onClick={() => navigate('/profile/current-user')}
        className="text-gray-700 hover:text-indigo-600 transition-colors"
      >
        My Profile
      </button>
    </div>
  );
};

export default NavigationBar;
