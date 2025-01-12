import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';

interface Hobby {
  name: string;
  skillLevel: string;
}

interface HobbiesSectionProps {
  hobbies: Hobby[];
  isEditing: boolean;
  onAdd: (hobby: Hobby) => void;
  onRemove: (hobby: Hobby) => void;
  onUpdateSkillLevel: (hobby: Hobby, skillLevel: string) => void;
}

const skillLevels = ['Beginner', 'Intermediate', 'Advanced', 'Expert'];

export function HobbiesSection({ hobbies, isEditing, onAdd, onRemove, onUpdateSkillLevel }: HobbiesSectionProps) {
  const [newHobby, setNewHobby] = useState('');
  const [newSkillLevel, setNewSkillLevel] = useState(skillLevels[0]);

  const handleAdd = () => {
    if (newHobby.trim()) {
      onAdd({ name: newHobby.trim(), skillLevel: newSkillLevel });
      setNewHobby('');
      setNewSkillLevel(skillLevels[0]);
    }
  };

  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold mb-3">Hobbies & Interests</h3>
      
      <div className="flex flex-wrap gap-2">
        {hobbies.map(hobby => (
          <div
            key={hobby.name}
            className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 rounded-full"
          >
            <div>
              <span>{hobby.name}</span>
              <span className="text-sm text-gray-500 ml-2">({hobby.skillLevel})</span>
            </div>
            {isEditing && (
              <>
                <select
                  value={hobby.skillLevel}
                  onChange={(e) => onUpdateSkillLevel(hobby, e.target.value)}
                  className="ml-2 border rounded"
                >
                  {skillLevels.map(level => (
                    <option key={level} value={level}>{level}</option>
                  ))}
                </select>
                <button
                  onClick={() => onRemove(hobby)}
                  className="p-0.5 hover:bg-gray-200 rounded-full"
                  aria-label={`Remove ${hobby.name}`}
                >
                  <X className="w-4 h-4" />
                </button>
              </>
            )}
          </div>
        ))}
        
        {isEditing && (
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={newHobby}
              onChange={(e) => setNewHobby(e.target.value)}
              placeholder="Add a hobby..."
              className="px-3 py-1.5 border rounded-full focus:ring-2 focus:ring-indigo-500"
            />
            <select
              value={newSkillLevel}
              onChange={(e) => setNewSkillLevel(e.target.value)}
              className="border rounded"
            >
              {skillLevels.map(level => (
                <option key={level} value={level}>{level}</option>
              ))}
            </select>
            <button
              onClick={handleAdd}
              disabled={!newHobby.trim()}
              className="p-1.5 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Add hobby"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
        )}

        {!isEditing && hobbies.length === 0 && (
          <p className="text-gray-500">
            No hobbies added yet. Click Edit Profile to add your interests!
          </p>
        )}
      </div>
    </div>
  );
}
