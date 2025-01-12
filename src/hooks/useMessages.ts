import { useState, useMemo } from 'react';
import { mockConversations } from '../data/mockConversations';

export function useMessages() {
  const [searchQuery, setSearchQuery] = useState('');
  
  const conversations = useMemo(() => {
    if (!searchQuery) return mockConversations;
    
    const query = searchQuery.toLowerCase();
    return mockConversations.filter(
      conversation =>
        conversation.partner.name.toLowerCase().includes(query) ||
        conversation.hobby.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  return {
    conversations,
    searchQuery,
    setSearchQuery
  };
}
