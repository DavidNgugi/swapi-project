export interface Person {
  name: string;
  height: string;
  mass: string;
  gender: string;
  homeworld: string;
}

export interface PeopleResult {
  count: number;
  next: string;
  previous: string;
  results: Person[];
}

export interface Query {
  people: (page: number) => Promise<PeopleResult>;
  person: (name: string) => Promise<Person[]>;
}