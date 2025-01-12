import React from 'react';
import { Clock } from 'lucide-react';

interface AvailabilityIndicatorProps {
  isAvailable: boolean;
}

export function AvailabilityIndicator({ isAvailable }: AvailabilityIndicatorProps) {
  if (!isAvailable) return null;

  return (
    <div className="flex items-center gap-1 text-sm text-green-600">
      <Clock className="w-4 h-4" />
      <span>Available at this time</span>
    </div>
  );
}
