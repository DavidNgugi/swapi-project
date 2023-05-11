import React, { useState } from 'react';
import { PeopleContext } from '../contexts/PeopleContext';
import { PersonDetails } from '../types/index';

interface PeopleProviderProps {
  children: React.ReactNode;
}

const PeopleProvider: React.FC<PeopleProviderProps> = ({ children }: { children: React.ReactNode }) => {
  const [results, setResults] = useState<PersonDetails[] | undefined>(undefined);
  const [count, setCount] = useState<number | undefined>(undefined);
  const [page, setPage] = useState<number>(1);

  const value = { results, setResults, count, setCount, page, setPage };

  return (
    <PeopleContext.Provider value={value} >
      {children}
    </PeopleContext.Provider>
  );
}

export default PeopleProvider;