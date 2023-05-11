export interface Person {
  name: string;
  height: string;
  mass: string;
  gender: string;
  homeworld: string;
}

export interface HomeWorld {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
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
  homeworld: (id: number) => Promise<HomeWorld>;
}