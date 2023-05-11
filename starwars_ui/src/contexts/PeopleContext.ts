import { createContext, useContext } from 'react';
import { PersonDetails } from "../types";

interface PeopleContextProps {
  results: PersonDetails[] | undefined;
  count: number | undefined;
  setResults: React.Dispatch<React.SetStateAction<PersonDetails[] | undefined>>;
  setCount: React.Dispatch<React.SetStateAction<number | undefined>>;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

export const PeopleContext: React.Context<PeopleContextProps | undefined> = createContext<PeopleContextProps | undefined>(undefined);

export function usePeople() {
  const context = useContext(PeopleContext);
  if (!context) {
    throw new Error('usePeople must be used within a PeopleProvider');
  }
  return context;
}
