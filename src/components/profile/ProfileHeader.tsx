import React, { useRef } from 'react';
import { Camera, MapPin } from 'lucide-react';
import type { UserProfile } from '../../types/profile';

interface ProfileHeaderProps {
  profile: UserProfile;
  isEditing: boolean;
  onUpdate: (updates: Partial<UserProfile>) => void;
}

export function ProfileHeader({ profile, isEditing, onUpdate }: ProfileHeaderProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      onUpdate({ profileImage: imageUrl });
    }
  };

  return (
    <div className="relative h-64 -mx-4 mb-6">
      <img
        src={profile.profileImage}
        alt={profile.name}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
      
      {isEditing && (
        <>
          <button
            onClick={() => fileInputRef.current?.click()}
            className="absolute inset-0 flex items-center justify-center bg-black/50 text-white opacity-0 hover:opacity-100 transition-opacity"
            aria-label="Change profile picture"
          >
            <Camera className="w-12 h-12" />
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageChange}
          />
        </>
      )}

      <div className="absolute bottom-0 left-0 right-0 p-6">
        <div className="text-white">
          <div className="flex items-center gap-2">
            <h2 className="text-3xl font-bold">{profile.name}, {profile.age}</h2>
          </div>
          <div className="flex items-center mt-2 text-white/90">
            <MapPin className="w-4 h-4 mr-1" />
            {profile.location}
          </div>
        </div>
      </div>
    </div>
  );
}
