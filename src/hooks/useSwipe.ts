import { useState, useEffect } from 'react';

interface SwipeState {
  startX: number;
  startY: number;
  isDragging: boolean;
  translateX: number;
  translateY: number;
  velocity: number;
  direction: 'left' | 'right' | null;
}

const initialState: SwipeState = {
  startX: 0,
  startY: 0,
  isDragging: false,
  translateX: 0,
  translateY: 0,
  velocity: 0,
  direction: null,
};

const SWIPE_THRESHOLD = 100;
const VELOCITY_THRESHOLD = 0.5;

export function useSwipe(onSwipeLeft: () => void, onSwipeRight: () => void) {
  const [state, setState] = useState<SwipeState>(initialState);

  const handleStart = (clientX: number, clientY: number) => {
    setState(prev => ({
      ...prev,
      startX: clientX,
      startY: clientY,
      isDragging: true,
      direction: null
    }));
  };

  const handleMove = (clientX: number, clientY: number) => {
    if (!state.isDragging) return;

    const deltaX = clientX - state.startX;
    const deltaY = clientY - state.startY;
    const velocity = Math.abs(deltaX) / 100;
    const direction = deltaX > 0 ? 'right' : 'left';

    setState(prev => ({
      ...prev,
      translateX: deltaX,
      translateY: deltaY,
      velocity,
      direction
    }));
  };

  const handleEnd = () => {
    if (!state.isDragging) return;

    const shouldSwipe = 
      Math.abs(state.translateX) > SWIPE_THRESHOLD || 
      state.velocity > VELOCITY_THRESHOLD;

    if (shouldSwipe) {
      const finalTranslateX = state.direction === 'right' ? window.innerWidth : -window.innerWidth;
      setState(prev => ({
        ...prev,
        isDragging: false,
        translateX: finalTranslateX,
        translateY: state.translateY * 1.5
      }));

      setTimeout(() => {
        if (state.direction === 'right') {
          onSwipeRight();
        } else {
          onSwipeLeft();
        }
        setState(initialState);
      }, 300);
    } else {
      setState(initialState);
    }
  };

  useEffect(() => {
    const handleMouseUp = () => handleEnd();
    const handleTouchEnd = () => handleEnd();

    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('touchend', handleTouchEnd);

    return () => {
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [state.translateX, state.velocity, state.direction]);

  return {
    handleMouseDown: (e: React.MouseEvent) => handleStart(e.clientX, e.clientY),
    handleMouseMove: (e: React.MouseEvent) => handleMove(e.clientX, e.clientY),
    handleTouchStart: (e: React.TouchEvent) => {
      const touch = e.touches[0];
      handleStart(touch.clientX, touch.clientY);
    },
    handleTouchMove: (e: React.TouchEvent) => {
      const touch = e.touches[0];
      handleMove(touch.clientX, touch.clientY);
    },
    style: {
      transform: `translate(${state.translateX}px, ${state.translateY}px) rotate(${state.translateX * 0.1}deg)`,
      transition: state.isDragging ? 'none' : 'transform 0.3s ease-out',
      opacity: Math.max(1 - Math.abs(state.translateX) / (window.innerWidth / 2), 0)
    }
  };
}
