import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App.tsx';
import { ExplorePage } from './components/explore/ExplorePage';
import HobbyDetailsPage from './components/hobby/HobbyDetailsPage';
import UserProfilePage from './components/profile/UserProfilePage';
import NavigationBar from './components/NavigationBar';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <div className="pb-16"> {/* Add padding to avoid overlap with the navigation bar */}
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/all-users" element={<App />} /> {/* Reuse App for All Users */}
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/hobby/:hobbyName" element={<HobbyDetailsPage />} />
          <Route path="/profile/:userId" element={<UserProfilePage />} />
        </Routes>
        <NavigationBar />
      </div>
    </Router>
  </StrictMode>
);
