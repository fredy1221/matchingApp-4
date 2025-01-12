export interface User {
  id: string;
  name: string;
  age: number;
  bio: string;
  hobbies: string[]; // Array of hobby IDs
  profileImage: string;
  location: string;
}
