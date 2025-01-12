export interface Availability {
  userId: string;
  weekday: number; // 0-6 for Sunday-Saturday
  startTime: string; // HH:mm format
  endTime: string; // HH:mm format
}

export interface ScheduleRequest {
  id: string;
  senderId: string;
  receiverId: string;
  proposedDate: Date;
  notes?: string;
  status: 'pending' | 'accepted' | 'declined';
  createdAt: Date;
}
