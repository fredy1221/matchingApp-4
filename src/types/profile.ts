export interface UserProfile {
  id: string;
  name: string;
  age: number;
  location: string;
  bio: string;
  hobbies: { name: string; skillLevel: string }[];
  profileImage: string;
  availability: {
    weekday: number;
    startTime: string;
    endTime: string;
  }[];
}
