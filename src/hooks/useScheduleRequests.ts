import { useState, useEffect } from 'react';
import type { ScheduleRequest } from '../types/scheduling';

// Mock data - In a real app, this would be managed by your backend
const mockRequests: ScheduleRequest[] = [];

export function useScheduleRequests() {
  const [requests, setRequests] = useState<ScheduleRequest[]>(mockRequests);

  const createRequest = (
    receiverId: string,
    proposedDate: Date,
    notes?: string
  ) => {
    const request: ScheduleRequest = {
      id: Date.now().toString(),
      senderId: 'current-user',
      receiverId,
      proposedDate,
      notes,
      status: 'pending',
      createdAt: new Date(),
    };

    setRequests(prev => [...prev, request]);
    return request;
  };

  const updateRequestStatus = (
    requestId: string,
    status: 'accepted' | 'declined'
  ) => {
    setRequests(prev =>
      prev.map(req =>
        req.id === requestId
          ? { ...req, status }
          : req
      )
    );
  };

  return {
    requests,
    createRequest,
    updateRequestStatus,
  };
}
